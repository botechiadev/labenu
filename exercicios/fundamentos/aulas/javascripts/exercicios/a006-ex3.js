/*
Exercício 3
Você foi contratade para criar um programa de RH que realiza o cadastro de pessoas colaboradoras e armazena suas respostas.

Este programa deve perguntar à pessoa colaboradora:

a) Nome completo

b) Data de nascimento (utilize as / )

c) Endereço

d) CPF

e) Escolaridade

f) Possui CHN?

g) Quantos filhes possui?

h) Cargo atual

i) Salário

j) Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel

k) Informe o ano de admissão

Utilize o casting para a conversão de tipos das variáveis que recebem números.

Imprima no console o tipo de todas as variáveis.

Imprima no console um relatório da pessoa colaboradora.*/

const p1="Nome completo"
const p2="Data de nascimento (utilize as / )"
const p3= "Endereço"
const p4="CPF"
const p5="Escolaridade"
const p7_n="Quantos Filhos Possui"
const p8="Cargo atual"
const p9_b="Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel"
const p10_n="Informe o ano de admissão"

let r1=askByPrompt(p1)
let r2=askByPrompt(p2)
let r3=askByPrompt(p3)
let r4=askByPrompt(p4)
let r5=askByPrompt(p5)

let r7_n=askByPrompt(p7_n)
let r8=askByPrompt(p8)
let r9_b=askByPrompt(p9_b)
let r10_n=askByPrompt(p10_n)

console.log(`
    RELATORIO:
  P1: ${typeof p1} -> ${p1}: ${r1}
  P2: ${typeof p2} -> ${p2}: ${r2}
  P3: ${typeof p3} -> ${p3}: ${r3}
  P4: ${typeof p4} -> ${p4}: ${r4}
  P5: ${typeof p5} -> ${p5}: ${r5}
  P7: ${typeof p7_n} -> ${p7_n}: ${r7_n}
  P8: ${typeof p8} -> ${p8}: ${r8}
  P9: ${typeof p9_b} -> ${p9_b}: ${r9_b}
  P10: ${typeof p10_n} -> ${p10_n}: ${r10_n}
=============================================
  `)

