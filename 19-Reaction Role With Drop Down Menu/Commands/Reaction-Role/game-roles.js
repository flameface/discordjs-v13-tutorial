const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');

module.exports = {
    name: "gamerole",
    description: "get gaming console role",
    ClientPerms: ["ADMINISTRATOR"],
    UserPerms: ["ADMINISTRATOR"],
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        const embed = new MessageEmbed()
        .setTitle("Gaming Console Roles")
        .setDescription("Get And Remove Roles By Clicking On Options Given In Menu, After Reclicking The Role Will Be Removed, The Bot Will Send DM Message That You Have Added Or Removed Role")
		 const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('gamerole')
					.setPlaceholder('Select To Get Roles')
					.addOptions([
						{
							label: 'XBOX Role',
							description: 'Click To Get Or Remove Male Role',
							value: 'xbox',
						},
						{
							label: 'PlayStation Role',
							description: 'Click To Get Or Remove Playstation Role',
							value: 'playstation',
						},
					]),
			);

		await message.channel.send({ embeds: [embed], components: [row] });
	  }
  }
