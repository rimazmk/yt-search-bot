const Discord = require("discord.js");
const client = new Discord.Client();
const Youtube = require('discord-youtube-api');
const fs = require('fs');

var api_key;
var yt;

fs.readFile('apikey.txt', (err, data) => {
  if (err) throw err;
 
  api_key = data.toString();
  yt = new Youtube(api_key);
})

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", async message => {
  var prefix = "!search";

  if (message.content.startsWith(prefix)) {
    message.channel.send("command triggered!");
    const vid = await yt.searchVideos(message);

    message.channel.send(vid.url);
  }
});

client.login("NjEwOTEyODI4Nzg5ODgzMDEw.XVMPXA.t3L0Z5Rj70yfbDDZyhd-mi6sgmk");

