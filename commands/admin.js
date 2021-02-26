const db = require('quick.db')

const discord = require('discord.js')
module.exports = {
    name: "admin",
    description: "Kicks a member from the server",
    run: async (client, message, args) => {
        const member1 = message.mentions.members.first() || message.guild.members.cache.get(args[0]);        

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t run that!')
        const dbcheck = db.get(`useradmin_${member1.id}`)
        if(dbcheck == null){
            db.set(`useradmin_${member1.id}`, { db: true})
            return message.channel.send('Sucessfully Admined')
        }else if(dbcheck != null){
            db.delete(`useradmin_${member1.id}`, { db: true})
            message.channel.send('Sucessfully Deleted')
        }
    }
}