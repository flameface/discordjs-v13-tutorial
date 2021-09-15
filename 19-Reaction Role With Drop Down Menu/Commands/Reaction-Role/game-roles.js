const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js")

module.exports = {
  name: 'gamerole',
  description: "get gaming console roles",
  userPerms: ["ADMINISTRATOR"],
  run: async(client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;
    const embed = new MessageEmbed()
    .setTitle("Gaming Console Roles")
    .setDescription("Get Or Remove Roles By Clicking On Options Given In menu, After Reclicking The Role Will Be Removed, The Bot Will Send DM Message That You Have Added/Removed Roles")
    
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('gamerole')
      .setPlaceholder('Select To Add/Remove Roles')
      .addOptions([
        {
          label: 'XBOX Role',
          description: "Click To Add/Remove XBOX Roles",
          value: 'xbox',
        },
        {
          label: 'PlayStation Role',
          description: "Click To Add/Remove PlayStation Roles",
          value: 'playstation',
        },
        ]),
      );
      await message.channel.send({ embeds: [embed], components: [row] });
  }
}
