import React from 'react'

const Next = (props) => {
   
  return (
    <div>
        <p>{props.user.name}</p>
        <p>{props.user.email}</p>
        <p>{props.user.age}</p>
    </div>
  )
}

export default Next