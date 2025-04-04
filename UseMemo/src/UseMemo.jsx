import React, { useMemo } from 'react'
import { useState } from 'react';

const ExpensiveComent = () => {
    const sum = () => {
        console.log('Number Added...........')
        let i = 0;
        for(i=0;  i<= 10000;  i++); {
            i = i + 1;
        }
        return i ;

    };

    const total = useMemo (() => sum() , []);

    return <p>Sum:- {total}</p>
}




const UseMemo = () => {
    const [counter, setCounter] = useState(1)
    const counterIncrement = () => {
        setCounter(counter + 1);
    }
  return (
    
      <>
      <ExpensiveComent/>
      <button onClick={counterIncrement}>Increase</button>
      <p>Number:- {counter}</p>
      </>

  )
}

export default UseMemo
