const prefix = "_";

module.exports = {
    name: "help",
    descricao: "ajuda",
    execute(message, argumentos, commandBody) {
        const data = [];
        const { comandos } = message.client;
        
        if (!argumentos.length) {
            // ...
        }
        
        data.push('Aqui B):');
        data.push(comandos.map(comando => comando.name).join(', '));
        //data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

        return message.channel.send(data, {split: true});
	    
		}
}