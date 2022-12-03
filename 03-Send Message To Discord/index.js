const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require('./config.json');

const client = new Client({
  intents: [
    'GUILDS',
    'GUILD_MEMBERS',
    'GUILD_MESSAGES',
    'GUILD_INVITES'
  ]
});

client.once('ready', () => {
  console.log(`${client.user.tag} is ready`)
})

client.on('messageCreate', message => {
  if (message.content === `${PREFIX}youtube`) {
    message.channel.send("https://instagram.com/flamequard Subscribe")
  } else if (message.content === `${PREFIX}instagram`) {
    message.channel.send("https://instagram.com/flamequard Follow")
  } else if (message.content == `${PREFIX}discord`) {
    message.channel.send("https://discord.gg/TvjrWtEuyP Join")
  }
})

client.login(TOKEN);