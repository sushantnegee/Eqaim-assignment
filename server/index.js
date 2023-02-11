const express = require('express');
const connect = require('./dataBase/connect');
// const { connect } = require('mongoose');

const app = express();

const port = 5050;

connect().then((res)=>{
    app.listen(port,()=>{
        console.log(`server is running at ${port}`)
    })
}).catch((err)=>{
    console.log(err.message)
})