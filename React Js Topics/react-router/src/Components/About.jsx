import React from 'react'
import { useContext } from 'react';
import CounterContext from '../Context/counterContext';

const About = () => {
  const data = useContext(CounterContext);
  console.log(data);
  return (
   <>
<div>
 <p>Get Data..........</p>
</div>
</>
  )
}

export default About







