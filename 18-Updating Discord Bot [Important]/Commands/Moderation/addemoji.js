const { Util, MessageEmbed, Permissions } = require("discord.js");
const { parse } = require("twemoji-parser");
const Color = "RANDOM";

module.exports = {
  name: "addemoji",
  aliases: ["ae"],
  description: "Adds emojis to server",
  clientPerms: ["MANAGE_EMOJIS_AND_STICKERS"],
  userPerms: ["MANAGE_EMOJIS_AND_STICKERS"],
  usage: "<emojiname> or <link>",
  run: async(client, message,args, prefix) => {
      try{
          if(!message.content.startsWith(prefix)) return;
          const emoji = args[0];
          if(!emoji) return message.channel.send(`**Please give me a emoji to add**`);
          let customemoji = Util.parseEmoji(emoji);
          if(customemoji.id) {
              const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"}`;
              const name = args.slice(1).join(" ");
              message.guild.emojis.create(
                  `${Link}`,
                  `${name || `${customemoji.name}`}`
                  );
                  const Added = new MessageEmbed()
                  .setColor(Color)
                  .setDescription(`${client.emoji.success} Emoji Has Been Added!\nName: ${name || `${customemoji.name}`}\nPreview: [Click Me](${Link})`);
                  return message.channel.send({ embeds: [Added] });
          } else {
              let CheckEmoji = parse(emoji, { assetType: "png" });
              if (!CheckEmoji[0])
              return message.channel.send(`${client.emoji.fail} Please Give Me a Valid Emoji`);
              message.channel.send(`${client.emoji.fail} You can use normal emoji without adding in server`);
          } 

      //ERROR CATCH
    } catch (err) {
      const errorEmbed = new MessageEmbed()
      .setTitle("ERROR")
      .setDescription(`${client.emoji.fail} ${err.message}`)
      .setColor("RED")
      .setFooter("message will be deleted after 10 seconds");
      message.channel.send({embeds: [errorEmbed] }).then(e => {
        setTimeout(() => e.delete(), 10000);
      });
    }
  }
}
