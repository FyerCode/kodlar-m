const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {

    if(!message.member.hasPermission('SEND_MESSAGES')) return message.channel.send(`Yetkin yok.`)
    if(!args[0]) return message.channel.send(`**${ayarlar.prefix}kirbaçla sert/yumuşak/anime/vahşi-batı**`)

    if(args[0] === 'yumuşak') {
        const yumuak = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage('https://media1.tenor.com/images/78b3023f6618ae57f20c74e9e73114a2/tenor.gif?itemid=15307617')
        .setFooter(`${message.author.username} Kırbaçlıyor`)
        message.channel.send(yumuak)
    }

    if(args[0] === 'sert') {
        const sert = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage('https://media.tenor.com/images/36bc60880d3cedd3e46d438588eb4c45/tenor.gif')
        .setFooter(`${message.author.username} Vurdu kırbaçı!`)
        message.channel.send(sert)
    }

    if(args[0] === 'anime') {
        const anime = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage('https://media1.tenor.com/images/bcb5a1c9b343a27c440b962d3e867d9f/tenor.gif?itemid=15788990')
        .setFooter(`${message.author.username} anime gibi kırbaçladı?`)
        message.channel.send(anime)
    }

    if(args[0] === 'vahşi-batı') {
        const bati = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage('https://media1.tenor.com/images/a66bec8c95e099fb580934a2c74c832e/tenor.gif?itemid=4478689')
        .setFooter(`${message.author.username} Vahşi batıda kırbaçlıyor vuuuuhuuuuuuu`)
        message.channel.send(bati)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false, 
    aliases: [], 
    permLevel: 0
  };
  
  exports.help = {
    name: "kırbaçla",
    description: 'Kırbaçlarsınız',
    usage: "kırbaçla"
  };
