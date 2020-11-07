//Create html file in js//
let welcome=document.createElement('header');
welcome.innerHTML='<span>Welcome,[Enter Name]!</span> ';
let wrapper=document.createElement('div');
wrapper.className = 'wrapper';
let workPlace=document.createElement('div');
workPlace.className = 'workPlace';
let btnPlace=document.createElement('div');
btnPlace.className='btn-place';
btnPlace.innerHTML=('<buttom class="btn btn-save"></buttom><buttom class="btn btn-voice"></buttom><buttom class="btn btn-again"></buttom>');
let game = document.createElement('div');
game.className='game';
let view=document.createElement('div');
view.className='view';
view.innerHTML=(' <div class="time">00:00:00</div><div class="steps">10</div>')
wrapper.appendChild(workPlace);
workPlace.appendChild(btnPlace);
workPlace.appendChild(game);
workPlace.appendChild(view);
document.body.appendChild(welcome);
document.body.appendChild(wrapper);
//END//
