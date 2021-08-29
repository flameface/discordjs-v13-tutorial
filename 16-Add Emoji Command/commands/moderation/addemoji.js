const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
        name: "addemoji",
        aliases: [""],
        description: "Adds emoji to serverr",
        usage: "<emojiname> <link>",
        accessableby: "Administrator",
        run: async (client, message, args, prefix) => {
               
       if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_EMOJIS)) {
      return message.channel.send(`**You Don't Have Permission To Use This Command! Manage Emojis**`)
    }
    
    const emoji = args[0];
    if (!emoji) return message.channel.send(`**Please Give Me A Emoji!**`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new MessageEmbed()
        .setColor(`GREEN`)
        .setDescription(
          `Emoji Has Been Added! | Name : ${name || `${customemoji.name}`} | Preview : [Click Me](${Link})`
        );
      return message.channel.send({ emojis: [Added] });
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Please Give Me A Valid Emoji!`);
      message.channel.send(
        `You Can Use Normal Emoji Without Adding In Server!`
      );
    }
    }
}
