const BlogModel = require('../models/blog.model')

async function getBlogs(){
    const data = await BlogModel.find();
    return data;
}


async function createBlog(body){
     const blog = await BlogModel.create(body);
     return blog;
}

async function getBlog(id){
    const blog = await BlogModel.findOne({'_id':id});
    if(!blog){
        throw Error("Blog Not Found")
    }
    return blog;
}


module.exports = {getBlogs,createBlog,getBlog}