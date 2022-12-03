const { Client } = require('discord.js');
const { TOKEN } = require('./config.json');

const client = new Client({
  intents: [
    'GUILDS',
    'GUILD_MEMBERS',
    'GUILD_MESSAGES',
    'GUILD_INVITES'
  ]
});

client.on('ready', () => {
  console.log(`${client.user.tag} is ready`)
})

client.login(TOKEN)