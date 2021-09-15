const client = require("../index.js")
const wait = require('util').promisify(setTimeout);
client.on('interactionCreate', async interaction => {
  const member = await interaction.message.guild.members.fetch({
    user: interaction.user.id,
    force: true 
  })
  if(!interaction.isSelectMenu()) return;
  //XBOX ROLE
  if(interaction.values == 'xbox') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("887611778694004756")) {
      await member.roles.add('887611778694004756')
      return interaction.member.send(`${client.emoji.success} We Have Added XBOX Role`)
    } else if(member.roles.cache.has("887611778694004756")) {
      await member.roles.remove('887611778694004756')
      return interaction.member.send(`${client.emoji.fail} We Have Remove XBOX Role`)
    }
  }
  //PlayStation ROLE
  if(interaction.values == 'playstation') {
    await interaction.deferUpdate();
    if(!member.roles.cache.has("887611916472696844")) {
      await member.roles.add('887611916472696844')
      return interaction.member.send(`${client.emoji.success} We Have Added PlayStation Role`)
    } else if(member.roles.cache.has("887611916472696844")) {
      await member.roles.remove('887611916472696844')
      return interaction.member.send(`${client.emoji.fail} We Have Remove PlayStation Role`)
    }
  }
})
