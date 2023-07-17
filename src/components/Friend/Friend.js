import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const{id, name, email, username} = friend;
    return (
        <div>
            <div className='friend'>
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p><small>Username: <Link to={`/friend/${id}`}>{username}</Link></small></p>
            </div>
        </div>
    );
};

export default Friend;