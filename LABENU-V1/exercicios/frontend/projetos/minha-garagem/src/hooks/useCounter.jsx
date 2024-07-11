import { useState } from "react";

export default function useCounter(value = 1, item={}){
    const [counter, setCounter] = useState(0)
    const [likeOrDislikeCounter, setLikeOrDislikeCounter] = useState(0)
    const addValue = (value)=>{
        setCounter(...counter + value)
    }
    const restValue = (value)=>{
        setCounter(...counter- value)
    }
    const restValueMin0 = (value)=>{
        if(value > counter && counter - value <0){
            alert('o valor solicitado e maior que o disponivel')
        }else if(counter === 0){
        setCounter(0)
        alert('O limite de 0 nao permite operacoes negativas')
        }else{
            setCounter(...counter - value)
        }
    }

    const emptyCounter = ()=>{
        setCounter(0)
    }
    
    const recoveryLS = (toRecover)=>{
        if(localStorage.getItem(toRecover) === null){
            localStorage.setItem(toRecover, JSON.stringify(item))
        }else{
            localStorage.get(toRecover)
        }
    }
    
    const addOnlyOneTime = (value, item)=>{
        let likeOrDislikeCounter = recoveryLS(`likeDislike-${item.id}`)
        if(likeOrDislikeCounter == 0 && value == 1 || likeOrDislikeCounter == 0 && value == -1){
            setCounter(value)
            localStorage.setItem(`likeDislike-${item.id}`, JSON.stringify(item))   
        }else if(likeOrDislikeCounter == -1 && value == 1 || likeOrDislikeCounter == 1 && value == -1){
            setCounter(value * 2)
            localStorage.setItem(`likeDislike-${item.id}`, JSON.stringify(item))   
        }else if(likeOrDislikeCounter == -1 && value == -1 || likeOrDislikeCounter == 1 && value == 1){
           alert('Apenas 1 voto por cliente')
        }else{
            console.log('algo esta passando')
        } 
    }
 return(
    {
        counter,
        setCounter,
        addValue,
        restValue,
        restValueMin0, 
        emptyCounter,
        addOnlyOneTime,
        likeOrDislikeCounter,
        recoveryLS
    }
 )
}