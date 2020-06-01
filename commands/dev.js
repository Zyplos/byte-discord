/* eslint-disable no-unreachable */
// ------------
// This command can potentially be dangerous! Be careful who has access to this.
// ------------
exports.run = async (client, msg, args) => {

  if (!client.config.admins.includes(msg.author.id)) return;
  return msg.reply("This command has been disabled internally."); // comment out this line if you wanna use this command

  console.log(
    `[WARN] ${msg.author.tag} (${msg.author.id}) ran a dev command: ${args}`
  );

  const code = args.join(" ");
  try {
    const evaled = eval(code);
    const clean = await client.clean(client, evaled);
    await msg.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  } catch (err) {
    msg.channel.send(
      `\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``
    );
  }
};

exports.config = {
  adminOnly: true,
};

exports.help = {
  name: "dev",
  desc: "Executes javascript code.",
  category: "System",
  usage: "dev",
};