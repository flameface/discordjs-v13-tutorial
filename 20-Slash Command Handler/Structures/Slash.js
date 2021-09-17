const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const globPromise = promisify(glob);

module.exports = async (client) => {
    client.logger.warn("=-=-=-=-=-=-=- Loading slash command(s) -=-=-=-=-=-=-=");
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );
    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);
        client.logger.log(`Loading Slash Command: ${file.name}`)


        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {
 await client.guilds.cache.get('guild-id').commands.set(arrayOfSlashCommands);
 client.guilds.cache.get('guild-id').commands.set(arrayOfSlashCommands);
    });
}; 
