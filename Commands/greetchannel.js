const db = require("old-wio.db")
const config = require("../config.json");
const { MessageEmbed } = require("discord.js");
module.exports = class greetchannel {
    constructor() {
        this.name = "greetchannel",
        this.alias = ["gc"],
        this.usage = "greetchannel"
    }
    async run(client, message, args) {   
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("<:Function_Emergency:902071541553061958> You do not enough permission to use this command.");
    } else {
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("<:Function_Cross:902071530941460520> You have to specify the channel")
        }
      db.set(`welcome_${message.guild.id}`, channel.id)
    
    message.channel.send(`<:Function_Tick:902071533269303316> Greet channel added - ${channel}`)
    }
    }
}