const Discord = require("discord.js");
const client = new Discord.Client();
client.config = require("./config.js");

require("./modules/functions")(client);

client.commands = {};


client.on("error", (error) => {
  console.error("===== Discord sent an error.");
  console.error(error);
});

const init = async () => {
  const fs = require("fs");

  fs.readdirSync("./commands/").forEach((fileName) => {
    const exec = require("./commands/" + fileName);
    client.commands[exec.help.name] = exec;
  });

  fs.readdirSync("./events/").forEach((file) => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};

init();

client.login(client.config.token);