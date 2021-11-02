module.exports = class leave {
    constructor() {
        this.name = "leave",
        this.alias = [],
        this.usage = "q.leave"
    }

    async run(client, message, args) {
     if (!message.member.hasPermissions("ADMINISTRATOR")) {
       return message.channel.send("You dont have the permission to use this command!")
        }

      message.delete();
        try{
            message.channel.send("bye ;(")
            message.guild.leave();
        }catch(e) {
            throw e;
        }
    }
}