import React, { useContext } from 'react'
import DataContext from './ContextApi/DataContext'


const Next = () => {
    const { name , email } = useContext(DataContext)
  return (
    <div>
        <p>{name}</p>
        <p>{email}</p>
    </div>
  )
}

export default Next