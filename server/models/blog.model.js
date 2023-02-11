const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    image:String
})

const BlogModel = mongoose.model('Blog',blogSchema);

module.exports = BlogModel;