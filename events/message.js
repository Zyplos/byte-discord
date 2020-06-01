const swearCheck = require("../modules/swearCheck");

module.exports = async (client, msg) => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (msg.guild.id != client.config.guildId) return;

  swearCheck(client, msg);

  if (msg.content.indexOf(client.config.prefix) !== 0) return;

  const args = msg.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const exec = client.commands[command];

  if (!exec) return;

  if (exec.config.adminOnly) {
    if (!client.config.admins.includes(msg.author.id)) return;
  }

  exec.run(client, msg, args);
};