import React, { useEffect, useState } from 'react'

function Fetch() {

  const [data, setData] = useState([])
  const fetchApi = async () => {
    try {
        let tempResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
        let updatedResponse = await tempResponse.json();
        let mutatedResponse = updatedResponse.map((originalResponse) => {
            return {
                ...originalResponse,
                isInput : false,
            }
        })
        setData(mutatedResponse)
    } catch (error) {
        console.log("Error")
    }
    }
    
    useEffect(() => {
        fetchApi()
    }, [])

    console.log(data)
  return (
    <div></div>
  )
}

export default Fetch