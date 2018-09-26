const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`T-help .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

prefix = 'T-';
client.on("message", message => {
    if (message.content === ("T-help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
اوامر عامة

T-picserver ⇏ لعرض صورة السيرفر 
T-id ⇏ الهوية
T-avatar ⇏ لعرض صورة حسابك 
T-server ⇏ معلومات السيرفر
T-bot ⇏ لعرض معلومات البوت
T-mute ⇏ لاسكات عضو في السيرفر 
T-unmute ⇏ لفك الاسكات عن عضو في السيرفر
T-roles ⇏ لعرض الرتب الموجودة في السيرفر 
T-rooms ⇏ لعرض الرومات الموجودة في السيرفر 
T-ping ⇏ لعرض سرعة البوت
T-bc ⇏ لارسال رسالة جماعية 
T-clear ⇏ لمسح الشات
T-mb ⇏ حالة الاعضاء في السيرفر
T-roll ⇏ قرعة من 1 الى 1000
T-rom-s ⇏ لانشاء روم صوتي باسم
T-mc ⇏ لقفل الشات
T-uc⇏ لفتح الشات
T-ban ⇏ لحظر الشخص من الكلان
T-kick ⇏ لطرد الشخص من الكلان


   『soon』

  BOT By: | @XAM991 جوكر





`)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === ("T-help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});
 client.on('message', function(msg) {
    if(msg.content.startsWith ('T-server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
client.on('message', message => {
if (message.content === "T-id") {
var year = message.createdAt.getFullYear()
var month = message.createdAt.getMonth()
var day = message.createdAt.getDate()
     let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
    .addField("**🔥اسمك:**",  '**[ ' + `${message.author.username}` + ' ]**')
      .setThumbnail(message.author.avatarURL)
               .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
  .addField('💬الكود الخاص بك:', message.author.discriminator)
    .addField("** 📜تم افتتاح حسابك عام:**", message.createdAt.getFullYear())
        .addField("** 📑عدد الشهور منذ افتتاح حسابك:**", message.createdAt.getMonth())

  message.channel.send({embed});
    }
})
 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("Spring-Team")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-هذا هو الرابط 
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
        .setFooter("By:JOKER XAM991")
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {//av mension
    if (message.content.startsWith("T-avatar")) {

        var mentionned = message.mentions.users.first();
    var king66s;
      if(mentionned){
          var king66s = mentionned;
      } else {
          var king66s = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setAuthor(message.author.username, message.author.avatarURL)
        .setImage(`${king66s.avatarURL}`)
      message.channel.sendEmbed(embed);

    }
  });
client.on('message', message => { //ping
    if(!message.channel.guild) return;
if (message.content.startsWith('T-ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms 📶 ")
.addField('**WebSocket:**',api + " ms 📶 ")
message.channel.send({embed:embed});
}
});
client.on('message', message => {
var prefix = "T-";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**f!bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`RANDOM`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on("guildCreate", guild => {
    let embed = new Discord.RichEmbed () 
    .setTitle('Bot Logs')
    .addField(' ***Bot joined to :***[' + `${guild.name}` + ']   **By : **' + `${guild.owner.user.username}` + '')
    .setFooter('The bot is happy')
    .setTimestamp()
    bot.channels.get("470135236144005152").send(embed)
  });

  client.on("guildDelete", guild => {
  let embed = new Discord.RichEmbed ()
  .setTitle('Bot Logs')
  .addField(' ***Bot left from :***[' + `${guild.name}` + ']     **By : **' + `${guild.owner.user.username}` +  ' ')
  .setFooter('The bot is crying')
  .setTimestamp()
  client.channels.get("470135236144005152").send(embed)
});
  client.on('message', msg => {
  if(msg.content === 'السلام عليكم')
  msg.reply('ۆعـلُـيَـگـم آلُـسـلُآم ۆرحٍـمةّ آلُلُہ ۆبْرگآتٌہ ، منْۆر. :rose:')
});
 client.on('message', msg => {
  if(msg.content === 'برب')
  msg.reply('ٺــٻۧــټ ۖ ڀــٰ̍ا̍ ۛ ּحۡــڷــﯡۥ ۛ ּلآتـطــۄڸ ۗ::disappointed::broken_heart:')
});
 client.on('message', msg => {
  if(msg.content === '.')
  msg.reply('يُلبى الََََى ينقَط ًكمًًًًًل يا ُُحَلوًًً')
});
client.on('message', msg => {
  if(msg.content === 'كيف حالكم')
  msg.reply('الحمد لله انت كيفك ؟')
});
client.on('message', msg => {
  if(msg.content === 'باك')
  msg.reply('وّلّلّّكّكّممّّ نۨــۏڕٺ ۛ ּيۧ مۭــڗ ۛ ּ، ۛ ּمۭــنۨ ۖ ڙمۭــٰا̍نۨ ̨؏ــڼۨــک ۗ :rose::wave:')
});
 

client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith("T-clear")) {
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});
 client.on("message", message => {    //serv-av
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === "T-picserver"){
        const embed = new Discord.RichEmbed()

    .setTitle(`صورة سيرفر : ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor('RANDOM')
  .setImage(message.guild.iconURL)

 message.channel.send({embed});
    }
});
client.on('message', function(message) {
    if(message.content.startsWith('T-roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Put a number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
client.on('message', message => {
    if(message.content.startsWith ('T-mb')) {
        if(!message.channel.guild) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
        .setFooter(message.author.username, message.author.avatarURL) 
  
      .setDescription(`**:battery: حالة اعضاء السيرفر**
      
  **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
  **:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
  **:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
  **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
  
          message.channel.send()
  
  message.channel.sendEmbed(embed)
  }
  });
client.on('message', message => {

    if(message.content === "T-mc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === "T-uc") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      
    
});
client.on("message", (message) => {
    if (message.content.startsWith("T-ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':warning: ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " مع السلامه :wave: ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});
client.on("message", (message) => {
    if (message.content.startsWith("T-kick")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('? ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " مع السلامه :wave: ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});

                        client.on('message', message => { //bot
                            if (message.content.startsWith("T-bot")) {
                            message.channel.send({
                                embed: new Discord.RichEmbed()
                                    .setAuthor(client.user.username,client.user.avatarURL)
                                    .setThumbnail(client.user.avatarURL)
                                    .setColor('RANDOM')
                                    .setTitle('``XAM991 Bot`` ')
                                    .addField('``Uptime``', [timeCon(process.uptime())], true)
                                    .addField('``Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                                    .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
                                    .addField('``servers``', [client.guilds.size], true)
                                    .addField('``channels``' , `[ ${client.channels.size} ]` , true)
                                    .addField('``Users``' ,`[ $client.users.size} ]` , true)
                                    .addField('``Name``' , `[ ${client.user.tag} ]` , true)
                                    .addField('``ID``' , `[ ${client.user.id} ]` , true)
                                          .addField('``Prefix``' , `[ ${prefix} ]` , true)
                                          .addField('``Language``' , `[ Java Script ]` , true)

                            })
                        }
                        });

                        function timeCon(time) { //bot2
                            let days = Math.floor(time % 31536000 / 86400)
                            let hours = Math.floor(time % 31536000 % 86400 / 3600)
                            let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
                            let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
                            days = days > 9 ? days : '0' + days
                            hours = hours > 9 ? hours : '0' + hours
                            minutes = minutes > 9 ? minutes : '0' + minutes
                            seconds = seconds > 9 ? seconds : '0' + seconds
                            return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
                        }
client.on('message', message => {//roles
    if (message.content === "T-roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {//rooms
    if (message.content === "T-rooms") {
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('rooms:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {//mute
    if (message.content.startsWith('T-mute')) {
  if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
  let men = message.mentions.users.first()
  let mas = message.author
  if(!men) return message.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
  message.guild.channels.forEach(c => {
  c.overwritePermissions(men.id, {
            SEND_MESSAGES: false
  })
      })
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**
   <@${men.id}>
  لقد تم اعطائك ميوت كتابي
  بواسطة : <@${message.author.id}> **`)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")

  client.users.get(men.id).sendEmbed(embed)
  const Embed11 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`          <@${men.id}>
  لقد تم اعطائه الميوت الكتابي بنجاح
  بواسطة : <@${message.author.id}> `)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
  message.channel.sendEmbed(Embed11).then(message => {message.delete(20000)})
      }


});
client.on('message', message => {//unmute
    if (message.content.startsWith('T-unmute')) {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
   let men = message.mentions.users.first()
   let mas = message.author
   if(!men) return message.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
   message.guild.channels.forEach(c => {
   c.overwritePermissions(men.id, {
           SEND_MESSAGES: true
           })
      })
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**
   <@${men.id}>
  تم فك الميوت الكتابي
  بواسطة : <@${message.author.id}> **`)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")

  client.users.get(men.id).sendEmbed(embed)
  const Embed11 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`          <@${men.id}>
  تم فك الميوت الكتابي
  بواسطة : <@${message.author.id}>
  `)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
  message.channel.sendEmbed(Embed11).then(message => {message.delete(20000)})
      }
});




client.login(process.env.BOT_TOKEN); 
