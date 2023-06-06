module.exports = {
    async run (client, message, args) { {}
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Yardım Menüsü')
        .setColor("RANDOM")
        .addField('» s!temizle', 'Mesaj Temizlemeye Yarar.' )
        .addField('» s!ping', 'Botun Pingini Gösterir.' )
        .addField('» s!avatar veya s!pp', 'Etiketlediğiniz Kullanıcının Fotoğrafını Gösterir.')
        .addField('» s!kurallar', 'Sunucu Kurallarını Gösterir.')
        .addField('» s!destek', 'Destek Talebi Açarsınız.')
        .addField('» s!çekiliş', 'Çekiliş Yapma Komutudur.')
        .addField('» s!mute', 'Mute Atmaya Yarar. ( Sadece Yetkililer Kullanabilir. )')
        .addField('» s!ban', 'Sunucudan Kullanıcı Banlama Komudu ( Sadece Yetkililer Kullanabilir. )')
        .addField('» s!sunucu-bilgi veya s!sb', 'Sunucu Hakkında Bilgi Verir.')
        .addField('» s!bot-bilgi veya s!bb', 'Bot Hakkında Bilgi Verir.')
        .setImage('https://s.tmimgcdn.com/scr/800x500/77600/s-harfi-logo-sablonu_77674-2-original.jpg')
        .setFooter(client.user.username, client.user.avatarURL())
        .setTimestamp();
        message.channel.send(embed)
    }
}

module.exports.config = {
    name: "yardım",
    desc: "Yardım Menüsü",
    aliases: ["yardım", "help"]
}