import React from 'react';
import './MyPosts.css';
import Post from './Post/Post'

function MyPosts(props) {
  let posts = props.postsData.map(post => <Post id = {post.id} message = {post.message} likes = {post.likes} />);
  let newPost = React.createRef();
  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
  }
  let onPostChange = () => {
    let text = newPost.current.value;
    props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
  }
  return (
        <div className="posts">
          <h3>My posts</h3>
          <div className='new-post'>
            <textarea onChange = {onPostChange}
                      ref = {newPost}
                      value = {props.newPostText}/>
            <button onClick = {addPost} className = 'btn-post'>Add</button>
          </div>
          <hr/>
          <div className="done-posts">
            {posts}
          </div>
        </div>
  );
}

export default MyPosts;