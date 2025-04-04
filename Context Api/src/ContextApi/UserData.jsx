import React from 'react'
import DataContext from './DataContext'

const UserData = (props) => {
    const name = 'Nishant Jangir'
    const email = 'nishantjangir@gmail.com'
  return (
 <DataContext.Provider value={{name , email}}>
{props.children}
 </DataContext.Provider>
  )
}

export default UserData