exports.run = async (client, msg, args) => { // eslint-disable-line no-unused-vars

  let output = "Current list of words I'm looking out for:\n```\n";

  client.config.swearList.forEach((word) => {
    output += `${word}\n`;
  });

  output += "```";

  msg.channel.send(output);
};

exports.config = {
  adminOnly: true,
};

exports.help = {
  name: "badwords",
  category: "System",
  desc: "Display all the words I'm looking for.",
  usage: "badwords",
};