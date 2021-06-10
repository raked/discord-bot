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

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("Pong.");
  } else if (command === "args-info") {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    } else if (args[0] === "foo") {
      return message.channel.send("bar");
    }

    message.channel.send(`First argument: ${args[0]}`);
  }
});

// login to Discord with your app's token
client.login(process.env.TOKEN);
