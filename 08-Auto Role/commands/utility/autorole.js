const { Permissions, MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
  name : "autorole",
  run : async(client, message, args) => {
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) return message.channel.send(`You need **Manage Role** permission to use this command!`)
    
    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    if(!role) return message.channel.send(`Role is not valid`)
    
    await db.set(`autorole-${message.guild.id}`, role.id);
    message.reply(`${role.name} is the autorole!`)
  }
}
