const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require("discord.js");
const config = require('../config.json');
const client = require('discord.js');
module.exports = class nuke {
    constructor() {
        this.name = "nuke",
        this.alias = [],
        this.usage = "nuke"
       }

    async run(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("<:Function_Emergency:902071541553061958> You dont have the permission to use this command!")
        }
         
           message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send(nuked)
        })
        message.channel.delete()

        let nuked = new MessageEmbed()
        .setDescription(`<:Function_Tick:902071533269303316> ${message.author.tag} ` + 'nuked this channel.')
        .setImage('https://media.giphy.com/media/wKncAzOchpYZib3Tz4/giphy.gif')
        .setColor(config.color)
  }
}
