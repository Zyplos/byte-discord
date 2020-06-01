module.exports = async (client, msg) => {

  let text = msg.content.toLowerCase();

  text = text.replace(/(\*|_|\||`)/gi, "");

  let found = false;

  for (const swearWord of client.config.swearList) {
    if (text.includes(swearWord.toLowerCase())) {
      found = true;
      break;
    }
  }

  if (found) {
    await msg.delete();
    if (client.config.dmSwearWarning) {
      return msg.author.send({
        "embed": {
          "description": `**Warning from [${msg.guild.name}](https://discord.com/channels/${msg.guild.id}/)**\nDon't say bad words!`,
          "color": 0xff3e3e,
        }
        // eslint-disable-next-line no-unused-vars
      }).catch(error => {
        console.error(`==== Error: Got an error trying to DM ${msg.author.tag} (${msg.author.id}) a swear warning. They probably have DMs disabled.`);
      });
    } else {
      return msg.reply("don't say bad words!");
    }
  }
};