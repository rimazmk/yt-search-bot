const Discord = require("discord.js");
const client = new Discord.Client();
const Youtube = require('discord-youtube-api');
require('dotenv').config();

const token = process.env.TOKEN;
const api_key = process.env.API_KEY;

yt = new Youtube(api_key);

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", async message => {
  var prefix = "!search";

  if (message.content.startsWith(prefix)) {
    message.channel.send("Searching..");
    const vid = await yt.searchVideos(message);

    message.channel.send(vid.url);
  }
});

client.login(token);

