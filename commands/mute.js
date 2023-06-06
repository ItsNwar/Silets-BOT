const Discord = require('discord.js')



    exports.run = async(client, message, args) => {
    
		if(!message.member.roles.cache.has("1106942699254317087", "1105148588331376702")){
            const yetkiyok = new Discord.MessageEmbed()
            .setDescription(`${message.author} **Bu kodu kullanmak için gerekli yetkiye sahip değilsin.**`)
            .setColor('RANDOM')
            return message.channel.send(yetkiyok)
        }
    
        let kullanıcı = message.mentions.members.first();
        let sebep = args.slice(1).join(' ')

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**Lütfen Kullanıcı Belirt.**`)
            return message.channel.send(cmfhata)
        }

        if(!sebep){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**Lütfen Sebep Belirt**`)
            return message.channel.send(cmfhata)
        }
        
        if(kullanıcı && sebep){
            const cmfmute = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`${kullanıcı} Kişisine ${message.author} Tarafından **${sebep}** Sebebi İle Mute Atıldı.`)
            .setImage('https://media.discordapp.net/attachments/997105193256747028/1102366952841805975/mute-discord-mute.gif?width=466&height=160')
            .setFooter(kullanıcı.user.username + " Umarız Hatalarını Birdaha Tekrarlamazsın...")
            .setThumbnail(kullanıcı.user.avatarURL({dynamic: true, size: 2048}))
            message.channel.send(cmfmute)

            // Mute Atıldığında Verilecek & Alınacak Roller
            kullanıcı.roles.add('1114135534680416356')
            kullanıcı.roles.remove('1114135784518336592')
        }

    } // CodeMareFi - #MareFi && #CMF

    module.exports.config = {
        name: "Mute",
        desc: "Mute Atma KOmudu",
        aliases: ["mute", "sustur"]
    }

exports.help = {
    name: 'mute'
}