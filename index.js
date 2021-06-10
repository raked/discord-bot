// require discord.js
const Discord = require("discord.js");
const dotenv = require("dotenv");
// create a new Discord client
const client = new Discord.Client();
// require config file
const { prefix } = require("./config.json");

dotenv.config();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Ready!");
});

//when a message is detected, log it to the console.
client.on("message", (message) => {
  if (message.content.startsWith(`${prefix}ping`)) {
    // send back "Pong." to the channel the message was sent in
    message.channel.send("Pong.");
  } else if (message.content.startsWith(`${prefix}beep`)) {
    message.channel.send("Boop.");
  } else if (message.content.startsWith(`${prefix}server`)) {
    message.channel.send(`This server's name is: ${message.guild.name}`);
  }
});

// login to Discord with your app's token
client.login(process.env.TOKEN);
