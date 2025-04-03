import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ApiCalling = () => {
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
          
            const users = async () => {
                await axios.get("https://jsonplaceholder.typicode.com/users")
                    .then((response) => {
                        setTask(response.data);
                        setLoading(false)
    
                    }).catch((error) => {
                        console.log(error)
                        setLoading(false);
                        setError(true);
                        
                    })
            }
            users();
            console.log('Data Fetching..........');
           
        }, 5000)
        

    }, [task])




        
    
       






    return (
        <>

{loading && <p className='asdfgh'>Data is fetch from api......</p>}
{error && <p className='asdfgh'>Error to Fetching Data  from api......</p>}


            {
                task.map((data) => (
                    <div className='box'  key={data.id}>
                        <ul>
                            <li >
                                <p>Number:-{data.id}</p>
                                <p>Name:-{data.name}</p>
                                <p>Username:-{data.username}</p>
                                <p>Email:-{data.email}</p>
                                <p>PhoneNumber:-{data.phone}</p>
                                <p>Website:-{data.website}</p>
                                <p>
                                    Street:-{data.address.street}
                                </p>
                                <p>
                                    Suite:-{data.address.suite}
                                </p>
                                <p>
                                    City:-{data.address.city}
                                </p>
                                <p>
                                    Zipcode:-{data.address.zipcode}
                                </p>

                                <p>
                                    Company Name:-{data.company.name}
                                </p>
                                <p>Company CatchPhrase:-{data.company.catchPhrase} </p>
                                <p> Company Bs:-{data.company.bs}</p>

                            </li>
                        </ul>
                    </div>

                ))


            }


        </>
    )
}

export default ApiCalling