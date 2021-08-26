const { Discord, Client, Collection, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_INVITES']});
const config = require('./config.json');
client.on('ready', () => {
  console.log(`${client.user.tag} is ready`)
})
client.login(config.token)
