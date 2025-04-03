import React from 'react'
import { useState } from 'react'
import Extra from './Extra'

const Contact = () => {
const [name, setName] = useState('Nishant')
const [email, setEmail] = useState('nishu@gmail.com')
const [city, setCity] = useState('Jaipur')

  return (
    <>
    <form action>
      <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)}/><br />
      <input type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="text" value={city} placeholder='City' onChange={(e) => setCity(e.target.value)} />
    </form>
    <p>{name} {email} {city}</p>


    <Extra/>
    </>
  )
}

export default Contact
