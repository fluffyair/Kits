const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const {Client, Message} = require('discord.js')
const client = new Client();
const Discord = require("discord.js");
const moment = require("moment");
const ms = require("ms");
module.exports = class extra {
    constructor() {
        this.name = "whois",
        this.alias = ["userinfo"],
        this.usage = "whois"
    }

  async run(client, message, args) {
  const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do not Disturb",
    offline: "Offline"
  }
  let member = message.guild.member(message.mentions.users.first()) || message.member;
  var game = "Not active";
  
  if(!member.presence.game ){
    game = "No game is played."
  }else {
    game = member.presence.game.name
  }
  let icon = member.user.displayAvatarURL;
  const uinfoembed = new MessageEmbed()
  .setTitle(`User info from ${member.user.username}`)
  .setColor(config.color)
  .setFooter(`At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
  .setThumbnail(icon)
  .addField(`User information:`, `**Username** ${member.user.username}\n**ID** ${member.user.id}\n**Tag** ${member.user.tag}`)
  .addField(`Created at:`, `${moment(member.user.createdAt).format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
  .addField(`Joined at:`, `${moment(member.user.joinedAt).format("dddd, MMMM Do YYYY, h:mm A" , Date.now())}`)
  .addField(`**Game** ${game}`)
  
  message.channel.send(uinfoembed)
  }
}
