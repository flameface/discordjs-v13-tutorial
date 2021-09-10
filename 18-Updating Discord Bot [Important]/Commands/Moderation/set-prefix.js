const {discord, Permissions} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'setprefix',
    UserPerms: ["ADMINISTRATOR"],
    ClientPerms: ["ADMINISTRATOR"],
    run: async (client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    try{
    const newprefix = args[0]
    if(!newprefix) return message.reply('Enter New Prefix')
    if(newprefix.length > 5) return message.channel.send("Invalid Prefix, Prefix Is Too Long")
    message.channel.send(`New Prefix Set To **${newprefix}**`)
    db.set(`prefix_${message.guild.id}`, newprefix);
    }
   }
}
