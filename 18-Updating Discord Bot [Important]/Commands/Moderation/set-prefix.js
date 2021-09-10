const {discord, Permissions} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'set-prefix',
    aliases: ["sp"],
    description: "set prefix as per server",
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
    } catch (err) {
      const errorEmbed = new MessageEmbed()
      .setTitle("ERROR")
      .setDescription(`${client.emoji.fail} ${err.message}`)
      .setColor("RED")
      .setFooter("message will be deleted after 10 seconds");
      message.channel.send({embeds: [errorEmbed] }).then(e => {
        setTimeout(() => e.delete(), 10000);
      });
    }
  }
}
