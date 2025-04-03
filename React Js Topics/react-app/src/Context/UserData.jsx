import React from 'react'
import UserContext from './UserContext'

const UserData = (props) => {

    const data = {
        "name" : 'Nishant',
       " City" : 'Jaipur'
        
    }
  return (
    <UserContext.Provider value={data}>
{props.children}
    </UserContext.Provider>
  )
}

export default UserData
