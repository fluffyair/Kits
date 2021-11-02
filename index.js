const { Client, MessageEmbed } = require("discord.js");
const { CommandHandler } = require("djs-commands");
const db = require('old-wio.db');
const client = new Client({ disableEveryone: true });
var approx = require('approximate-number');
const config = require("./config.json");
const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: config.prefix 
});

  
client.on("ready", () => {
    console.log("Ready !");
    client.user.setActivity(/*${approx(client.users.size)} Users*/ `servers | ${config.prefix}help`, {type: "WATCHING"})
});

client.on("message", async (message) => {

    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(client,message,args)
    }catch(e){
        console.log(e)
    }

});

client.on('guildCreate', guild => {
  const add = new MessageEmbed()
  .setAuthor(`Server Name: ${guild.name}`, guild.iconURL)
  .setTitle('__**<:Function_Tick:902071533269303316> I have been added to a new server!**__')
  .setDescription(`I have been added to ${guild}\n\`Id: ${guild.id}\`\nMembercount: ${guild.memberCount} members\nRegion: ${guild.region.charAt(0).toUpperCase() + guild.region.substring(1)}\n`)
  .setFooter(`${config.bot_name} Logging`)
  .setColor("GREEN")
    client.channels.cache.get("904800663953866772").send(add)
});

client.on('guildDelete', guild => {
  const add = new MessageEmbed()
  .setAuthor(`Server Name: ${guild.name}`, guild.iconURL)
  .setTitle('__**<:Function_Tick:902071533269303316> I have been kicked from a server!**__')
  .setDescription(`I have been kicked from ${guild}\n\`Id: ${guild.id}\`\nMembercount: ${guild.memberCount} members\nRegion: ${guild.region.charAt(0).toUpperCase() + guild.region.substring(1)}\n`)
  .setFooter(`${config.bot_name} Logging`)
  .setColor("RED")
    client.channels.cache.get("904800663953866772").send(add)
});

client.on("guildMemberAdd", async (member) => {
  const welcomeChannel = await db.fetch(`welcome_${member.guild.id}`);
  if (!welcomeChannel) return;
  const welcomeMessage = `<:Function_Emergency:902071541553061958> Welcome ${member.user} to ${member.guild.name}!`
  client.channels.cache.get(welcomeChannel).send(welcomeMessage).then((m) => m.delete({ timeout: 5000 }));
})
client.login(process.env.TOKEN)