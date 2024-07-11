import React from 'react'
import useCounter from './../../hooks/useCounter'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
export default function ContainerContador({itemClicked}) {
  const [item, setItem] = useState({itemClicked})
  const [value, setValue] = useState(1)
  const {counter, setCounter, addOnlyOneTime, addValue, emptyCounter } = useCounter(value, item)
  
    return (
    <ContainerContador>
      <button onClick={()=>{addOnlyOneTime(-1, itemClicked)}}></button>
      <span>{counter}</span>
      <button  onClick={()=>{addOnlyOneTime(-1, itemClicked)}}></button>
      <button  onClick={()=>{emptyCounter()}}></button>
    </ContainerContador>
  )
}
