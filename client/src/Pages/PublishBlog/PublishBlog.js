import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PublishBlog.css';


const PublishBlog = () => {

    const [blog,setBlog] = useState({
        title:"",
        content:""
    });
    const navigate = useNavigate();

    const changeHandler =(e)=>{
        const {name,value} = e.target;
        setBlog({...blog,[name]:value});
    }

    const postBlog =async(body)=>{
    
        try{
            const response = await fetch('http://localhost:8080/blog/',{
                method:'POST',
                body:JSON.stringify(body),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            const data = response.json();
            return data.data;
        }catch(err){
            console.log(err.message);
        }
    }

    const submitBlog =()=>{
        console.log(blog)
        postBlog(blog)
        .then((res)=>navigate('/'))
        .catch(err=>alert('Not Posted'))
    }


    return (
        <div id='createBlog'>
            <input onChange={changeHandler} value={blog.title} name='title' type='text' id='blogHeading' className='inputField' placeholder='Enter Blog Title' />
            <textarea onChange={changeHandler} name='content' value={blog.content} type='text' id='contentBox' className='inputField' placeholder='Enter Blog Content' />
            {/* <button submitBlog={submitBlog}>submit</button> */}
        </div>
    )
}

export default PublishBlog