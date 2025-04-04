import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);

const Increase = () => {
  setCounter(counter + 1);
}

const Decrease = () => {
  setCounter(counter - 1);
}

  return (
    <div>
<p>The Value Is:-  {counter}</p>

<button onClick={Increase}>Increment</button>
<button onClick={Decrease}>Decremet</button>

    </div>
  )
}

export default App