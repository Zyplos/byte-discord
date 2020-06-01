module.exports = (client, member) => {

    if (member.guild.id != client.config.guildId) return;

    const msgEmbed = {
        "embed": {
            "title": "Member Left",
            "description": `**${member.user.tag} (${member.user.id})** left the server.`,
            "color": 0xff3e3e,
            "timestamp": new Date(),
            "thumbnail": {
                "url": `${member.user.displayAvatarURL({
                    format: "png",
                    dynamic: true,
                    size: 512
                  })}`
            }
        }
    };

    client.getLogsChannel().send(msgEmbed);
};