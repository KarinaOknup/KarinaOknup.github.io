let inputs = document.querySelectorAll('.propInput');

function handleUpdate() {
  let suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));

let reset = document.querySelector('#reset');
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

const canvas = document.querySelector('canvas');
function drawImage() {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = 
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    if (typeof ctx.filter !== "undefined") {
      ctx.filter =(`blur(${document.getElementsByName('blur').value}px)
                    saturate(${document.getElementsByName('saturate').value})
                    invert(${document.getElementsByName('invert').value})
                    hue-rotate(${document.getElementsByName('hue-rotate').value}deg)
                    sepia(${document.getElementsByName('sepia').value})
                    brightness(${document.getElementsByName('brightness').value})`);
      ctx.drawImage(this, 0, 0);
    }
    else {
      ctx.drawImage(this, 0, 0);
    }
  };
}
const fileInput = document.querySelector('#fileInput');
const imgContainer = document.querySelector('.img-container');
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const read = new FileReader();
  read.onload = () => {
    drawImage(read.result);
  }
  read.readAsDataURL(file);
});

let save = document.querySelector('#save');
save.addEventListener('click', function(e) {
  drawImage();
  console.log(canvas.toDataURL());
  let link = document.createElement('a');
  link.download = 'new.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
