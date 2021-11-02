const config = require("../config.json");
const { MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = class invite {
    constructor() {
        this.name = "invite",
        this.alias = [],
        this.usage = "invite"
    }

    async run(client, message, args) {
      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

            let inviteEmbed = new MessageEmbed()
            .setTitle(`<:Function_Tick:902071533269303316> ${config.bot_name} Info`)
            .setDescription(`**Invite** [${config.bot_name}](https://discord.com/api/oauth2/authorize?client_id=${config.bot_id}&permissions=8&scope=bot).`)
            .setColor(config.color)
            interaction.reply({ content: inviteEmbed , components: [row] })
    }
}