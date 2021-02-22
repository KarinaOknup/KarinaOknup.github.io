 let store = {
      _state:{
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
      },
      _callSubscriber() {
        console.log("yep");
      },

      getState(){
        return this._state;
      },
      subscribe (observer){
        this._callSubscriber = observer;
      },

      dispatch(action){
        if(action.type === 'ADD-POST'){
          let newPost = {
              id: 5,
              message: this._state.profilePage.newPostText,
              likes: 22
            };
          this._state.profilePage.postsData.push(newPost);
          this._state.profilePage.newPostText = '';
          this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
          this._state.profilePage.newPostText = action.newText;
          this._callSubscriber(this._state);
        }
      }


 }

  window.store = store;

  export default store;