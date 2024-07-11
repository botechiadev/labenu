/*

Parte 2
Na aula passada começamos a implementar um sistema para o RH de uma empresa.

Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? 
Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.

Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

- Janeiro: R$ 5.784,50
- Fevereiro: R$ 3.418,41
- Março: R$ 4.124,10
- Abril: R$ 1.874,00
- Maio: R$ 7.000,00
- Junho: R$ 9.450,00
d)  Desconto do INSS 5% do salário

Calcule:

O salário fixo mais o auxílio creche

Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
*/
const empregadoFulano = {
    nome: 'Fulano de Silva',
    cpf: '000.000.000-00',
    dataNascimento: '10/02/1990',
    endereco: 'Rua dos bobos nº 0',
    auxilioCreche: 45.5,
    filhos: 2,
    habilitacao: true,
    cargo: 'Vendedor',
    salarioFixo: 2000,
    vendas: [
        { mes: 'Janeiro', valor: 5784.50 },
        { mes: 'Fevereiro', valor: 3418.41 },
        { mes: 'Março', valor: 4124.10 },
        { mes: 'Abril', valor: 1874.00 },
        { mes: 'Maio', valor: 7000 },
        { mes: 'Junho', valor: 9450 }
    ],
    comissaoPercentual: 0.10,
    inssDesconto: 0.05
};

const calcValorPercentSobreFixo = (percentual, fixo) => {
    return fixo * percentual;
};

const somaKeyFromListaObj = (lista, keySomada) => {
    const novaLista = []
    lista.forEach((item) => {
        novaLista.push(item[keySomada])
    });
    return novaLista.reduce((total, num) => total + num, 0);
};

const multiplicar = (a, b) => a * b;

const { nome, cpf, endereco, auxilioCreche, filhos, habilitacao, cargo, salarioFixo, vendas, comissaoPercentual, inssDesconto } = empregadoFulano;

// Auxílio creche total
const valorBolsaFamilia = multiplicar(auxilioCreche, filhos);

// Cálculo das comissões e descontos
const salariosCompletos = vendas.map((venda) => {
    const comissao = calcValorPercentSobreFixo(comissaoPercentual, venda.valor);
    const salarioComComissao = salarioFixo + comissao + valorBolsaFamilia;
    const descontoINSS = calcValorPercentSobreFixo(inssDesconto, salarioComComissao);
    const salarioFinal = salarioComComissao - descontoINSS;
    return {
        mes: venda.mes,
        salarioFinal,
        comissao,
        descontoINSS
    };
});

// Imprime o salário de todos os meses com acréscimos e descontos
salariosCompletos.forEach((salario) => {
    console.log(`Mês: ${salario.mes}, Salário Final: R$ ${salario.salarioFinal.toFixed(2)}, Comissão: R$ ${salario.comissao.toFixed(2)}, Desconto INSS: R$ ${salario.descontoINSS.toFixed(2)}`);
});

// Cálculo da média salarial dos seis meses
const mediaSalarial = salariosCompletos.reduce((total, salario) => total + salario.salarioFinal, 0) / salariosCompletos.length;

console.log(`A média salarial de Fulano de Silva nos seis meses é: R$ ${mediaSalarial.toFixed(2)}`);
