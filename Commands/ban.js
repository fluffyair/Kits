const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
module.exports = class ban {
    constructor() {
        this.name = "ban",
        this.alias = [],
        this.usage = "ban"
    }

    async run(client, message, args) {
       const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const perms = ["BAN_MEMBERS" || "ADMINSTRATOR"];
        const doggo = message.guild.members.cache.get(client.user.id);

        if(!message.member.hasPermission(perms)) 
        return message.channel.send(`<:Function_Emergency:902071541553061958> You do not have the permission to do that: **\`BAN_MEMBERS\`** or **\`ADMINISTRATOR\`**`)

        if(!doggo.hasPermission(perms))
        return message.channel.send(`<:Function_Emergency:902071541553061958> I do not have permission to ban users, enable permission **\`BAN_MEMBERS\`** for me`)

        if (!user)
        return message.channel.send(`<:Function_Cross:902071530941460520> Please specify someone you want to ban. **\`${config.prefix}ban <user> [reason]\`**`)
        
        if(user.id === message.author.id) 
        return message.channel.send(`<:Function_Cross:902071530941460520>  You cannot ban yourself.`)

        if(user.id === client.user.id)
        return message.channel.send(`<:Function_Cross:902071530941460520>`) 

        if (user.roles.highest.position > message.member.roles.highest.position)
        return message.channel.send(`<:Function_Cross:902071530941460520> You cannot ban someone with an equal or higher role to you! Or if you are owner put yourself in a higher position`)
        

        if (!user.bannable)
        return message.channel.send(`<:Function_Cross:902071530941460520> Provided user is not bannable cuz he / she has higher role than me or equal to my role`)


        const reason = args.slice(1).join(" ");
        message.guild.members.cache.get(user.id).ban({reason: reason});

                const embed = new MessageEmbed()
        .setColor(config.color)
        .setTitle('<:Function_Tick:902071533269303316> Ban Action')
        .setDescription(`${emoji.Approved} <@${user.id}> (**\`${user.user.tag}\`**) has been banned from **${message.guild.name}**`)
        .addField('Reason', `**\`${reason != "" ? reason : "-"}\`**`, true)
        .addField('Banned By', `<@${message.member.id}> (**\`${message.member.user.tag}\`**)`, true)
        .setTimestamp()

        await message.channel.send(embed);
    }
}
