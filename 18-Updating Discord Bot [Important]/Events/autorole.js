const client = require('../index.js');
const db = require("quick.db");

client.on('guildMemberAdd', async(member) => {
  const role = await db.has(`autorole-${member.guild.id}`);
  if(role === true) {
    member.roles.add(await db.get(`autorole-${member.guild.id}`));
  }
});
