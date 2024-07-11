/* 
1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/

const idadeUsuario = ask2Prompt('Idade usuario')
const idadeMelhorAmigo = ask2Prompt('Idade melhor amigo')

const msg1 = `"Sua idade é maior do que a do seu melhor amigo?" ${isMaior(idadeUsuario, idadeMelhorAmigo)}`
console.log(msg1)

const diferencaIdade = `${rest(idadeUsuario, idadeMelhorAmigo)}`
console.log(diferencaIdade)