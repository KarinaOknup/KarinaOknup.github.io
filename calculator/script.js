class Calculator{
  constructor(previousOperandTextElement,currentOperandTextElement){
    this.previousOperandTextElement=previousOperandTextElement;
    this.currentOperandTextElement=currentOperandTextElement;
    this.clear();
  }

clear(){
this.currentOperand = '';
this.previousOperand = '';
this.operation = undefined;
}

delete(){
this.currentOperand = this.currentOperand.toString().slice(0,-1);
}

appendNumber(number){
  if(number === '.' && this.currentOperand.includes('.'))return;
   this.currentOperand = this.currentOperand.toString() + number.toString();
}

chooseOperation(operation){
if(this.previousOperand !== ''){
  this.compute();
}
this.operation = operation;
this.previousOperand = this.currentOperand;
this.currentOperand = '';
}

compute(){
 let computation;
 const prev = parseFloat(this.previousOperand);
 const current = parseFloat(this.currentOperand);
 if (isNaN(prev)||isNaN(current)) return
 switch (this.operation) {
   case '+':
     computation = +(prev + current).toFixed(10);
     break;
   case '-':
    computation = +(prev - current).toFixed(10);
    break;
   case '*':
    computation = +(prev * current).toFixed(10);
    break;
   case '÷':
    computation = +(prev / current).toFixed(10);
    break;
    case'^':
   computation = +(prev ** current).toFixed(10);
    break;
    default:
      return;
 }
this.currentOperand = computation;
this.operation = undefined;
this.previousOperand = '';
}

sqrt(){
  if (this.currentOperand < 0) {
    this.currentOperand = 'ERROR';
    return;
  }
  if (this.currentOperand == '') {
    this.currentOperand = NaN;
    this.resetFlag = true;
    return;
  }
  this.currentOperand = +(this.currentOperand**(1/2)).toFixed(10);
   }

plus_minus(){
  if(this.currentOperand !== ''){
    this.currentOperand = -this.currentOperand;
  }
}

getDisplayNumber(number){
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split('.')[0]);
  const decimalDigits = stringNumber.split('.')[1];
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay='';
  }
  else {
    integerDisplay = integerDigits.toLocaleString('en',{ maximumFractionDigits: 0});
  }
  if(decimalDigits != null){
    return `${integerDisplay}.${decimalDigits}`;
  } else{
    return integerDisplay;
  }
}

updateDisplay() {
if(this.currentOperand ==='ERROR') this.currentOperandTextElement.innerText = 'ERROR';
else this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
if (this.operation != null) {
  this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
}else{
  this.previousOperandTextElement.innerText = '';
  }
}

}

const numberButtons = document.querySelectorAll('[data-number]');
const plus_minus=document.querySelector('[data-plus-minus]');
const operationButtons = document.querySelectorAll('[data-operation]');
const sqrt = document.querySelector('[data-operation-sqrt]');
const eaqualsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach( button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})

plus_minus.addEventListener('click', () =>{
  calculator.plus_minus();
  calculator.updateDisplay();
})

operationButtons.forEach(button =>{
  button.addEventListener('click',() =>{
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
})

sqrt.addEventListener('click', () =>{
  calculator.sqrt();
  calculator.updateDisplay();
    })

eaqualsButton.addEventListener('click', button =>{
calculator.compute();
calculator.updateDisplay();
calculator.currentOperand='';
})

allClearButton.addEventListener('click', button =>{
  calculator.clear();
  calculator.updateDisplay();
  })

 deleteButton.addEventListener('click', button =>{
  calculator.delete();
  calculator.updateDisplay();
  })