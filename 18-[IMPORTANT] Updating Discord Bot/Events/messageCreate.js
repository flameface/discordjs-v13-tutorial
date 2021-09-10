const db = require("quick.db");
const client = require("../index.js");
client.on('messageCreate', async (message) => {
  if(message.author.bot) return;
  if(!message.guild) return;
  //PER SERVER PREFIX
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if(prefix == null) {
    prefix = client.config.prefix;
  } else {
    prefix = prefix;
  }
  if(!message.content.startsWith(prefix)) return;
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  
  if(cmd.length == 0 ) return;
  let command = client.commands.get(cmd);
  if(!command) command = client.commands.get(client.aliases.get(cmd));
  if(command) {
    //USER PERMS
    if(!message.member.permissions.has(command.userPerms || [])) return message.channel.send(`User Dont Have \`${command.userPerms || []}\` Permission`);
    //BOT PERMISSIONS
    if(!message.guild.me.permissions.has(command.clientPerms || [])) return message.channel.send(`Bot Missing \`${command.botPerms || []}\` Permission`);
  }
  //EXPORTS TO COMMAND
  if(command) command.run(client, message, args, prefix);
});