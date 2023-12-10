const express=require('express');
const studentRoutes=require('./src/student/routes')
const app=express();

const port=3000;

app.use(express.json()); //This is so we can use json file format
app.get("/",(req,res)=>
{
    res.send("hello world");
})

app.use('/api/v1/students',studentRoutes);

app.listen(port,()=>console.log(`app is listening on port ${port}`));