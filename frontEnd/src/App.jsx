import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
 [data,setData]=useState() 
  useEffect(()=>{
        fetch('http://localhost:8081/usertable')
        .then(res=>res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
      },[])
      
  
    console.log('Dessai')
  

  return (


    <>
      
   
      
  
        <div>
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
            <tbody>
              <tr><td></td></tr>
              {data.map((d,i)=>{
                <tr key={i}>
                  <td>{d.id}</td>
                </tr>
              }
              )}
              
            </tbody>
        </table>
        </div>
      

     
    </>
  )
}

export default App
