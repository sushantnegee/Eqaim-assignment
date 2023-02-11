import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PublishBlog.css';
import SubmitButton from '../../Componets/Buttons/SubmitButton';
import HomeButton from '../../Componets/Buttons/HomeButton';
import EditIcons from '../../Componets/EditIcons/EditIcons';


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
            const response = await fetch('http://localhost:5050/blog/',{
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
        .catch(err=>alert('Error Occured While Posting'))
    }


    return (
        <div id='createBlog'>
            <Link to={'/'}><HomeButton/></Link>
            <EditIcons/>
            <input onChange={changeHandler} value={blog.title} name='title' type='text' id='blogHeading' className='inputField' placeholder='Enter Blog Title' />
            <textarea onChange={changeHandler} name='content' value={blog.content} type='text' id='contentBox' className='inputField' placeholder='Enter Blog Content' />
            <SubmitButton submit={submitBlog}/>
        </div>
    )
}

export default PublishBlog