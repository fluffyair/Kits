const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const {Client, Message} = require('discord.js')
const client = new Client();
const Discord = require("discord.js");
const moment = require("moment");
const ms = require("ms");
module.exports = class winner {
    constructor() {
        this.name = "winner",
        this.alias = ["gwinner"],
        this.usage = "winner <@user>"
    }

  async run(client, message, args) {
    let member = message.guild.member(message.mentions.users.first()) || message.member;
    if (message.member.hasPermission("ADMINISTRATOR")){
    const winner = new MessageEmbed()
    .setDescription(`<a:tada:904507160032063489> **Stay in** \`${message.guild.name}\` **for more giveaways/drops!**\n╭ We do __tons__ of **giveaways** and **drops** so don't leave us!\n→ Giveaway/drop was __hosted__ by ${message.author.tag}\n→ Prioritize \`${message.guild.name}\` **pings!**`)
    .setColor(config.color)
    message.channel.send(`${member} **Won the last giveaway!**`, winner)
    } else {
    return message.channel.send('<:Function_Emergency:902071541553061958> You don\'t have administrative permissions!')
    }
  }
}