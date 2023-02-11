const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const connect = () =>{
    return new Promise((resolve, reject)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/eqaimblog',(err)=>{
            return err ? reject('Conection error') : resolve('Connected to DataBase');
        })
    })
}

module.exports = connect;