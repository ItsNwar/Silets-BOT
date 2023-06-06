module.exports = {
    async run (client, message, args) { {}
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Gecikme Süresi Hesaplanıyor....')
        .setColor("RANDOM")
        .addField('Ping:', client.ws.ping + ' ms')
        .setFooter(client.user.username, client.user.avatarURL())
        .setTimestamp();
        message.channel.send(embed)
    }
}

module.exports.config = {
    name: "ping",
    desc: "Ping Ölçme",
    aliases: ["ping", "ms"]
}