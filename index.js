// require discord.js
const Discord = require("discord.js");
const dotenv = require("dotenv");
// create a new Discord client
const client = new Discord.Client();

dotenv.config();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Ready!");
});

//when a message is detected, log it to the console.
client.on("message", (message) => {
  if (message.content === "!ping") {
    // send back "Pong." to the channel the message was sent in
    message.channel.send("Pong.");
  }
});

// login to Discord with your app's token
client.login(process.env.TOKEN);
