import React from 'react';
import './MyPosts.css';
import Post from './Post/Post'

function MyPosts(props) {
  let posts = props.postsData.map(post => <Post id = {post.id} message = {post.message} likes = {post.likes} />);
  let newPost = React.createRef();
  let addPost = () => {
    props.addPost();
  }
  let onTextChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
  }
  return (
        <div className="posts">
          <h3>My posts</h3>
          <div className='new-post'>
            <textarea onChange = {onTextChange}
                      ref = {newPost}
                      value = {props.newPostText}/>
            <button onClick = {addPost}>Add</button>
          </div>
          <div className="done-posts">
            {posts}
          </div>
        </div>
  );
}

export default MyPosts;