module.exports = {
    name: "hee",
    descricao: "ho!",
    execute(message, argumentos, commandBody) {
        message.channel.send("ho!");
    }
}