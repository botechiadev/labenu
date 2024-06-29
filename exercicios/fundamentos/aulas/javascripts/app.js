const ask2Prompt = (question)=>{
    let promptSaid=prompt(question)
    if (typeof Number(promptSaid) === Number){
        return Number(promptSaid)
    }else{
        return promptSaid
    }
}

const printMessage = (message)=>{
    console.log(message)
}

const changeRoles=(value1, value2)=>{
    let gato = value1
    let dog = value2
    let troca = gato
    gato = dog
    dog = troca
    
    console.log(
    `
     ${gato}, ${dog}
    `
    )
}

/* a006-pg-3"*/
const ask2Confirm = (question)=>{
    return confirm(question) 
 }
 
const multiplicar = (n1, n2) => Number(n1) * Number(n2)


const somar = (n1, n2)=> Number(n1) + Number(n2)


const isEvenOdd = (n1)=>{
    n1Num = Number(n1)
    if(n1Num === NaN){
        return "Entrada não é um número"
    }else if(n1Num ===0){
        return "PAR"
    }else if(n1Num % 3 ===0){
        return "IMPAR"
    }else{
        return "PAR"
    }
}

const isPar = ()=>{
    let pedePar = ask2Prompt("Insira um número par")
    if (isEvenOdd(pedePar) === "PAR"){
        return pedePar % 2
    }else if (isEvenOdd(pedePar) === "IMPAR"){
        return pedePar % 2
    }
}
