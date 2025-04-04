import React from 'react'
import useToggle from './CustomHooks/useToggle'
import useCount from './CustomHooks/useCount'

const App = () => {
  const [state , toggle] = useToggle();
  const [count , increaseOne , increaseTwo , decreaseOne , decreaseTwo] = useCount();

  return (
   <>
   
  <button onClick={toggle}>{state ? 'Hide' : 'Show'}</button>

{
state && 
<div>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eos, porro eius nulla recusandae laborum minima, consequuntur iste suscipit, possimus tempora eaque cupiditate et autem facere excepturi? Dolorum doloribus omnis perspiciatis in aliquam. Eos ut, expedita provident maxime fuga obcaecati, aut laudantium nisi magni, deleniti quam ea iusto sed ex.</p>
</div>

}


<div>
<p>Counter:- {count}</p>
<button onClick={increaseOne}>
  +1
</button>
<button onClick={increaseTwo}>
  +2
</button>
<button onClick={decreaseOne}>
  -1
</button>
<button onClick={decreaseTwo}>
  -2
</button>
</div>


   </>
  )
}

export default App