const sacolao = [];

const item = {
    nome: "",
    preco: 0,
    disponibilidade: true
}

const item1 = {
    ...item,
    nome: "Tomate Kg",
    preco: 6
}

sacolao.push(item1)

const item2 = {
    ...item,
    nome: "Banana Prata Kg",
    preco:11
}



sacolao.push(item2)

const item3 = {
    ...item,
    nome: "Cebola Nacional Kg",
    preco:10
}

sacolao.push(item3)

console.log(sacolao)