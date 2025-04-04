import React from 'react'
import Next from './Next'

const App = () => {
  const user = {
    name : 'Nishant Jangir',
    email : 'nishant@gmail.com',
    age : 21
}
  return (
    <>
    <Next user = {user}/>
    </>
  )
}

export default App