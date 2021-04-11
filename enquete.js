module.exports = {
    name: "enquete",
    descricao: "inicia/para uma enquete",
    execute(message, argumentos, commandBody) {
        Enquete(argumentos);  
        async function Enquete(enqueteArgs){
            if(enqueteArgs[0].toLowerCase() === "iniciar"){
                message.reply("iniciando...");
                var nomeEnquete = "";
                var canalEnqute = "";
                var numOpcoes = 0;
                var textoEnquete = "";
                const filtro = m => m.author.id === message.author.id;
                message.reply("| :flushed: Qual será o nome da enquete?").then(() => {
                    message.channel.awaitMessages(filtro, { max: 1, time: 60000, error: ['time']})
                    .then(coletado => {
                        nomeEnquete = coletado.first().content;
                            message.reply("| :flushed: Qual o nome e emoji da opção 1? (nome emoji) separado apenas por espaço").then(()=> {
                                message.channel.awaitMessages(filtro, {max: 1, time: 60000, error : ['time']})
                                .then(coletado =>{
                                    var opcao1 = coletado.first().content.split(' ');
                                    const nome1 = opcao1[0]
                                    const emoji1 = opcao1[1];
                                     
        
                                    message.reply("| :flushed: Qual o nome e emoji da opção 2 (Separado por um espaço)").then(()=>{
                                        message.channel.awaitMessages(filtro, {max: 1, time: 60000, error: ['time']})
                                        .then(coletado =>{
                                            var opcao2 = coletado.first().content.split(' ');
                                            const nome2 = opcao2[0];
                                            const emoji2 = opcao2[1];
                                            message.reply("| :flushed: Em qual canal? (Precisa ser o ID do canal!)").then(() =>{
                                                message.channel.awaitMessages(filtro, {max: 1, time: 60000, error: ['time']})
                                                .then(coletado =>{
                                                    canalEnqute = coletado.first().content;
                                                    message.client.channels.cache.get(canalEnqute).send(`Nova enquete por ${coletado.first().author}: 
        **${nomeEnquete}** 
                                                    ${emoji1} para ${nome1} 
                                                    ${emoji2} para ${nome2}`).then(m => {
                                                        m.react(emoji1);
                                                        m.react(emoji2);
                                                    })
        
                                                })
                                            
                                            })        
        
                                        })
                                    })
                                })
                                .catch(coletado =>{
                                    message.channel.send("ERRROKKKKKKKKKKKKKKKK CHAMA O FESTA");
                                })
                            })
                    }) 
                    .catch(coletado =>{
                        message.channel.send("Algo deu errado... chamando o para suporte <@266594601538682891> mas provavelmente acabou o tempo.");
                    });     
                }); 
            }
        }    
    }
}


