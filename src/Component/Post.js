import React from 'react'
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';

function Post(props) {
    return (
        <div className="post">
            <div className="post__userdata">
             <Avatar alt={props.alt} src={props.avatar} />
             <h4>{props.username}</h4>
            </div>
            <div className="post___image">
                <img src={props.src}  alt ={props.altname}/>
            </div>
            <div className="post__comment">
                <textarea></textarea> 
                <button>comment</button>
            </div>
            
        </div>
    )
}

export default Post
