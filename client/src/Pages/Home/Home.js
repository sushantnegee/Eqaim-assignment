import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../../Componets/BlogCard/BlogCard';
import CreateButton from '../../Componets/Buttons/CreateButton';
import './Home.css'


const Home = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs =async()=>{

        try{
            const response = await fetch('http://localhost:5050/blog/');
            const data = await response.json();
            setBlogs(data.data)
        }catch(err){
            console.log(err.message);
        }
    
    }
    
    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <>
            {
                blogs.length == 0 ? <div id='emptyBlogContainer'>
                    No Blog Available, Create Blog
                </div> : <div id='blogContainer'>
                    {
                        blogs.map(elem => {
                            return <Link to={`/blog/${elem._id}`}><BlogCard key={elem.id} data={elem} /></Link>
                        })
                    }

                </div>
            }
            <Link to={'publishblog'}><CreateButton/></Link>
        </>
    )
}

export default Home