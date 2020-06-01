const swearCheck = require("../modules/swearCheck");

module.exports = (client, messageOld, messageNew) => {
  if (!messageNew.guild) return;
  if (messageOld.author.bot) return;

  if (messageNew.guild.id != client.config.guildId) return;

  if (!messageNew.editedTimestamp) return;

  const msgEmbed = {
    embed: {
      title: "Message Edited",
      description: `**${messageOld.author.tag} (${messageOld.author.id})** edited message in ${messageOld.channel}\n\n` +
        "Old Message:\n```\n" +
        messageOld.cleanContent +
        "```" +
        "\nNew Message:\n```\n" +
        messageNew.cleanContent +
        "```" +
        `\n[Jump to Message](https://discordapp.com/channels/${messageNew.guild.id}/${messageNew.channel.id}/${messageNew.id})`,
      color: 0x58d858,
      timestamp: messageNew.editedAt,
      thumbnail: {
        url: `${messageOld.author.displayAvatarURL({
          format: "png",
          dynamic: true,
          size: 512
        })}`,
      },
    },
  };
  swearCheck(client, messageNew);
  client.getLogsChannel().send(msgEmbed);
};