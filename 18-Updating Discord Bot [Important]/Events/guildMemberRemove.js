const client = require("../index.js");
const { MessageEmbed } = require('discord.js');

client.on('guildMemberRemove', async(member) => {
  const Channel = member.guild.channels.cache.get('channel-id');
  const embed = new MessageEmbed()
  .setColor("GREEN")
  .setTitle("Member Leave")
  .setDescription(`**${member.displayName}** Leave ${member.guild.name}, We Have Now ${member.guild.memberCount} Members`);
  Channel.send({ embeds: [embed] });
});
