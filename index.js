const Discord = require('discord.js');
var CanalSugestoes = ['809888023784587264', ''];
const Client = new Discord.Client();
var prefix = '_';
var susEnabled = false;
var eventosAtivos = [''];
const fs = require('fs');
const token = require('./token.json');
Client.comandos = new Discord.Collection();
Client.cooldowns = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	Client.comandos.set(command.name, command);
}

const susGif = ["https://media1.tenor.com/images/81fde29eb7701868f9a9bd1e925e20ea/tenor.gif?itemid=19440526", 
"https://media1.tenor.com/images/a797b03a9a89220306469f09e38df131/tenor.gif?itemid=19597730",
"https://media1.tenor.com/images/c6e550aae4b7512519f94eb91e5743ea/tenor.gif?itemid=20302681",
"https://media.discordapp.net/attachments/784847535122546708/814451753156214794/susismisus.gif",
"https://media1.tenor.com/images/69c29e3123c6fb98e87daced720c996a/tenor.gif?itemid=20184137",
"https://media1.tenor.com/images/361a7354f193af1b1ace5843dcaeeb02/tenor.gif?itemid=18599860",
"https://media1.tenor.com/images/adedfac45b15f0d19ac51b16b433a25a/tenor.gif?itemid=20515193",
"https://media1.tenor.com/images/8cb65b5931d8b363b8b21fabe4c73718/tenor.gif?itemid=19658545",
"https://media1.tenor.com/images/f2079ab2b7efc0fc4f6b479bf656e49a/tenor.gif?itemid=19614053",
"https://cdn.discordapp.com/attachments/813407404447367211/816329117426515988/23d66f7.png",
"https://cdn.discordapp.com/attachments/573954977995685888/817026339054813226/maxresdefault.png",
"https://media1.tenor.com/images/934bb3d8e199478b4399f07a812d2612/tenor.gif?itemid=20549014",
"https://media1.tenor.com/images/ddab96563190e6d886f3c0c244e79a8b/tenor.gif?itemid=20141579",
"https://media1.tenor.com/images/0f7a852201c50f67d0fe1f8e68998099/tenor.gif?itemid=20297385",
"https://media1.tenor.com/images/0acc8692b16ec77591d39bbf11f8f0fc/tenor.gif?itemid=20241052",
"https://media1.tenor.com/images/48e965011df05b0f759ea8a79450c617/tenor.gif?itemid=18676023"
]

const comandosPossiveis = `**prefixo:** \\${prefix} \n **ping:** O tempo que demora pra mensagem chegar \n **say:** Fala uma frase \n **enquete** *<inciar/parar>:* inicia/acaba uma enquete (parar ainda n??o funcionando) \n **impostor:** ativa/desativa o sus! \n **hee:** ho!`
Client.login(token.token);
Client.on('ready', () => {
    console.log(`Logged in as ${Client.user.tag}`);
    //Channel.send("Online?");
})

