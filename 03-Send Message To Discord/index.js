const { Discord, Client, Collection, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_INVITES']});
const config = require('./config.json');

client.once('ready', () => {
  console.log(`${client.user.tag} is ready`)
})

client.on('messageCreate', message => {
  if(message.content === "!youtube") {
    message.channel.send("https://instagram.com/flamequard Subscribe")
  } else if(message.content === "!instagram") {
    message.channel.send("https://instagram.com/flamequard Follow")
  } else if(message.content == "!discord" {
    message.channel.send("https://discord.gg/TvjrWtEuyP Join")
  }  
})

client.login(process.token)
