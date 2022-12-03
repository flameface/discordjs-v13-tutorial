const { Collection, Client } = require('discord.js');

const { TOKEN } = require('./config.json');

const fs = require('fs');

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

module.exports = client;

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.once('ready', () => {
    console.log(`${client.user.tag} is ready`)
})

client.login(TOKEN)
