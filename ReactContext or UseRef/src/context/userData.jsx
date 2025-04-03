import React from 'react';
import UserContext from './userContext';

const UserData = ({ children }) => {
  const data = [
    {
      Id: 1,
      name: 'Nishant',
      City: 'Jaipur', 
    },
    {
      Id: 2,
      name: 'Nishant',
      City: 'Jaipur', 
    },
    {
      Id: 3,
      name: 'Nishant',
      City: 'Jaipur', 
    },
    {
      Id: 4,
      name: 'Nishant',
      City: 'Jaipur', 
    },
    {
      Id: 5,
      name: 'Nishant',
      City: 'Jaipur', 
    },
    {
      Id: 6,
      name: 'Nishant',
      City: 'Jaipur', 
    },
    {
      Id: 7,
      name: 'Nishant',
      City: 'Jaipur', 
    },
    {
      Id: 8,
      name: 'Nishant',
      City: 'Jaipur', 
    }









  ];

  return (
    <UserContext.Provider value={data}>
     {children}
    </UserContext.Provider>
  );
};

export default UserData;
