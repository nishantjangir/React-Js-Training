import React from 'react'

const App = () => {
  const datas = [
    {
      id : 1,
      name : 'nishant1',
      email : 'nishan1t@gmail.com'
    },
    {
      id : 2,
      name : 'nishant2',
      email : 'nishant2@gmail.com'
    }, {
      id : 3,
      name : 'nishant3',
      email : 'nishant3@gmail.com'
    }, {
      id : 4,
      name : 'nishant4',
      email : 'nishant4@gmail.com'
    }
  ]
  return (
    <>
    {
      datas.map((data) => (
        <li key={data.id}>
          <p>
            {data.name}
          </p>
          <p>
            {data.email}
          </p>
        </li>
      ))
    }
    </>
  )
}

export default App