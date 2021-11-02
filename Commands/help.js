const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = ["h"],
        this.usage = "help"
    }
// what we doin
// well a lot of commands are very slow and dont work properly like info it doesnt show guilds or users ,, okay 
// ill see
    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new MessageEmbed()
            .setTitle(`${config.bot_name}` + " __**Help Desk**__")
            .setDescription(`**<:Function_Emergency:902071541553061958> Bot made to manage a server with simple commands.**\nMade with [djs library](https://discord.js.org/). Library support in the [documentation server](https://discord.gg/djs).\n`+ '*__Prefix:__*' + ` **${config.prefix}**`)
            .addField(`**__Moderation__**`, '`Shows all moderation commands to keep your server safe!`', true)
            .addField(`**__Misc__**`, '`Shows all miscellaneous commands!`', true)
            .addField(`**__Info__**`, '`Shows all information commands to get information!`', true)
            .addField(`**__Giveaway Triggers (Alias: gt)__**`, '`Shows all giveaway trigger commands!`', true)
            .addField(`**__Greet (Beta)__**`, '`Shows all greet ping commands!`', true)
            .addField(`Command Help`, `You can use \`${config.prefix}help [category]\` for more info on a category.`, false)
            .setFooter(`Extra: [] = required and <> = optional`)
            .setColor(config.color)
            message.channel.send(helpEmbed)
              return;
            }

            if (args[1] === "info") {
                let help = new MessageEmbed()
                .setTitle('Information Desk®')
                .addFields(
                  { name: 'Help'  , value: `Shows all categories of the bot!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: \`h\``, inline: true },
                  { name: 'Invite' , value: `Gives you the bots invite!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: <:Function_Cross:902071530941460520>`, inline: true },
                  { name: 'Ping' , value: `Shows the bots ping and the API ping!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: <:Function_Cross:902071530941460520>`, inline: true },)
                  .setColor(config.color)
                  .setTimestamp()
                  .setFooter(`Extra: [] = required and <> = optional`)

                message.channel.send(help)
                }

                if (args[1] === "gt") {
                let help = new MessageEmbed()
                .setTitle('Giveaway Trigger Desk®')
                .addFields(
                  { name: 'Winner' , value: `Mention a user with the command and it will send a cool giveaway winner embed!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: <:Function_Cross:902071530941460520>`, inline: true },
                  { name: 'Noreq' , value: `Sends a message that your hosting a no-requirement giveaway!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: \`nq\``, inline: true },)
                  .setColor(config.color)
                  .setTimestamp()
                  .setFooter(`Extra: [] = required and <> = optional`)

                message.channel.send(help)
                }

                if (args[1] === "misc") {
                let help = new MessageEmbed()
                .setTitle('Miscellaneous Desk®')
                .addFields(
                  { name: 'Whois'  , value: `Get a users info from your guild!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: \`userinfo\` | \`ui\``, inline: true },
                  { name: 'Serverinfo' , value: `Shows info about the server the command is ran in!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: \`si\``, inline: true },
                  { name: 'Info' , value: `Shows the bots information!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: <:Function_Cross:902071530941460520>`, inline: true },
                  { name: 'Invites' , value: `Shows the mentioned users invites!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: <:Function_Cross:902071530941460520>`, inline: true },)
                  .setColor(config.color)
                  .setTimestamp()
                  .setFooter(`Extra: [] = required and <> = optional`)

                message.channel.send(help)
                }
                
                if (args[1] === "moderation") {
                let help = new MessageEmbed()
                .setTitle('Moderation Desk®')
                .addFields(
                  { name: 'Ban'  , value: `Ban a user from the guild!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: <:Function_Cross:902071530941460520>`, inline: true },
                  { name: 'Nuke' , value: `Nukes the channel the command is ran in!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: <:Function_Cross:902071530941460520>`, inline: true },
                  { name: 'Lock' , value: `Locks the channel by changing the everyone permissions!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: <:Function_Cross:902071530941460520>`, inline: true },
                  { name: 'Unlock' , value: `Unlocks the channel by changing the everyone permissions!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: <:Function_Cross:902071530941460520>`, inline: true },)
                  .setColor(config.color)
                  .setTimestamp()
                  .setFooter(`Extra: [] = required and <> = optional`)

                message.channel.send(help)
                }

                if (args[1] === "greet") {
                let help = new MessageEmbed()
                .setTitle('Greet Desk®')
                .addFields(
                  { name: 'Greetchannel'  , value: `Sets the channel to ping on join!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: \`gc\``, inline: true },
                  { name: 'Greetreset'  , value: `Resets the greet channel!\n > **Types: __~~slash~~ / \`message\`__**\n> Aliases: \`gr\` | \`resetgreet\` | \`rg\``, inline: true },)
                  .setColor(config.color)
                  .setTimestamp()
                  .setFooter(`Extra: [] = required and <> = optional`)

                message.channel.send(help)
                }

                /*if (args[1]) {
                let help = new MessageEmbed()
                .setTitle('Operation Failed®')
                .addFields(
                  { name: '__**Invalid argument **__'  , value: `You must supply the category; \`${config.prefix}help [moderation/misc/info]\``, inline: true },)
                  .setColor("#ff0000")
                  .setTimestamp()
                  .setFooter(`Extra: [] = required and <> = optional`)
                  message.channel.send(help)
                }*/
         }catch(e) {
            throw e;
        }
    }
}