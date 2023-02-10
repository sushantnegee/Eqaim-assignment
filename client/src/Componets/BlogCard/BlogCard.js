import React from 'react';
import './BlogCard.css'

const BlogCard = (props) => {
    const {title} = props.data
    console.log(title)
    return <div className='blogCard'>
        <h2>{title}</h2>

    </div>
}

export default BlogCard;