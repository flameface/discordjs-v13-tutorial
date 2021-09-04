const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "ban",
        UserPerms: ["BAN_MEMBERS"],
        ClientPerms: ["BAN_MEMBERS"],
        description: "Bans the user",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        accessableby: "Administrator",
        run: async (client, message, args) => {
        try {
            if (!args[0]) return message.channel.send("**Please Provide A User To Ban!**")
            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**User Is Not In The Guild**");
            if (banMember === message.member) return message.channel.send("**You Cannot Ban Yourself**")

            const reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("**Cant Ban That User**")
            try {
            banMember.send(`**You Have Been Banned From ${message.guild.name} for - ${reason || "No Reason"}**`).then(() =>
                message.guild.members.ban(banMember, { days: 7, reason: reason })).catch(() => null)
            } catch {
                message.guild.members.ban(banMember, { days: 7, reason: reason })
            }
            if (reason) {
            const sembed = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** has been banned for ${reason}`)
            message.channel.send({ embeds: [sembed]})
            } else {
                const sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** has been banned`)
            message.channel.send({ embeds: [sembed2]} )
            }
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
};
