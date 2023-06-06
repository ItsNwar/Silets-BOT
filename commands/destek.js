module.exports = {
    async run (client, message, args) { {}
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Destek')
        .setColor("RANDOM")
        .addField('» Sunucu İle İlgiliyse', '@1' )
        .addField('» Kullanıcı Bildircek İseniz', '@2.' )
        .addField('» Bir Sorun İse', '@3')
        .setFooter(client.user.username, client.user.avatarURL())
        .setTimestamp();
        message.channel.send(embed)
    }
}

module.exports.config = {
    name: "destek",
    desc: "Destek Menüsü",
    aliases: ["destek"]
}