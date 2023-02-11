const { json } = require('express');
const express = require('express');
const connect = require('./dataBase/connect');
const router = require('./routes/blog.routes');
// const { connect } = require('mongoose');

const app = express();
app.use(express.json());
app.use('/',router)

const port = 5050;

connect().then((res)=>{
    app.listen(port,()=>{
        console.log(`server is running at ${port}`)
    })
}).catch((err)=>{
    console.log(err.message)
})