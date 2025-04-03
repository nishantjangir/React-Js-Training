
import UserContext from "../Context/UserContext"
import { useContext } from "react"
import React from "react"
const New = () => {

  const userData = useContext(UserContext);
  console.log(userData);
  const Packed = (
    { isPacked, name }
  ) => {
    if (isPacked) {
      return <p>{name} :- PackedItem</p>
    }
    return <p>{name} :- UnPackedItem</p>
  }

  return (
    <>
      <div>
        <Packed isPacked={true} name='Book' />
        <Packed isPacked={true} name='Table' />
        <Packed isPacked={false} name='Car' />
        <Packed isPacked={true} name='Silver' />
        <Packed isPacked={false} name='Gold' />
      </div>
    </>
  )
}

export default New
