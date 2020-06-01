module.exports = client => {
    console.log("===== Client ready.");
    client.user.setActivity("your every move", {
            type: "WATCHING"
        })
        .then(() => client.user.setStatus("online"))
        .catch(console.error);

    // setTimeout(() => {
    //     console.log("REMOVING MEMBER");
    //     client.emit("guildMemberRemove", client.guilds.cache.get("463504889666994196").members.cache.get("103152274250960896"));
    // }, 3000);

    if (!client.guilds.cache.get(client.config.guildId).members.cache.get(client.user.id).hasPermission("MANAGE_MESSAGES")) {
        console.log("===== [Heads up!] The bot doesn't seem to have permission to Manage Messages. It won't be able to delete messages containing items from the swear list.");
    }
};