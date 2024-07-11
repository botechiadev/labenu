/*
Exercício 2
Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que o segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
*/

const n1 = ask2Prompt('insira o primeiro numero')
const n2 = ask2Prompt('insira o segundo numero')
const q1 = `O primeiro numero é maior que o segundo? ${isMaior(n1, n2)}`
const q2 = `O primeiro numero é igual ao segundo?  ${isIgual(n1, n2)}`
const q3 = `O primeiro numero é divisível pelo segundo? true? ${isDivisivel(n1, n2)}`
const q4 = `O segundo numero é divisível pelo primeiro? ${isDivisivel(n2, n1)}`

console.log(`
  ${q1},
  ${q2},
  ${q3},
  ${q4}
`)

