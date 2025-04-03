import React from 'react'
import { useEffect , useState } from 'react';
import Navbar from '../Components/Navbar';

const Home = () => {

  const [increment, setIncrement] = useState(0)


  const handleSubmit = () => {
    setIncrement( increment + 1);
  }

  useEffect(() => {
    alert('Home Page is Loaded....')
  } , [increment])
  
  return (
    <>
    <Navbar/>
    <h1>The Number Will Be:- {increment}</h1>
    <button onClick={handleSubmit}>Increment</button>
    </>
  )
}

export default Home
