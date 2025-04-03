import React, { useContext } from 'react';
import UserContext from './context/userContext';

const Third = () => {
  const a = useContext(UserContext);
  console.log(a);


  return (
<>
<div>
  <ul>
    {
      a.map((data) => (
        <li key={data.Id}>
          <p>Name:- {data.name}</p>
          <p>City:- {data.City}</p>
        </li>
      ))
    }

  </ul>
</div>
</>
  );
};

export default Third;