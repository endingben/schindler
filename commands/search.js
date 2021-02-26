const db = require('quick.db')

const discord = require('discord.js')
module.exports = {
    name: "search",
    description: "Kicks a member from the server",
    run: async (client, message, args) => {

    //    if(!message.member.hasPermission("ADMINISTRATOR")){
        //    const dbcheck = db.get(`useradmin_${member1.id}`)
        //    if(dbcheck == null){
      //          return message.channel.send('You can\'t run that!')
         //   }
            
       // } 
    if (args[0] === 'game'){

        var myString = "";


        let reason = args.slice(1).join(" ");

            
          
        message.guild.members.cache.forEach(async (member) => {
        const dingus = member.user.presence.activities
        if(dingus.length > 1){



            const final = member.user.presence.activities.find(o => o.type === "PLAYING" && o.name === `${reason}`)
            const api = final.name

         
          
                    myString += `**${member.user}:** ${api}\n`;
                }
        

        });

          
        const embed = new discord.MessageEmbed()
        .setTitle(`Search Results For ${reason}`)
        .setDescription(myString)
        message.channel.send(embed)
    }else if (args[0] === 'user'){

        var myString = "";


        let reason = args.slice(1).join(" ");

            
          
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        
        const dingus = member.user.presence.activities
        if(member == null)return 
        if(dingus.length > 1){



            const final = member.user.presence.activities.find(o => o.type === "PLAYING" && o.applicationID != null && o.name != null)
            const api = final.name

          
          
                myString += `${api}`;

                const embed = new discord.MessageEmbed()
                .setTitle(`Profile Search Results`)
                .setDescription(`Username: ${member.user}\n Activity: **${myString}**`)
                .setThumbnail(member.user.avatarURL())
                return message.channel.send(embed)
            
        }else if(dingus.length < 1){
            return message.channel.send('That User isn\'t playing a game')
        }



    }else if (args[0] === 'activity'){

      
        const testing = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);

        var myString = "";


 

            
          
        message.guild.members.cache.forEach(async (member) => {
        const dingus = member.user.presence.activities
        if(dingus.length > 1){



            const final = member.user.presence.activities.find(o => o.type === "PLAYING" && o.applicationID != null)
            const api = final.name

          
            const dbcheck = db.get(`badgame_${api}`)
            const dbcheck1 = db.get(`badgame_${member.id}`)

            const dbcheck2 = db.get(`value_${testing}_${api}`)

            if(dbcheck == null){
                if(dbcheck1 == null){
                    if(dbcheck2 == null){
                        myString += `${api}\n`;
                        db.set(`value_${testing}_${api}`, { testing: true})
                    }
                }
                
          
            }
        }


        });

          
        const embed = new discord.MessageEmbed()
        .setTitle(`Current Active Games`)
        .setDescription(myString)
        message.channel.send(embed)
    }
}
}