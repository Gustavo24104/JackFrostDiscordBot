module.exports = {
    name: "say",
    descricao: "fala alguma coisa",
    execute(message, argumentos, commandBody) {
        var frase = commandBody.replace('say', '');
        message.channel.send(frase);
    }
}