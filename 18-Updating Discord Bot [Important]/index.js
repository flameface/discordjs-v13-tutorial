//CLEAN CONSOLE
console.clear();

const { Collection, Client } = require('discord.js');
const config = require('./config.json');
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

//EXPORTS CLIENT
module.exports = client;

//CLIENT MODULES
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands/");
client.cooldowns = new Collection();
client.config = require("./config.json");
client.logger = require('./Utils/Logger');
client.emoji = require('./JSON/emoji.json');
client.delay = ms => new Promise(res => setTimeout(res, ms));
client.embedCollection = new Collection();
client.interactions = new Collection();

//FIND STRUCTURES
["Command", "Event"].forEach(handler => {
    require(`./Structures/${handler}`)(client);
});

//HANDLE UNHANDLED REJECTION ERRORS
process.on('unhandledRejection', err => {
  client.logger.error(`Unhandled promise rejection: ${err.message}.`);
  console.log(err);
  });
  
//LOG IN DISCORD
client.login(config.token).catch(e => client.logger.error(e.message));
