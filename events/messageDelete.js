module.exports = (client, messageDeleted) => {
  if (!messageDeleted.guild) return;

  if (messageDeleted.guild.id != client.config.guildId) return;

  const msgEmbed = {
    embed: {
      title: "Message Deleted",
      description: `A message from **${messageDeleted.author.tag} (${messageDeleted.author.id})** was deleted in ${messageDeleted.channel}\n` +
        "```\n" +
        messageDeleted.cleanContent +
        "```",
      color: 0x58d858,
      timestamp: messageDeleted.createdTimestamp,
      thumbnail: {
        url: `${messageDeleted.author.displayAvatarURL({
          format: "png",
          dynamic: true,
          size: 512
        })}`,
      },
    },
  };

  if (messageDeleted.attachments.size > 0) {
    msgEmbed.embed.description += `\nAttachments: \n [${
      messageDeleted.attachments.first().filename
    }]\n${messageDeleted.attachments.first().url}`;
  }

  client.getLogsChannel().send(msgEmbed);
};