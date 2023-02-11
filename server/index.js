const { json } = require('express');
const express = require('express');
const connect = require('./dataBase/connect');
const router = require('./routes/blog.routes');
const cors = require('cors')
// const { connect } = require('mongoose');

const app = express();
app.use(cors())
app.use(express.json());
app.use('/blog',router)

const port = 5050;

connect().then((res)=>{
    app.listen(port,()=>{
        console.log(`server is running at ${port}`)
    })
}).catch((err)=>{
    console.log(err.message)
})