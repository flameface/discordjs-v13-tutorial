const client = require("../index.js")
const wait = require('util').promisify(setTimeout);

client.on('interactionCreate', async interaction => {
   const member = await interaction.message.guild.members.fetch({ user: interaction.user.id, force: true})
	if (!interaction.isSelectMenu()) return;
  
  //XBOX ROLE
	if (interaction.values == 'xbox') {
       await interaction.deferUpdate();
       if(!member.roles.cache.has('869767240537485312')) {
            await member.roles.add('869767240537485312')
            return interaction.member.send(`${client.emoji.success} We Have Added XBOX Role Successfully`, true)
       } else if(member.roles.cache.has('869767240537485312')) {
            await member.roles.remove('869767240537485312')
            return interaction.member.send(`${client.emoji.fail} We Have Removed XBOX Role`, true)
       }
	}
  
  //PLAYSTATION ROLE
	if (interaction.values == 'playstation') {
       await interaction.deferUpdate();
       if(!member.roles.cache.has('869767331797151754')) {
            await member.roles.add('869767331797151754')
            return interaction.member.send(`${success} We Have Added Playstation Role Successfully`, true)
       } else if(member.roles.cache.has('869767331797151754')) {
            await member.roles.remove('869767331797151754')
            return interaction.member.send(`${fail} We Have Removed Playstation Role`, true)
       }
    }
});
