const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`Best Server | Wings Community`);
}, 30)
})

client.login("NTI1NDE1MjU4NzY1MTMxNzk0.Dv4lNQ.2aEp8jT14GV5KAf8SMqDVAc71CQ");
