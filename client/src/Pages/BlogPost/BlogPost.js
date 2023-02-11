import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./BlogPost.css"

const BlogPost = () => {
    const [blog, setBlog] = useState();
    const {id} = useParams();
    
    const fetchBlog = async(id)=>{

        try{
            const response = await fetch(`http://localhost:5050/blog/${id}`);
            const data = await response.json();
            return data.data;
        }catch(err){
            console.log(err.message);
        }
    
    
    }
    useEffect(()=>{
        fetchBlog(id)
        .then(res=>setBlog(res))
        .catch(err=>console.log('Error'));
    },[])

    return (
        
            !blog?<h1>loading</h1>:<div id='blog'>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                <button>home</button>
            </div>
        
    )
}

export default BlogPost