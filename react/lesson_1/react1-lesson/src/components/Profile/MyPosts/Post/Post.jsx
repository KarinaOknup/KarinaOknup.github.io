import React from 'react';
import './Post.css'

function Post(props) {
  return (
            <div className='post-item'>
              <div className='post-message'>
                {props.message}
              </div>
              <div className='post-likes'>
                Likes {props.likes}
              </div>
            </div>
  );
}

export default Post;