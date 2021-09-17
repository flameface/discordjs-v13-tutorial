const { MessageEmbed } = require("discord.js")
module.exports = {
        name : "ping",
        description : "chekling ping of bot",
        run : async (client, interaction, args) => {
              const embed = new MessageEmbed()
              .setDescription('`Pinging...`')
              .setColor("RANDOM");    
              const msg = await interaction.followUp({ embeds: [embed] })
              const timestamp = (interaction.editedTimestamp) ? interaction.editedTimestamp : interaction.createdTimestamp;
              const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;
              const apiLatency = `\`\`\`ini\n[ ${Math.round(interaction.client.ws.ping)}ms ]\`\`\``;
              embed.setTitle(`Pong!`)
              .setDescription('')
              .addField(`${client.emoji.success} Latency`, latency, true)
              .addField(`${client.emoji.success} API Latency`, apiLatency, true)
              .setFooter(interaction.member.displayName,  interaction.user.displayAvatarURL({ dynamic: true }))
              .setTimestamp();
                msg.edit({ embeds: [embed] })
       }
}
