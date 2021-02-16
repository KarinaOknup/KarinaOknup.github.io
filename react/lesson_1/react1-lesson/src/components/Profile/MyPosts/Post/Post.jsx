import React from 'react';
import './Post.css'

function Post(props) {
  return (
            <div className='post-item'>
              <img src="https://i.pinimg.com/originals/a5/e6/2b/a5e62b07afaf0aa9148dc5e99bb9c5d3.png" alt="post-img" className='post-img'/>
              <div className='post-message'>
                {props.message}
              </div>
              <div className='post-likes'>
                Like: {props.likes}
              </div>
            </div>
  );
}

export default Post;