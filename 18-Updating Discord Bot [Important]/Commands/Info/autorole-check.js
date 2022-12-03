const db = require('quick.db');
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'autorole-check',
    aliases: ["arc"],
    description: "checks current autorole",
    run: async (client, message, args) => {
        try {
            const check = await db.has(`autorole-${message.guild.id}`);
            if (check === false) return message.reply('There is no autorole set!');
            const role = await db.get(`autorole-${message.guild.id}`);
            const embed = new MessageEmbed()
                .setTitle('AutoRole')
                .setDescription(`The autorole is <@&${role}>`)
                .setColor('RED')
            message.reply({ embeds: [embed] });
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
}
