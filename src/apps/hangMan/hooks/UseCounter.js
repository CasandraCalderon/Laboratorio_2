import React, { useState } from 'react'

export const UseCounter = (initCounter, {max , min}) => {
    let [counter, setCounter] = useState(initCounter);
    const incrementCounter = (step = 1) => {
        if (counter < max) {
            setCounter(counter + step);   
        };
    };
    const decrementCounter = (step = 1) => {
        if (counter > min){
            if (counter === min){
                setCounter(counter);
            }
            else {
                setCounter(counter - step);
            }
            console.log(counter - step);
            
            
        }
    };
    const resetCounter = () => {
        setCounter(initCounter);
    };
    return [counter, incrementCounter, decrementCounter, resetCounter]

};
