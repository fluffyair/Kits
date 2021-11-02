const Discord = require('discord.js');
const bot = new Discord.Client()
const db = require('quick.db');
const snipes = new Discord.Collection();
const { RichEmbed } = require("discord.js");

module.exports = class info {
    constructor() {
        this.name = "snipe",
        this.alias = ["s"],
        this.usage = "q.snipe"
      }

  async run(bot, snipes, message, args) {
