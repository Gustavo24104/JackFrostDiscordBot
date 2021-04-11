
module.exports = {
    name: "fister",
    descricao: "fister",
    execute(message, argumentos, commandBody) {
            //message.reply("fister");
            var varTomarNoCu = Math.floor(Math.random() * 4);
            if(varTomarNoCu == 1) message.channel.send("https://media1.tenor.com/images/b1bfdc136d4cbbe46cae8f63853a30bc/tenor.gif?itemid=18296874");
            if(varTomarNoCu == 2) message.channel.send("https://media1.tenor.com/images/164d40c1ae6a80bbd95729a8a03c37f6/tenor.gif?itemid=8541078");
            if(varTomarNoCu == 3) message.channel.send("https://media1.tenor.com/images/026caa0c7786df58458fb41925fa1356/tenor.gif?itemid=17376922");    
    }
}