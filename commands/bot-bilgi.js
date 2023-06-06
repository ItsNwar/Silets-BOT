const Discord = require('discord.js');
const moment = require('moment');
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

exports.run = async (client, message, args) => {
 
  const db = require('quick.db');
  var m = await message.channel.send(`Biraz bekleyiniz istatistikler alınıyor`)
 
  var osType = await os.type();

        if (osType === 'Darwin') osType = 'macOS'
        else if (osType === 'Windows') osType = 'Windows'
        else osType = os.type();
 
    //--------------------------//
 
    var osBit = await os.arch();
 
    if (osBit === 'x64') osBit = '64 Bit'
    else if (osBit === 'x82') osBit = '32 Bit'
    else osBit = os.arch();
 
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
     
      setTimeout(() => {
        const s = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter(client.user.username, client.user.avatarURL())
        .addField("» **Botun Sahibi**", "<@692030169195479090>")
        .addField("» **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
        .addField('» Çalışma süresi', `${duration}`, true)
        .addField('» Genel veriler', stripIndents`
        **Kullanıcı Sayısı:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
        **Sunucu Sayısı:** ${client.guilds.cache.size}
        **Kanal Sayısı:** ${client.channels.cache.size}
        `, true)
        .addField('» Versiyonlar', stripIndents`
        **Discord.JS sürümü** v${Discord.version}
        **NodeJS sürümü** ${process.version}
        `, true)
        .addField('» Kullanılan bellek boyutu', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
        .addField('» İşletim sistemi',  `${osType} ${osBit}`)
       
        .addField('» İşlemci', `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
        return m.edit(s)
       
        }, 3000)
       
    });
};

module.exports.config = {
    name: "Bot Bilgi",
    desc: "Bot Hakkında Bilgi Verir.",
    aliases: ["bot-bilgi", "bb"]
}