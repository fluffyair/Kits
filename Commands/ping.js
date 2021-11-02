const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
module.exports = class ping {
    constructor() {
        this.name = "ping",
        this.alias = [],
        this.usage = "ping"
    }

    async run(client, message,args) {
        try{
            let pingEmbed = new MessageEmbed()
            .setTitle(`🏓 Ping Info`)
            .setDescription(`Latency is **${Date.now() - message.createdTimestamp}** ms.\nAPI Latency is **${Math.round(client.ws.ping)}** ms`)
            .setColor(config.color)
            message.channel.send(pingEmbed)
        }catch(e) {
            throw e;
        }
    }
} 
