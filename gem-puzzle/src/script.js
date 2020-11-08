const welcome=document.createElement('header');
welcome.innerHTML='<span>Welcome,[Enter Name]!</span> ';
let wrapper=document.createElement('div');
wrapper.className = 'wrapper';
let workPlace=document.createElement('div');
workPlace.className = 'work-place';
let btnPlace=document.createElement('div');
btnPlace.className='btn-place';
let btnSave=document.createElement('button');
let btnVoice=document.createElement('button');
let btnAgain=document.createElement('button');
btnSave.className='btn btn-save';
btnVoice.className='btn btn-voice voice';
btnAgain.className='btn btn-again';
btnPlace.appendChild(btnSave);
btnPlace.appendChild(btnVoice);
btnPlace.appendChild(btnAgain);
let voice=document.createElement('img');
voice.className='voice';
voice.src='./assets/voice.svg'
btnVoice.appendChild(voice);
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
    if (this.className==='btn btn-voice noVoice'){
        this.className='btn btn-voice voice';
        voice.src='./assets/voice.svg';
    }
    else{
        this.className='btn btn-voice noVoice';
        voice.src='./assets/noVoice.svg';
    } 
}

start.addEventListener('click',startGame);
btnVoice.addEventListener('click',voiceAdd)