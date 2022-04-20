import React, {useEffect, useState} from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './Firebasefile';
import ReactScrollableFeed from 'react-scrollable-feed'



function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) =>  ({ id: doc.id, data: doc.data() }))
        ));
            
    }, []);


    return <div className="feed">
        <StoryReel />
        <MessageSender />

        <ReactScrollableFeed>
        {posts.map((post) => (
            


            <Post
                key= {post.id}
                profilepic={post.data.profilepic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                
            />
            
        ))}
        </ReactScrollableFeed>
            
        </div>
}

export default Feed

