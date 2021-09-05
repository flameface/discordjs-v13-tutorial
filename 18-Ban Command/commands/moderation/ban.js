const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ban",
  ClientPerms: ["BAN_MEMBERS"],
  UserPerms: ["BAN_MEMBERS"],
  description: "Ban members in guilds",
  usage: "ban <@user> <reason>",
  run: async(client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    const target = message.mentions.members.first()
    const reason = args.slice(1).join(" ")
    if(!args[0]) return message.reply(`Please mention someone to ban`)
    if(!target) return message.reply(`I can't find that member`)
    if(target.id === message.author.id) return message.reply(`Can ban yourself`)
    if(target.bannable) {
      let embed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`Banned \`${target}\` for \`${reason || "No Reason Provided"}\``)
      message.channel.send({ embeds: [embed] })
      target.ban()
      message.delete()
    } else {
      return message.reply(`Can't ban, make sure bot role is above them`)
    }
    return undefined
  }
}
