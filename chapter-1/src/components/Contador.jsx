import { useState } from "react";
export default function Contador(){
   let [counter,setCounter] = useState(0)
    
    return(
        <>
            <h2>{counter}</h2>
            <button onClick={()=> setCounter(counter+1)} type="button">Increment</button>
        </>
    )
};

