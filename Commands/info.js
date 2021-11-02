const { MessageEmbed } = require("discord.js"); 
const config = require('../config.json');
module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "info"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new MessageEmbed()
         .setTitle(`${config.bot_name}`)
         .setDescription("Just a bot | Made by fluffy#9621")
         .addField("Invite", `[Click Here](https://discordapp.com/oauth2/authorize?client_id=${config.bot_id}&scope=bot&permissions=8)`, true)
         .addField("Develop with help of Djs discord coding server", "[Click Here](https://discord.gg/djs)")
         .addField("Prefix", `${config.prefix}`, true)
         .addField("Guilds", client.guilds.cache.size, true)
         .addField("Users:", 
         client.users.cache.size, true)
         .setColor(config.color)   
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}
