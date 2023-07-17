import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, body, userId} = post;

    const navigate = useNavigate();

    const handleNaviagte = () =>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>Datails about Post:{id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNaviagte}>Get The Author</button>
        </div>
    );
};

export default PostDetail;