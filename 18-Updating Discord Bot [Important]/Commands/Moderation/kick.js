const { MessageEmbed } = require('discord.js');

module.exports = {
      name: 'kick',
      usage: 'kick <user mention/ID> [reason]',
      description: 'Kicks a member from your server.',
      clientPerms: ['SEND_MESSAGES', 'EMBED_LINKS', 'KICK_MEMBERS'],
      userPerms: ['KICK_MEMBERS'],
      run: async(client, message, args) => {
          if(!message.content.startsWith(prefix)) return;
          try{
          const member = this.getMemberFromMention(message, args[0]) || message.guild.members.cache.get(args[0]);
          if (!member)
          return this.sendErrorMessage(message, 0, `${client.emoji.fail} Please mention a user or provide a valid user ID`);
          if (member === message.member)
          return this.sendErrorMessage(message, 0, `${client.emoji.fail} You cannot kick yourself`);
          if (member.roles.highest.position >= message.member.roles.highest.position)
          return this.sendErrorMessage(message, 0, `${client.emoji.fail} You cannot kick someone with an equal or higher role`);
          if (!member.kickable)
          return this.sendErrorMessage(message, 0, `${client.emoji.fail} Provided member is not kickable`);
          let reason = args.slice(1).join(' ');
          if (!reason) reason = '`None`';
          if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';
          await member.kick(reason);
          const embed = new MessageEmbed()
          .setTitle('Kick Member')
          .setDescription(`${client.emoji.success} ${member} was successfully kicked.`)
          .addField('Moderator', message.member, true)
          .addField('Member', member, true)
          .addField('Reason', reason)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor("GREEN");
          message.channel.send(embed);
          message.client.logger.info(`${message.guild.name}: ${message.author.tag} kicked ${member.user.tag}`);
      
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
};
