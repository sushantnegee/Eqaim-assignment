const BlogModel = require('../models/blog.model')

async function getBlogs(){
    const data = await BlogModel.find();
    return data;
}


async function createBlog(body){
     const blog = new BlogModel(body);
     return blog;
}

module.exports = {getBlogs,createBlog}