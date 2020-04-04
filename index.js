const readLine = require('readline-sync');
const robots = {
    text: require('./robots/text.js'),
};

async function start() {
    const content = {};
    
    content.searchTerm = askAndReturnSearchTerm();//Função para pegar o input do user(Termo para pesquisa)
    content.prefix = askAndReturnPrefix();//(procurar por prefixo)
    
    await robots.text(content);

    function askAndReturnSearchTerm() {
        return readLine.question('Digite Um Termo de Pesquisa da Wikipedia: ');//retorna a String no objeto
    };
    
    function askAndReturnPrefix() {
        //retorna o valor do Text e colocar no content.prefix
        const prefixes = ['Quem e', 'O que e', 'A historia de'];
        const selectedPrefixIndex = readLine.keyInSelect(prefixes);//pega o index do array
        const selectedPrefixText = prefixes[selectedPrefixIndex];//Ler o que tem no index selecionado do array

        return selectedPrefixText;
    };

    console.log(content);

};

start()