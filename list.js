const db = require('quick.db')

const discord = require('discord.js')
module.exports = {
    name: "list",
    description: "Lists out all players",
    run: async (client, message, args) => {

        
     
        //if(!message.member.hasPermission("ADMINISTRATOR")){
          //  const dbcheck = db.get(`useradmin_${member1.id}`)
           // if(dbcheck == null){
          //      return message.channel.send('You can\'t run that!')
           // }
        //}

        var myString = "";



            
          
            message.guild.members.cache.forEach(async (member) => {
            const dingus = member.user.presence.activities
            if(dingus.length > 1){



                const final = member.user.presence.activities.find(o => o.type === "PLAYING" && o.applicationID != null && o.name != null)
                const api = final.name

              

                        myString += `**${member.user}:** ${api}\n`;
                


         



        

            }





                

           
            });
        
        const embed = new discord.MessageEmbed()
        .setTitle('Games')
        .setDescription(myString)
        message.channel.send(embed)
 }
    

}