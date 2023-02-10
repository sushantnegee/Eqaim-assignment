import { Link } from 'react-router-dom';
import BlogCard from '../../Componets/BlogCard/BlogCard';
import './Home.css'


const Home = () => {

    let blogs =[

    ]
    return (
        <>
            {
                blogs.length == 0 ? <div id='emptyBlogContainer'>
                    No Blog Available, Create Blog
                </div> : <div id='blogContainer'>
                    {
                        blogs.map(ele => {
                            return <Link to={`/blog/${ele._id}`}><BlogCard key={ele.id} data={ele} /></Link>
                        })
                    }

                </div>
            }
            <button>creat blog</button>
        </>
    )
}

export default Home