Client.on("message", function(message){
    if(message.author.bot) return;
    if (message.webhookID) return;
    for(i = 0; i < CanalSugestoes.length; i++){
        if(message.channel.id.toString() === CanalSugestoes[i].toString()){
            message.react("????");
            message.react("????");
        }
    }

    if(message.content.toLowerCase().includes("delete")){
        message.delete();
    }
        if(xingameme(message)){
            if(message.content.toLowerCase().includes("groovy")){
                var sees = calcularNumeroAleatorio(6);
                if(sees == 1) message.channel.send(`Valeu por ter xingado o groovy ${message.author}`);
                if(sees == 2) message.channel.send("Fred sempre ser?? melhor que Groovy");
                if(sees == 3) message.channel.send(`Curiosidade do dia: O groovy ?? um bosta`);
                if(sees == 4) message.channel.send("VAI TOMAR NO CU GROOVY");
                if(sees == 5) message.channel.send("hmmmmmmmmmmmm groovy ?? um bosta hmmmmmmmmmmmmmm");
                if(sees == 6) message.channel.send("GROOVY MORREU");
        }
            if(message.content.toLowerCase().includes("jack") || message.content.toLowerCase().includes("frost")) {
                var g = calcularNumeroAleatorio(5);
                if(g == 1) message.channel.send(`Precisava mesmo de me xingar ${message.author}? Voc?? sabe como isso machuca? Eu to s?? fazendo meu trabalho cara, eu n??o mere??o isso, eu ganho quase nada de dinheiro s?? para fazer isso, o dia inteiro olhando xingamentos? ?? isso que ?? a vida? Fui feito para sofrer? Sinceramente, eu n??o aguento mais cara. Eu to cansado disso. Eu desisto, adeus.`);
                if(g == 2) message.channel.send(":(");
                if(g == 3) message.channel.send("ent??o t??");
                if(g == 4) message.channel.send("beleza");
                if(g == 5) message.channel.send("Mas que porra ?? essa que voc?? falou sobre mim, seu arrombado? Fique sabendo que eu me formei com honra no Ex??rcito Brasileiro, e estive envolvido em diversos ataques secretos ao Comando Vermelho, e tenho mais de 300 mortes confirmadas. N??o s?? sou treinado em t??ticas de gorila como tamb??m sou o melhor sniper em todo o BOPE. Pra mim voc?? num passa de mais um alvo. Vou comer esse seu cuzinho com uma precis??o nunca antes vista nesse planeta, marque minhas palavras, par??a. Voc?? pensa que pode sair por a?? falando merda na Internet? Pense de novo, cuz??o. Enquanto voc?? l?? isso eu t?? falando com minha rede secreta de espi??es espalhados pelo Brasil e seu IP est?? sendo localizado ent??o melhor se preparar pra treta, viado. A treta que vai acabar com essa bosta pat??tica que vic?? chama de vida. Voc?? t?? morto, moleque. Posso estar em qualquer lugar, a qualquer hora, e posso te matar de setecentas maneiras diferentes, e isso s?? com minhas pr??prias m??os. N??o s?? eu sou treinado em capoeira e jiu jitsu brasileiro, como tamb??m tenho acesso a todo o arsenal da Marinha Brasileira e vou usar isso tudo pra expulsar esse seu cu da face do continente, seu merdinha. Se tu soubesse a maldi????o que seu coment??rio ???esperto??? traria sobre voc??, talvez voc?? tivesse calado tua boca. Mas n??o, voc?? n??o fechou o bico, e vai pagar por isso, seu idiota do caralho. Vou cagar f??ria em cima de voc?? at?? tu se afogar. Voc?? t?? fudido, moleque.");
        }   
            if(message.content.toLowerCase().includes("vieirinha") || message.content.toLowerCase().includes("loritta") || message.content.toLowerCase().includes("fred") || message.content.toLowerCase().includes("fredboat") || message.content.toLowerCase().includes("vieirinha") || message.content.toLowerCase().includes(" carl ") || message.content.toLowerCase().includes("Erisly") ) {
                var saas = calcularNumeroAleatorio(5);    
                if(saas == 1) message.channel.send(`PARA DE RACISMO CONTRA BOT ${message.author}`);
                if(saas == 2) message.channel.send("Racismo contra bot detectado");
                if(saas == 3) message.channel.send("Deixa os bots quieto pfv, s?? t??o fazendo seu trabalho");
                if(saas == 4) message.channel.send("PARA DE XINGAR OS BOT PORRA");
                if(saas == 5) message.channel.send("eu n??o aguento mais. todo dia eu to fazendo isso, eu pe??o, pe??o e pe??o, mas voc??s continuam xingando o bot, ?? s??rio cara, eu to cansado, por favor para de xingar os bots, j?? deu, deixa eles quietos, eu cansei disso, vou cometer su??cido");   
        }
    
    }

    if(elogiig(message)){
        if(message.content.toLowerCase().includes("vieirinha") || message.content.toLowerCase().includes("loritta") || message.content.toLowerCase().includes("fred") || message.content.toLowerCase().includes("fredboat") || message.content.toLowerCase().includes("kdbot") || message.content.toLowerCase().includes("vieirinha") || message.content.toLowerCase().includes("carl") || message.content.toLowerCase().includes("Erisly")) {
            var i = calcularNumeroAleatorio(4);
            if(i == 1) message.channel.send("Gosto tamb??m");
            if(i == 2) message.channel.send("Obrigado pro n??o xingar os bots");
            if(i == 3) message.channel.send("finalmente um elogio e n??o um xingamento mds");
            if(i == 4) message.channel.send("Vlw por ser educado");
        } 
        if(message.content.toLowerCase().includes("jack") || message.content.toLowerCase().includes("frost")) {
            message.channel.send(";)");
        }
    }
    if(message.content.toLowerCase().includes("sus") || message.content.toLowerCase().includes("amogus") || message.content.toLowerCase().includes("among us") || message.content.toLowerCase().includes("amongus")){
        if(susEnabled){
            message.channel.send(susGif[calcularNumeroAleatorio(susGif.length)]);
        }
    }
    if(!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const argumentos = commandBody.split(' ');
    const comando = argumentos.shift().toLowerCase();

    if(comando === "sugestao"){
        CanalSugestoes = argumentos;
    } else if(comando === "impostor"){
        if(susEnabled){
                     susEnabled = false;
                     message.channel.send("O impostor n??o ?? mais sus!");
                 } else{
                     susEnabled = true;
                     message.channel.send("O IMPOSTOR VOLTOU A SER SUS!");
                }
    }


    if(!Client.comandos.has(comando)) return;

    try {
        Client.comandos.get(comando).execute(message, argumentos, commandBody);
    } catch (error) {
        console.error(error);
        message.reply("algo deu errado, o comando provavelmente n??o existe!");
    }

   
    // } else if (comando == "carl??o"){
    //     var sim = ['https://images-ext-1.discordapp.net/external/qHVHRN_KU_r9oICIPPbXCGFuWSmxw8ROZkEJOF_92GE/https/media.discordapp.net/attachments/806648318221877258/817815174014042162/image0-17-1.gif?width=81&height=81',
    // 'https://media.discordapp.net/attachments/806648318221877258/817815174014042162/image0-17-1.gif',
    // 'https://media1.tenor.com/images/bf43f40bb1b7a6b03c04b103ddc5cfd2/tenor.gif?itemid=18802273'];
    //     message.channel.send(sim[calcularNumeroAleatorio(sim.length)]);
    // } else if(comando == "fev"){
    //     
    
        //     message.channel.send("https://media1.tenor.com/images/9b88cb34e69f4002fe67e5d050e490cc/tenor.gif?itemid=3534875");
    // } else if(comando === "impostor"){
    //    
    // async function evento(eventoArgs){
    //     var nome = '';
    //     var descricao = '';
    //     var canal = '';
    //     if(eventoArgs[1] === 'iniciar'){
    //         const filtro = m => m.author.id === message.author.id;
    //         message.reply("|Qual vai ser o nome do evento?").then(() => {
    //             message.channel.awaitMessages(filtro, { max: 1, time: 60000, error: ['time']})
    //             .then(coletado => {
    //                 nome = coletado.first().content;
    //                 message.reply("| Qual ?? a descri????o do evento?").then(()=>{
    //                     message.channel.awaitMessages(filtro, { max: 1, time: 60000, error: ['time']})
    //                     .then(coletado => {
    //                         descricao = coletado.first().content;
    //                             message.reply("| Em qual canal? (ID)").then(() => {
    //                                 message.channel.awaitMessages(filtro, { max: 1, time: 60000, error: ['time']})
    //                                 .then(coletado => {
    //                                     canal = coletado.first().content;
    //                                     //TODO: Esse comando
                                                               
    //                                 })
    //                             })
    //                     })
    //                 })
    //             })
    //         })
    //     }
    // }

   
});





function xingameme(msg){
    if(msg.content.toLowerCase().includes("foder")||msg.content.toLowerCase().includes("odeio") || msg.content.toLowerCase().includes("fuder") ||msg.content.toLowerCase().includes("cu") || msg.content.toLowerCase().includes("otario") || msg.content.toLowerCase().includes("ot??rio") || msg.content.toLowerCase().includes("lixo") || msg.content.toLowerCase().includes("fdp") || msg.content.toLowerCase().includes("filho da puta") || msg.content.toLowerCase().includes("vagabo") || msg.content.toLowerCase().includes("vagabundo") || msg.content.toLowerCase().includes("sifuder") || msg.content.toLowerCase().includes("sifude") || msg.content.toLowerCase().includes("arrombado")) {
        return true;
    } else return false;
}

function calcularNumeroAleatorio(numero){
    return Math.floor((Math.random() * numero) + 1);
}
function elogiig(msg){
    if(msg.content.toLowerCase().includes("amo") || msg.content.toLowerCase().includes("gostosa") || msg.content.toLowerCase().includes("te amo") || msg.content.toLowerCase().includes("gostoso") || msg.content.toLowerCase().includes("foda") || msg.content.toLowerCase().includes("lindo") || msg.content.toLowerCase().includes("gato") || msg.content.toLowerCase().includes("gata") || msg.content.toLowerCase().includes("gato") || msg.content.toLowerCase().includes("lida") || msg.content.toLowerCase().includes("legal")){
        return true;
    } else return false;
}


