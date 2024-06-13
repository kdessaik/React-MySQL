const express=require('express');
const mysql=require('mysql')
const cors=require('cors')

const app =express()
app.use(cors())

//Database
const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'formpython'



})

app.get('/',(re,res)=>{
return res.json('From Backend Side by kdk')})

app.get('/usertable',(req,res)=>{
    const sql="SELECT * FROM usertable ";
    db.query(sql,(err,data)=>{
       if (err) return res.json(err) ;
       return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log('listening')
})
