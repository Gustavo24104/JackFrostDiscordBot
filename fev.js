

    module.exports = {
        name: "fev",
        descricao: "fev",
        execute(message, argumentos, commandBody) {
            var gostosa = Math.floor((Math.random() * 3) + 1);
                if(gostosa == 1) message.channel.send("https://media1.tenor.com/images/b8da87191ce83586c9ca6661389f2ffe/tenor.gif?itemid=15348457");
                if(gostosa == 2) message.channel.send("https://media1.tenor.com/images/50f541da31d82470e0a7921f8edcf74d/tenor.gif?itemid=5256373");
                if(gostosa == 3) message.channel.send("https://media1.tenor.com/images/7b89d83ce37b5daaedaeaf98b1f805ce/tenor.gif?itemid=17974671");
        }
    }