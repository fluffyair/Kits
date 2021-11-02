const config = require("../config.json");
const { MessageEmbed } = require("discord.js");
module.exports = class unlock {
    constructor() {
        this.name = "unlock",
        this.alias = [],
        this.usage = "unlock"
    }
    async run(client, message, args) {    
    if(!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send("<:Function_Emergency:902071541553061958> You don't have enough permissions to use this command.")

    if(!message.mentions.channels.first()) return message.channel.send("<:Function_Cross:902071530941460520> You didn't specify a channel to unlock.")


   await message.mentions.channels.forEach(async channel => {

        if(channel.permissionsFor(message.guild.id).has("SEND_MESSAGES") === true) return message.channel.send("<:Function_Cross:902071530941460520> That channel is already unlocked.");
        try {
           await channel.updateOverwrite(message.guild.id, {
             SEND_MESSAGES: true
           });
           
        message.channel.send(`<:Function_Tick:902071533269303316> <#${channel.id}> has been successfully unlocked.`)
        } catch(err) {
            console.log(err);
        }
      }
    )
  }
};