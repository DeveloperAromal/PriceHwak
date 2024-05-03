const express = require('express')
const app = express()


app.use("/",(req,res)=>{
    res.send("server is running");
});

app.listen(5000, console.log('server is running in port 5000'))