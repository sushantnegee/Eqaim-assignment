const express = require('express');
const { getBlogs, createBlog } = require('../controller/blog.controller');

const router = express.Router();


router.get('/', async (req,res)=>{
    try{
        const data = await getBlogs();
        res.send({
            data:data
        })
    }catch(err){
        res.status(500).send({
            err:err.message
        })
    }
})

router.post('/', async (req,res)=>{
    try{
        const body = req.body;
        const blog =await createBlog(body);
        console.log(blog)
        res.send({
            data:blog
        })
    }catch(err){
        console.log(err.message)
        res.status(500).send({
            err:err.message
        })
    }
})

module.exports = router;