const main=document.querySelector('#main');
export function createButtonStart(){
  const btn =document.createElement('button')
  btn.className='btn btn-start';
  btn.innerText='Start game';
  main.prepend(btn);

}
