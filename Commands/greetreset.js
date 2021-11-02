const db = require("old-wio.db")
const config = require("../config.json");
const { MessageEmbed } = require("discord.js");
module.exports = class resetgreet {
    constructor() {
        this.name = "resetgreet",
        this.alias = ["rg", "gr", "greetreset"],
        this.usage = "resetgreet"
    }
    async run(client, message, args) {   
    if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("<:Function_Emergency:902071541553061958> You do not enough permission to use this command.");
    }
   // This code is made by Supreme#2401
    db.delete(`welcome_${message.guild.id}`)
    
    message.channel.send(`<:Function_Tick:902071533269303316> Greet channel resetted!`)
    }
}