import React from 'react';
import './MyPosts.css';
import Post from './Post/Post'

function MyPosts() {
  return (
        <div className="posts">
          <h2>My posts</h2>
          <div className='new-post'>
            <textarea></textarea>
            <button>Add</button>
          </div>
          <div className="done-posts">
          <Post />
          </div>
        </div>
  );
}

export default MyPosts;