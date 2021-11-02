const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const ms = require("ms");
module.exports = class ping {
    constructor() {
        this.name = "serverinfo",
        this.alias = ["si"],
        this.usage = "serverinfo"
    }

    async run(client, message, args) {

  //store verification level
  switch (message.guild.verificationLevel) {
    case 0: var vLevel = "None"; break;
    case 1: var vLevel = "Low"; break;
    case 2: var vLevel = "Medium"; break;
    case 3: var vLevel = "High"; break;
    case 4: var vLevel = "Highest"; break;
  };
//store content filter
switch (message.guild.explicitContentFilter) {
    case 0: var cFilter = "Don't scan any messages"; break;
    case 1: var cFilter = "Scan messages from members without a role"; break;
    case 2: var cFilter = "scan messages sent by all members"; break;
  }
  
  let features = message.guild.features.map(m => m).join(", ") || 'No Features';

var embed = new MessageEmbed()
    .setAuthor(`Server Name: ${message.guild.name}`, message.guild.iconURL)
    .addField(`Basic Info`, `
**Available:** ${(message.guild.available  ? "Available" : "Not Available")}
**Region:** ${message.guild.region.charAt(0).toUpperCase() + message.guild.region.substring(1)} 
**Creation Date:** ${message.guild.createdAt}
**Verification Level:** ${vLevel}
**Features:** ${features}`)
    .addField(`Counters`, `
**Emojis:** ${message.guild.emojis.size}
**Roles:** ${message.guild.roles.size}
**Members:** ${message.guild.memberCount}
**AFK info:** Move to ${message.guild.afkChannel !== null ? message.guild.afkChannel : "None"} after ${message.guild.afkTimeout / 60} minutes
**Content Filter:** ${cFilter}
   `)
    .setColor(config.color)
    .setThumbnail(message.guild.iconURL)
    .setTimestamp();
    message.channel.send(embed)
    }
}