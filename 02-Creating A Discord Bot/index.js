const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Discord Bot Is Ready');
});

client.login('your-token-here')
