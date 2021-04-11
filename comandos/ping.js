module.exports = {
    name: "ping",
    descricao: "fala a latência do bot",
    execute(message, argumentos, commandBody) {
        const tempo = Date.now() - message.createdTimestamp;
        message.reply(`| Hee-Ho! Ping atual de aproximadamente ${tempo} ms.`);
    }
}