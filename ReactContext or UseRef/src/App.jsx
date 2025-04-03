import React , { useEffect , useState , useRef } from 'react'
import First from './First'
import UserData from './context/userData'
import UseReferd from './useReferd';

const App = () => {

  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState(true)

  const btn = useRef(null);

  const removeButton = () => {
    btn.current.style.display = 'None';
  }

  //useEffect(() => {
 //  alert('Run on every render......')
 // })
 // useEffect(() => {
   // alert('Run on First render......')
 // }, [])
 /// useEffect(() => {
  //  alert('Run only when count be changed.......')
 // }, [count])
 
 useEffect(() => {
console.log('Mounting....')
 
   
 }, [])

 useEffect(() => {
  console.log('Updating....')
   
     
   }, [count])

 
 
  const increValue = () => {
    setCount(count + 1);
  }
  


  return (
    <UserData>
      HomePage
      { display ? <p>The Value is {count}</p> : null }
      
      <button onClick={increValue}>Increase By 1</button>
      <button onClick={() => setDisplay(!display)}>Hide</button>


      <button ref={btn} onClick={removeButton}>Remove Button On Clicked....</button>
      <First/>
      <UseReferd/>
      </UserData>
  )
}

export default App
