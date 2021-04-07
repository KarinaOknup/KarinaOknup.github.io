let inputs = document.querySelectorAll('.propInput');

function handleUpdate() {
  let suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));

let reset = document.querySelector('.reset');
let eventInput = new Event("input");
reset.addEventListener('click',()=>{
inputs.forEach(input => {
    switch(input.name){
    case 'blur':
        input.value = 0;
        break;
    case 'saturate':
        input.value = 1;
        break;
    case 'invert':
        input.value = 0;
        break;
    case 'hue-rotate':
        input.value = 0;
        break;
    case 'sepia':
        input.value = 0;
        break;
    case 'brightness':
        input.value = 1;
        break;
    default:
        console.log('ERROR IN SWITCH-RESET')
        break;
  };
  input.dispatchEvent(eventInput);
})

})