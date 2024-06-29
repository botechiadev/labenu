





const askByPrompt = (question)=>{
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
