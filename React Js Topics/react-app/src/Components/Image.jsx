import React from 'react'

const Image = (props) => {
  return (
    <>
       <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"  />
<p>{props.Name}</p>
<p>{props.Email}</p>
    </>

  )
}

export default Image
