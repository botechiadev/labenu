const meuObjeto = {
    chave1: 2, //nome-aluno
    chave2: "string",// sobrenome-aluno
    chave3: true,//matricula
    chave4: [],//array de notas
    chave5: {}
}

const estudante = {
    nome: "Vini",
    sobrenome: "Oliveira",
    matricula: 32481,
    notas: [10, 8, 5],
    
}

//estudante.modulo = "Módulo 1"
estudante['modulo'] = "Módulo 1"

console.log("nome: " , estudante.nome)
console.log("Segunda nota: " , estudante["notas"][1])
console.log("Módulo: ", estudante.modulo)


const novoEstudante = {
    ...estudante,
    nome: "Clara",//Astrodev
    matricula: 221249,
    sobrenome: "Santos",//Oliveira
    notas :[...estudante.notas, 9],
    modulo: "Módulo 2"
}


const estudantesLabenu = [estudante, novoEstudante]
//não fazer push sem spread operator
console.log(estudantesLabenu)