import React, { useContext } from 'react';

import UserContext from './context/userContext';
import Third from './Third'

const Second = () => {
  const newData = useContext(UserContext);
  return (
    <>
    <div>
      Second Page......
      <div>
  <p>Name:- {newData.name}</p><br />
  <p>City:- {newData.City}</p>
</div>
      <Third/>
    </div>
    </>
  )
}

export default Second





 


 



