//Day 02 Challenge Alura #7DaysOfCode -- GitHub 010O1010

let nome = prompt('Qual seu nome?');
let idade = prompt('Quantos anos você tem?');
let linguagemProgramacao = prompt('Qual linguagem de programação você está estudando?');
let numeroEscolha;

alert('Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagemProgramacao + '!');

// Loop até que o usuário escolha 1 ou 2
while (numeroEscolha != 1 && numeroEscolha != 2) {
    numeroEscolha = prompt('Você gostaria de estudar ' + linguagemProgramacao + '? Responda com o número 1 para SIM ou 2 para NÃO.');
    
    if (numeroEscolha != 1 && numeroEscolha != 2) {
        alert('Escolha entre 1 ou 2.');
    }
}

numeroEscolha == 1 ? alert('Muito bom! Continue estudando e você terá muito sucesso.') : alert('Ahh, que pena... Já tentou aprender outras linguagens?');
