jakequotes = [
    'Time flies like a clock, fruit flies like a banana.',
    'Shoehorns are useful tools.',
    'i amm going to rip my eyes out'
]

module.exports = {
    name: "jakequote",
    description: "Displays a random jake quote.",
    execute(message, args){
        message.channel.send(jakequotes[Math.floor(Math.random() * jakequotes.length)]);
    }
}