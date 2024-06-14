import React from 'react'
import { useEffect, useState } from 'react'

function Info() {

const [records,useRecords]=useState([])

useEffect(
  ()=>{
    fetch('http://localhost:8081/usertable')
    .then(res=>res.json())
    .then(data=> {useRecords(data)})
    .catch(err=>console.log(err))

  },[]
  
)
  return (
    <div>
      
      <div>
        <ul>
        {records.map(
  (list,index)=>{
   return (<li key={index}>{list.id}. {list.username}||{list.email}||{list.country}</li>)
    
   
  }
)}

         
        </ul>
      </div>
      
    </div>
  )
}

export default Info
