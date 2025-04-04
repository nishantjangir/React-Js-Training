import React, { useEffect, useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
const Increase = () => {
  setCounter (counter + 1);
}

useEffect(() => {
console.log('Page Rendering....')
})

useEffect(() => {
  console.log('Page is Rendering....')
  } , [])

  useEffect(() => {
    console.log('Page be Rendering....')
    } , [counter])


  return (
    <div>
      <button onClick={Increase}>Increment</button>
    </div>
  )
}

export default App