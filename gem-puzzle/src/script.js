let welcome=document.createElement('header');
welcome.innerHTML='<span>Welcome,[Enter Name]!</span> ';
let wrapper=document.createElement('div');
wrapper.className = 'wrapper';
let workPlace=document.createElement('div');
workPlace.className = 'work-place';
let btnPlace=document.createElement('div');
btnPlace.className='btn-place';
btnPlace.innerHTML='<buttom class="btn btn-save"></buttom><buttom id="btn-voice" class="btn"></buttom><buttom class="btn btn-again"></buttom>';
let game = document.createElement('div');
game.className='game';
let start = document.createElement('div');
start.className='start';
start.innerHTML='<p>START</p>';
let win = document.createElement('div');
win.className='win';
win.innerHTML='<p>YOU ARE WIN!</p>';
let view=document.createElement('div');
view.className='view';
view.innerHTML=' <div class="time">00:00:00</div><div class="steps">10</div>';

wrapper.appendChild(workPlace);
workPlace.appendChild(btnPlace);
workPlace.appendChild(game);
workPlace.appendChild(view);
game.appendChild(start);
game.appendChild(win);
document.body.appendChild(welcome);
document.body.appendChild(wrapper);
let voice = document.getElementById('btn-voice');
//END//
function startGame(){
start.style.visibility='hidden';
//there should be function that shuffle
//start timer and steps
};
function winGame(){
    win.style.visibility='visible';
}
function shuffle(){

}
function voiceAdd(){
voice.classlist.toggle('noMusic');
}

start.addEventListener('click',startGame);
voice.addEventListener('click',voiceAdd)