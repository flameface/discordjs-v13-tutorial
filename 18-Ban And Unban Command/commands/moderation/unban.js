const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "unban",
        aliases: ['ub'],
        description: "unban members",
        usage: "unban [user id]",
        run: async (client, message, args, prefix) => {
        const member = args[0];
        if (!member) {
             return message.channel.send(`Error do : ${prefix}help unban`)
        }
        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`${member} has been unbanned!`)
        } catch (e) {
            return message.channel.send(`${e.message}`)
        }
    }
}
