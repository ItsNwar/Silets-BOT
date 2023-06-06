module.exports = {
    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const user = message.mentions.users.first()
        if (user) {
            const embed = new MessageEmbed()
            .setTitle('Avatarınız.')
            .setImage(user.displayAvatarURL({ dynanic: true, size: 2048 }))
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
            message.channel.send(embed)
        } else {
            const embed = new MessageEmbed()
            .setTitle('Belirtilen Kullanıcının Avatarını Gösterir')
            .setImage(user.displayAvatarURL({ dynanic: true, size: 2048 }))
            message.channel.send(embed)
        }
    }
}

module.exports.config = {
    name: "avatar",
    desc: "Kullanıcının Fotoğrafını Gösterir.",
    aliases: ["avatar", "pp"]
}