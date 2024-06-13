import React, { useEffect, useState } from 'react'

function App() {
  [data,setData]=useState()
  useEffect(()=>{
    fetch('http://localhost:8081/usertable')
    .then(res=>res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  },[])
  return (
    <div style={{color:'white'}}>
    <table>
      <thead>
        <th>
          Id
        </th>
        <th>
          Name
        </th>
      
      <th>
          Phone
        </th>
        <th>
          Email
        </th>
        </thead>
    </table>
    </div>
  )
}

export default App
