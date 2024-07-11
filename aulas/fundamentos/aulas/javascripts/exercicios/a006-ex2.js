/*
Siga as instruções abaixo:

a) Crie um programa que faça 3 perguntas para o usuário através do prompt. Armazene a resposta de cada pergunta em uma variável.

b) Imprima no console todas as respostas.

c) Altere seu programa para que os textos das perguntas sejam armazenados em 3 variáveis diferentes.

d) Troque o texto do seu prompt pelas variáveis que contêm as perguntas.

//mandando a pergunta como texto direto
const respostaA = prompt("Você está usando uma roupa azul hoje?");

//mandando a pergunta como variável
const perguntaA = "Você está usando uma roupa azul hoje?";
const respostaA = prompt(perguntaA);

e) Altere o console para imprimir a pergunta e a resposta.

Você está usando uma roupa azul hoje? - SIM*/

const perguntaA = "Você tem COMISSAO por vendas?"
const perguntaB = "Voce tem FILHOS?"
const perguntaC = "Voce tem CNH?"

const respostaA  = prompt(perguntaA)
const respostaB = prompt(perguntaB)
const respostaC = confirm(perguntaC)

console.log(`
     ${perguntaA}: ${respostaA}
     ${perguntaB}: ${respostaB}
     ${perguntaC}: ${respostaC}
    `)