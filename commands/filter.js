const db = require('quick.db')

const discord = require('discord.js')
module.exports = {
    name: "filter",
    description: "Args: game or user",
    run: async (client, message, args) => {

        
      
      //  if(!message.member.hasPermission("ADMINISTRATOR")){
      //      const dbcheck = db.get(`useradmin_${member1.id}`)
      //      if(dbcheck == null){
        //        return message.channel.send('You can\'t run that!')
        //    }
     //   } 
    if (args[0] === 'game'){
        var myString = "";


        let reason = args.slice(1).join(" ");

            
          
        message.guild.members.cache.forEach(async (member) => {
        const dingus = member.user.presence.activities
        if(dingus.length > 1){



            const final = member.user.presence.activities.find(o => o.type === "PLAYING" && o.name != `${reason}` && o.applicationID != null)
            const api = final.name

         
          
                    myString += `**${member.user}:** ${api}\n`;
                }
        

        });

          
        const embed = new discord.MessageEmbed()
        .setTitle(`Search Results`)
        .setDescription(myString)
        message.channel.send(embed)
    }else if (args[0] === 'user'){
        var myString = "";
        const member1 = message.mentions.members.first() || message.guild.members.cache.get(args[0]);        

        message.guild.members.cache.forEach(async (member) => {
        if(member.user != member1){
            const dingus = member.user.presence.activities
            if(dingus.length > 1){


                

                const final = member.user.presence.activities.find(o => o.type === "PLAYING" && o.applicationID != null)
                const api = final.name

              
            }
        }
     
                    
                  
                
           
   
     

        });
    }
}
}