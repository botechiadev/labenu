const carrinho = {
    nome: "Erika Botechia",//pessoa que faz a compra
    forma: "Cartão",// forma de pago
    endereco: "Rua do Café"//endereco
}

const compra = {
    nome: "Papel Higienico",
    preco: 15,
    quantidade: 4
}

const compra1 = {...compra,
    nome: "Detergente",
    preco: 2.15,
    quantidade: 5
}

const compra2 ={...compra,
    nome: "Arroz 5kg",
    preco: 37,
    quantidade: 1
}

const compras = [compra, compra1, compra2]

carrinho.compras = compras
console.log(carrinho)
const {compras: items} = carrinho
console.log(items.length)


const carrinhoPresente = {
    ...carrinho,
    nome: "Ana",
    forma: "Cartão Presente",
    compras: [...carrinho.compras,
        {
            ...compra,
            nome: "Sucrilhos 690g",
            preco: 22,
            quantidade: 1
        }
    ]
}


console.log(carrinhoPresente)

const {compras: itemsPresente} = carrinhoPresente

console.log(itemsPresente.length)