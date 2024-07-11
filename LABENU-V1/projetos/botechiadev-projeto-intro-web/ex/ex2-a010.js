const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
//a) Qual o código para imprimir o nome do primeiro ator/atriz?
const {elenco} = filme
console.log(elenco[0])
//b) Qual o código para imprimir o nome do último ator/atriz?
console.log(elenco[elenco.length-1])

//c) Qual o código para exibir o array com todas as transmissões de hoje?
const {transmissoesHoje} = filme;
console.log(transmissoesHoje)


//d) Qual o código para exibir o horário de transmissão do filme no Canal Brasil?
console.log(transmissoesHoje[1].horario)

