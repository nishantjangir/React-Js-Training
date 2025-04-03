import React from 'react'
import { useState } from 'react'

const Basic = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')

const submitHandler = (e) => {
e.preventDefault()
const userData = {
  name : name,
  email : email
}
console.log(userData)
setName('')
setEmail('')
}


  return (
    <>
    <form onSubmit={submitHandler} >
        <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type='submit' >Submit</button>


    </form>
    </>
  )
}

export default Basic
