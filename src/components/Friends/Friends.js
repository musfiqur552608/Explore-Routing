import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends);
    return (
        <div>
            <h3>I have so many friends. YAY: {friends.length}</h3>
            {
                friends.map(friend =><Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;