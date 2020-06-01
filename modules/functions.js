module.exports = client => {
    client.getLogsChannel = () => {
        return client.channels.cache.get(client.config.logsChannelId);
    };

    client.clean = async (client, text) => {
        if (text && text.constructor.name == "Promise")
            text = await text;
        if (typeof evaled !== "string")
            text = require("util").inspect(text, {
                depth: 1
            });

        text = text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
            .replace(client.token, "{???}");

        return text;
    };
};