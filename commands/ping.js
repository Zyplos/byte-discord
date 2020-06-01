exports.run = async (client, msg, args) => { // eslint-disable-line no-unused-vars
  console.log(`${msg.author.tag} sent a ping.`);
  const message = await msg.channel.send("Pinging...");
  message.edit(
    `${Math.abs(message.createdTimestamp - msg.createdTimestamp)}ms`
  );
};

exports.config = {
  adminOnly: true,
};

exports.help = {
  name: "ping",
  category: "System",
  desc: "Check to see if I'm listening.",
  usage: "ping",
};