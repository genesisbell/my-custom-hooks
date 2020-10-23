import { useState } from "react";


function useCounter(initialState=0){
    const [counter, setCounter] = useState(initialState)

    function increment(factor=1){
        setCounter(counter + factor);
    }
    
    function decrement(factor=1){
        setCounter(counter - factor);
    }

    function reset(){
        setCounter(initialState);
    }

    return{
        counter,
        increment,
        decrement,
        reset
    };
    
}

export default useCounter;