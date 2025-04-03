import React , { useState } from 'react'

const Form = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [city, setCity] = useState('')
const [data, setData] = useState([])


const submitHandler = (e) => {
    e.preventDefault()
    const finalData = {
        id : Date.now(),
        name : name ,
        email : email ,
        city : city
    }

    setData([...data , finalData])
    setName('')
    setEmail('')
    setCity('')

}

const getDelete = (id) => {
    const updatedData = data.filter((user) => user.id !== id);
    setData(updatedData); // Assuming you have a state setter to update 'data'
  };


  return (
    <>
   
   <form action onSubmit={submitHandler}>
    <input type="
    text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
     <input type="
    text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
     <input type="
    text" placeholder='Enter City' value={city} onChange={(e) => setCity(e.target.value)} />
    <button type='submit'>ADD DATA</button>
   </form>
<div>
    <ul>
    {data.map((user) => (
    <li key={user.id}>
      <p>Name:- {user.name}</p>
      <p>Email:- {user.email}</p>
      <p>City:- {user.city}</p>
      <button onClick={() => getDelete(user.id)}>Delete</button>
    </li>
  ))}
    </ul>
</div>

   </>
   
  )
}

export default Form
