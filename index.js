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
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("Pong.");
  } else if (command === "kick") {
    // Grab the "first" mentioned user from the message
    // This will return a `User` object, just like `message.author`
    if (!message.mentions.users.size) {
      return message.reply("you need to tag a user in order to kick them!");
    }
    const taggedUser = message.mentions.users.first();

    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
  }
});

// login to Discord with your app's token
client.login(process.env.TOKEN);
