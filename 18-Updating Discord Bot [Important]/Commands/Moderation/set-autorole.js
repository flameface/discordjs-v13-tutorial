const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { error } = require("../../Utils");

module.exports = {
  name: "set-autorole",
  aliases: ["sar"],
  description: "set autorole for guild",
  userPerms: ["MANAGE_ROLES"],
  clientPerms: ["MANAGE_ROLES"],
  run: async (client, message, args) => {
    try {
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
      if (!role) return message.channel.send(`Role is not valid`);
      await db.set(`autorole-${message.guild.id}`, role.id);
      const embed = new MessageEmbed()
        .setTitle("Auto Role")
        .setDescription(`${client.emoji.success} ${role.name} is the autorole!`)
        .setFooter(`${message.author.name} has set the autorole`);

      message.reply({ embeds: [embed] });

      //ERROR CATCH
    } catch (err) {
      const errorEmbed = new MessageEmbed()
        .setTitle("ERROR")
        .setDescription(`${client.emoji.fail} ${err.message}`)
        .setColor("RED")
        .setFooter("message will be deleted after 10 seconds");
      message.channel.send({ embeds: [errorEmbed] }).then(e => {
        setTimeout(() => e.delete(), 10000);
      });
    }
  }
};
