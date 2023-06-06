const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Yetki
        if(!message.member.roles.cache.some(role => (role.name === '1106942699254317087'))){
            const Pâyidar = new Discord.MessageEmbed()
            .setDescription(`Bu komudu kullanmak için gerekli yetkilere sahip olman gerek.`)
            .setColor('RANDOM')
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
            return message.channel.send(Pâyidar)
        }

        // Let Tanımları
        let kullanıcı = message.guild.member(message.guild.members.cache.get(args[0])) || message.mentions.members.first();        let sebep = args.slice(1).join(' ');
        let guild = message.guild;

        // Özel Zaman
        let zaman = new Date()
        let pâyidarzaman = zaman.getFullYear() + "." + (zaman.getMonth() +1) + "." + zaman.getDate() + " (\`" + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds() + "\`)";

        if(!kullanıcı){
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Kullanıcı Belirt**`)
            .setColor('RANDOM')
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
            return message.channel.send(pâyidar)
        } else if(isNaN(kullanıcı)){
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Geçerli Kullanıcı Belirt**`)
            .setColor('RANDOM')
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
            return message.channel.send(pâyidar)
        }
        if(!sebep){
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Sebep Belirt**`)
            .setColor('RANDOM')
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
            return message.channel.send(pâyidar)
        }

        if(kullanıcı && sebep){
            // Ban İşlemi
            kullanıcı.ban({reason: sebep})

            // Mesaj
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`
                \` ˑ \`Banlanan Üye - **${kullanıcı}(\`${kullanıcı.id}\`)**
                \` ˑ \`Banlayan Yetkili - **${message.author}(\`${message.author.id}\`)**
                \` ˑ \`Ban Nedeni - **${sebep}**
            `)
            .setColor('RANDOM')
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
            message.channel.send(pâyidar)
        }
    }

    module.exports.config = {
        name: "Ban",
        desc: "Ban Komudu",
        aliases: ["ban", "yasakla"]
    }

exports.help = {
    name: 'ban'
}