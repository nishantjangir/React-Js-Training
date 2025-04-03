import React from 'react'
import CounterContext from './counterContext'

const counterState = (props) => {

const name = 'Nishant';
const age = 25;
  return (
 
    
<CounterContext.Provider value={{name , age}}>
{props.children}
</CounterContext.Provider>

  )
}

export default counterState
