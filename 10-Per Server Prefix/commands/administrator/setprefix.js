const {discord, Permissions} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'setprefix',
    run: async (client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return; //add this line to every commands

    if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply(`you dont have **ADMINISTRATOR** permission to use this command`)
    const newprefix = args[0]
    if(!newprefix) return message.reply('Enter New Prefix')
    if(newprefix.length > 5) return message.channel.send("Invalid Prefix, Prefix Is Too Long")
    message.channel.send(`New Prefix Set To **${newprefix}**`)
    db.set(`prefix_${message.guild.id}`, newprefix);
 }
}
