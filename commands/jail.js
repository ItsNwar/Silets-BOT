const Discord = require('discord.js');
const ms = require('ms');

    exports.run = (client, message, args) => {

        // Yetki İçin
         if(!message.member.roles.cache.get("1106942699254317087", "1105148588331376702")){
             const yetki = new Discord.MessageEmbed()
             .setColor('BLACK')
             .setDescription(` ${message.author} **Bu Kodu Kullana Bilmek İçin Yeterli Yetkin Bulunmuyor...** `)
             return message.channel.send(yetki)
        }

        let kullanıcı = message.mentions.members.first();
        let sure = args[1];
        let sebep = args.slice(2).join(' ');

        if(!kullanıcı){
            const kullanicihatasi = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(` ** ${message.author} Kullanıcı Bulunamadı, Lütfen Kullanıcı Etiketle** `)
            .setFooter('Jail Hatası ❌')
            return message.channel.send(kullanicihatasi)
        }
        
        if(!sure){
            const surehatasi = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(` ** ${message.author} Süre Girmeyi Unuttun, \n\n \` 1s = 1 Saniye || 1h = 1 Saat || 1d = 1 Gün || 1y = 1 Yıl \` ** `)
            .setFooter('Jail Hatası ❌')
            return message.channel.send(surehatasi)
        }

        if(!sebep){
            const sebephatasi = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(` ** ${message.author} **Lütfen Geçerli Bir Sebep Giriniz...** `)
            .setFooter('Jail Hatası ❌')
            return message.channel.send(sebephatasi)
        }

        if(kullanıcı || sure || sebep){
            const jail = new Discord.MessageEmbed()
            .setDescription(` ${kullanıcı} Kişisi ${message.author} Tarafından, **${sebep}** Sebebiyle **${sure.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün')}** Boyunca Jail'e Atıldı `)
            .setColor('#00FF00')
            .setTitle(` **Başarıyla Jail'e Atıldı** `)
            message.channel.send(jail)

            // Jail Atıldığı Zaman Verilecek & Alınacak Roller
                kullanıcı.roles.add('115351844626116810')
                kullanıcı.roles.remove('1114135784518336592')
            // Jail Bittiği Zaman Verilecek & Alınacak Roller
                setTimeout(() => {
                    kullanıcı.roles.remove('1115351844626116810')
                    kullanıcı.roles.add('1114135784518336592')
                    // Jail Bitince Kanal Bilgilendirme Mesajı Atalım

                    client.channels.cache.get('LOG KANAL İD').send(` **${kullanıcı} Jail Süren Doldu Umarım Tekrarlamazsın** `)
                }, ms(sure))
        }
    } 

    module.exports.config = {
        name: "Jail",
        desc: "Jail Komutu",
        aliases: ["jail", "hapis"]
    }