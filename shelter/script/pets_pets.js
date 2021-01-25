async function getData(){
  const responce = await fetch('../assets/data_pets.json');
  const json = await responce.json();
  return json;
}
async function handle() {
  const pets = await getData();
  console.log(pets)
  for(let i = 0; i < pets.length; i++){
  let slides = document.createElement('div');
  slides.className = 'slide-items item';
  slides.innerHTML=`<img  class="pet-img" src="${pets[i].img}" alt="">
  <p class="pet-name">${pets[i].name}</p>
  <button class="btn btn-secondary">Learn more</button>`;
  document.querySelector('.slide').appendChild(slides);
  slides.addEventListener('click', function(){
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
    popMain.innerHTML = `<img class='pet-img-box' alt='petImg' src='${pets[i].img}'>
    <div class = 'info-box'>
    <h2 class = 'pet-name-box'>${pets[i].name}</h2>
    <span class='pet-type-box'>${pets[i].type}-${pets[i].breed}</span>
    <p class='pet-info-box'>${pets[i].description}</p>
    <ul class='ul-pet-box'>
    <li><span><b>Age:</b> ${pets[i].age}</span></li>
    <li><span><b>Inoculations:</b> ${pets[i].inoculations}</span></li>
    <li><span><b>Diseases:</b> ${pets[i].diseases}</span></li>
    <li><span><b>Parasites:</b> ${pets[i].parasites}</span></li>
    </ul>
    </div>`;
    popBox.appendChild(popMain);
    document.querySelector('body').appendChild(shadow);
    document.querySelector('body').appendChild(popBox);
    cross.addEventListener('click',function(){
      popBox.remove();
      shadow.remove();
    });
  });
  }
}
handle();
