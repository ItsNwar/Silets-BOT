const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

client.commands;
client.prefix = "s!"

client.on('ready', async () => {
  console.log(`Botunuz ${client.user.tag} Aktif Oldu!`);
  client.commands = await setCommands()
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
        msg.channel.send('Aleyküm Selam Sohbete Hoş Geldin ❤🥰')
    }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'atam') {
      msg.channel.send('** İçimizde 🖤😥 **')
  }
})

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'kahve') {
        msg.channel.send('Caramel Latte mi? Yoksa Sütlü Kave mi? ❤🥰')
    }
})

client.on("guildMemberAdd", async member => {
    let css = client.guilds.cache.get("1104770471855149087");
    if (css) {
      let csm = css.members.cache.get(member.id);
      if (csm) {
        let csl = css.channels.cache.get("1113477285316677662");
        if (csl) {
          const kurulus = Date.now() - csm.user.createdTimestamp;
  
          if (kurulus < 604800000) {
            csl.send(
              `${member} Adlı Kullanıcı Fake Olduğu İçin Kayıtsız Rolünü Alıp Fake Verdim `
            );
            csm.roles.cache.map(m => {
              if (m) {
                csm.roles.remove(m);
              }
            });
  
            setTimeout(() => {
              csm.roles.add("1113477417554694215");
            }, 6000);
          }
        }
      }
    }
  });

async function setCommands() {
    commandFiles = fs.readdirSync('./commands')
    let commands = new Discord.Collection();
    commandFiles.forEach((v, i) => {
        let file = require(`./commands/${v}`)
        commands.set(v, {
            name: file.config.name,
            desc: file.config.desc,
            aliases: file.config.aliases,
            run: file.run  
        })   
    })

    return commands;
}

client.on('ready', async () => {
    console.log(`Botunuz ${client.user.tag} Aktif Oldu!`);
    client.user.setActivity('s!yardım', {type: 'PLAYING'})
    client.commands = await setCommands()
})

client.on("message", (message) => {
    if  (
        message.content.startsWith(client.prefix) && 
        (message.content.split(' ')[0] != client.prefix && message.content != client.prefix) &&
        client.commands.find(v => (v.name == (message.content.split(' ')[0].replace("s!", "") || message.content.replace("s!", ""))) || (v.aliases.includes(message.content.split(' ')[0].replace("s!", "") || message.content.replace("s!", ""))))
    ) {
        let command = client.commands.find(v => (v.name == (message.content.split(' ')[0].replace("s!", "") || message.content.replace("s!", ""))) || (v.aliases.includes(message.content.split(' ')[0].replace("s!", "") || message.content.replace("s!", ""))))

        args = message.content.split(" ")
        args = args.slice(1, args.length) 
        command.run(client, message, args)
    }
})

client.login('MTExMzA5ODY4MjQzNTM4MzI5Ng.Gx_piB.qpG88_f163vSyklQw7n9GAtM00N8i4r84BY8Bc');