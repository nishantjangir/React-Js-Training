import React, { useState } from 'react'
import ReactMemo from './ReactMemo';

const App = () => {
  const [count, setCount] = useState(0)
  const Increase = () => {
    setCount( count + 1);
}
  return (
    <>
   <ReactMemo/>
   <p>Value:- {count}</p>
   <button onClick={Increase}>Increment</button>
   </>

  )
}

export default App