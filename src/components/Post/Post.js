import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const {id, title, body } = post;
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;