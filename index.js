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
  } else if (command === "prune") {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount < 2 || amount > 100) {
      return message.reply("you need to input a number between 2 and 100.");
    }
    message.channel.bulkDelete(amount, true).catch((err) => {
      console.error(err);
      message.channel.send(
        "there was an error trying to prune messages in this channel!"
      );
    });
  }
});

// login to Discord with your app's token
client.login(process.env.TOKEN);
