import React from 'react'
import Image from './Components/Image'
import New from './Components/New'
import Basic from './Components/Basic'
import { useState , useRef , useReducer  } from 'react'
const App = () => {
const [show, setShow] = useState(false)

const reducer = (state , action) => {
if(action.type === 'Increment') {
  return state + 1;
}
if(action.type === 'Decrement'){
  return state - 1;
}
}

const [state, dispatch] = useReducer(reducer , 0);
console.log(dispatch);
const ButtonClick = () => {
  setShow(!show);
}

  const name = 'Nishant Jangir'
  const email = 'xyz@gmail.com'

  const Message = () => {
    alert('A Button Has Been Successfully Clicked......')
  }

  const people = [
    {
      id : 1,
      name : 'Book-1'
    },
    {
      id : 2,
      name : 'Book-2'
    }, {
      id : 3,
      name : 'Book-3'
    }, {
      id : 4,
      name : 'Book-4'
    }, {
      id : 5,
      name : 'Book-5'
    }, {
      id : 6,
      name : 'Book-6'
    }, {
      id : 7,
      name : 'Book-7'
    }, {
      id : 8,
      name : 'Book-8'
    }
  ];


  const colorRef = useRef(null);
  const countRef = useRef(0);

  const genrateAlert = () => {
    countRef.current = countRef.current + 1 ;
    console.log(countRef.current)
  }
  const genrateAlert2 = () => {
    countRef.current = countRef.current - 1 ;
    console.log(countRef.current)
  }
  const changeColor = () => {
    colorRef.current.style.display = "None" ;
  }
  return (
    <>
      <Image Name = "Nishant" Email = "nishant@gmail.com" />
      <New />
      <div>
        <h2>Name:- {name}</h2>
        <h2>Email:- {email}</h2>
      </div>
      <Basic/>


      <button onClick={Message}>Clicked</button>
{people.map((item) => (
<ul key={item.id}>
    <li >{item.name}</li>
    </ul>
))}

<input type={ show ? 'text' : 'password'} placeholder='Enter Password' /><button onClick={  ButtonClick}>{show ? 'Hide' : 'Show'}</button>


<div>
<button onClick={changeColor} ref={colorRef}>Change</button>
</div>
<div>
  <button onClick={genrateAlert}>Increse</button>
  <button onClick={genrateAlert2}>Decrese</button>
</div>


<div>
  <p>Counter:- {state}</p>
  <button onClick={() => dispatch ({ type : 'Increment'})}>Increment</button>
  <button onClick={() => dispatch ({ type : 'Decrement'})}>Decrement</button>
</div>
    </>
  )
}

export default App
