const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send(`<h1>Hi<h1>`)
})

const port=1347

app.listen(port,()=>console.log(`App is running on ${port}`))