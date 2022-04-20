import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { useStateValue } from './StateProvider';
import db from './Firebasefile';
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';



function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(input);

        console.log("The image url is", imageUrl);
        
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilepic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        });
        setImageUrl("");
        setInput("");  
    };
   
    

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src ={user.photoURL} />
                <form onSubmit={handleSubmit}>
                    <input 
                        value={input}
                        onChange={ e => setInput(e.target.value)}
                        //onKeyPress={handleKeypress}
                        className='messageSender__input'
                        placeholder={`What's on your mind, ${user.displayName}?`} 
                    />

                    <input 
                        value={imageUrl}
                        onChange={ e => setImageUrl(e.target.value)}
                        //onKeyPress={handleKeypress}
                        placeholder='image URL (Optional)'
                    />

                    <button onClick={ handleSubmit} type="submit"> Hidden submit </button>
                </form>
            </div>  

            < div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    );
}

export default MessageSender;

