import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
        console.log(response)
        setData(response.data)
    })
    .catch(error => {
        console.log(error)
    })
        
    }, [])
    
    
    return (
        <div>
            <ul>
                {data.map(data => <li key={data.id}>{data.name}</li>)}
            </ul>
        </div>
    )
}

export default UserList
