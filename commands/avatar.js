const axios = require("axios");
exports.run = async (client, msg, args) => {
  if (!args[0] && msg.attachments.size == 0) {
    msg.reply("I didn't see a url or an image.");
    return;
  }

  if (msg.attachments.size > 0) {
    args[0] = msg.attachments.first().url;
  }

  const image = await axios
    .get(args[0], {
      responseType: "arraybuffer",
    })
    .then((response) => new Buffer(response.data, "binary"));

  client.user
    .setAvatar(image)
    .then(() => {
      msg.reply("set.");
    })
    .catch((error) => {
      msg.reply("error, yell at angel");
      console.log(error);
    });
};

exports.config = {
  adminOnly: true,
};

exports.help = {
  name: "avatar",
  desc: "Set the Bot's profile picture.",
  category: "System",
  usage: "avatar <url>",
};
