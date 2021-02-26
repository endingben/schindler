const Discord = require('discord.js');
const client = new Discord.Client();




require('dotenv').config();


const prefix = "?";
 
const fs = require('fs');





var queue = new Map();
 
client.commands = new Discord.Collection();
 
client.on('ready', activity => {
    client.user.setStatus(`online`)
    client.user.setActivity(
      `Making a List...`,
      { type: "PLAYING" }
    )
});




const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot is now Online.v2');
});

 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).run(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
//ok

    
});

client.login(process.env.TOKEN);

      
