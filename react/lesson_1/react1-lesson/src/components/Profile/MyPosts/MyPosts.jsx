import React from 'react';
import './MyPosts.css';
import Post from './Post/Post'

function MyPosts(props) {

  let posts = props.postsData.map(post => <Post id={post.id} message={post.message} likes={post.likes} />);
  return (
        <div className="posts">
          <h3> My posts</h3>
          <div className='new-post'>
            <textarea></textarea>
            <button>Add</button>
          </div>
          <div className="done-posts">
            {posts}
          </div>
        </div>
  );
}

export default MyPosts;