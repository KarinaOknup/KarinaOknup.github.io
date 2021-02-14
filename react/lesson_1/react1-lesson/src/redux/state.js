  let renderEntireTree = () =>{
    console.log("yep");
  }
  let state = {
    profilePage: {
      postsData:[
        {id:1, message:'Yep',likes:8},
        {id:2, message:'Rrrrrrrrrrap Monster',likes:4},
        {id:3, message:'Sweet bear - Tae',likes:6},
        {id:4, message:'JK - Mr.Junghook',likes:33},
        {id:5, message:'funny',likes:5},
        {id:6, message:'BanPD',likes:0},
      ],
      newPostText:'write there...',
    },
    messagesPage: {
      dialogsData:[
        {text:'hi'},
        {text:'how r u?'},
        {text:'Fine'},
        {text:'I am so fine, you so fine...'},
      ],
      dialogPersonData:[
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Semen'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Sasha'},
      ],
    },
  }
  export const addPost = () => {
    let newPost = {
          id: 5,
          message: state.profilePage.newPostText,
          likes: 22
        };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = ''
    renderEntireTree(state);
  }
  export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
  }
  export const subscribe = (observer) => {
    renderEntireTree = observer;
  }

  export default state;