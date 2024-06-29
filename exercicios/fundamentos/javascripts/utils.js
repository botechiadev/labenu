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
    let mediator = value1
    let value1 = value2
    let value2 = mediator
    return (` ${value1} e ${value2}`)
}

/* a006-pg-3"*/
const ask2Confirm = (question)=>{
    return confirm(question) 
 }
 