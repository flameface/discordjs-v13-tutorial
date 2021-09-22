let slash = []
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Slash commands");
module.exports = (client) => {
    client.logger.ready("=-=-=-=-=-=-=- Loading slash command(s) -=-=-=-=-=-=-=");
    readdirSync("./SlashCommands/").forEach(dir => {
    const commands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );
        for (let file of commands) {
            let pull = require(`../SlashCommands/${dir}/${file}`);
    
            if (pull.name) {
                client.slash.set(pull.name, pull);
                slash.push(pull);
                table.addRow(file, '✅ -> Loaded Slash Command');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
    
            }
    });
    console.log(table.toString());

client.on("ready",async ()=> {
    await client.guilds.cache.get('guild-id').commands.set(slash);
 })
}
