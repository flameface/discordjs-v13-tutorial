const { Util, MessageEmbed, Permissions } = require("discord.js");
const { parse } = require("twemoji-parser");

module.exports = {
  name: "addemoji",
  aliases: ["ae"],
  description: "Adds emojis to server",
  usage: "<emojiname> or <link>",
  run: async (client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return;
    if (!message.member.permissions.has(Permissions.MANAGE_EMOJIS_AND_STICKERS)) {
      return message.channel.send(`**You don't have permission to use this command -[MANAGE_EMOJIS_AND_STICKERS]**`)
    }
    const emoji = args[0];
    if (!emoji) return message.channel.send(`**Please give me a emoji to add**`);

    let customemoji = Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"}`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );

      const Added = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`Emoji Has Been Added!\nName: ${name || `${customemoji.name}`}\nPreview: [Click Me](${Link})`);
      return message.channel.send({ embeds: [Added] });
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Please Give Me a Valid Emoji`);

      message.channel.send(`You can use normal emoji without adding in server`);
    }
  }
}
