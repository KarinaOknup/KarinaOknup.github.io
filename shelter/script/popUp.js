const arrPets = document.querySelectorAll('.slide-items');
Array.from(arrPets).forEach( (e)=>{
  e.addEventListener('click', function(){
  let popBox = document.createElement('div');
  let shadow = document.createElement('div');
  shadow.className = 'shadow';
  popBox.className = 'popBox';
  let popMain = document.createElement('div');
  let cross = document.createElement('div');
  cross.className = 'cross';
  cross.innerHTML = '<img alt = "close" src = "../assets/icons/cancel.svg">';
  popBox.appendChild(cross);
  popMain.className = 'popMain';
  popBox.appendChild(popMain);
  document.querySelector('body').appendChild(shadow);
  document.querySelector('body').appendChild(popBox);
  cross.addEventListener('click',function(){
    popBox.remove();
    shadow.remove();
  });
});
})


