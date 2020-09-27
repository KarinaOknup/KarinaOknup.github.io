class Calculator{
  constructor(previousOperandTextElement,currentOperandTextElement){
    this.previousOperandTextElement=previousOperandTextElement
    this.currentOperandTextElement=currentOperandTextElement
    this.clear()
  }

clear(){
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}

delete(){
this.currentOperand = this.currentOperand.toString().slice(0,-1)
}

appendNumber(number){
  if(number === '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString();
}

chooseOperation(operation){
if(this.previousOperand !== ''){
  this.compute()
}
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''
}

compute(){
 let computation
 if (isNaN(this.previousOperand)||isNaN(this.currentOperand)) return
 switch (this.operation) {
   case '+':
     computation = +this.previousOperand + +this.currentOperand
     break
   case '-':
    computation = +this.previousOperand - +this.currentOperand
    break
   case '*':
    computation = +this.previousOperand * +this.currentOperand
    break
   case '÷':
    computation = +this.previousOperand / +this.currentOperand
    break
    case'^':
    //if(current%2 !== 0 && prev < 0)
   computation = (+this.previousOperand) ** +this.currentOperand
   // else computation = prev**current 
    break
    default:
      return
 }
computation=Math.round(computation*1000000000000000)/1000000000000000
this.currentOperand = computation
this.operation = undefined
this.previousOperand = ''
}

sqrt(){
  if (this.currentOperand < 0) {
    this.currentOperand = 'ERROR'
    return;
  }
  if (this.currentOperand == '') {
    this.currentOperand = NaN;
    this.resetFlag = true;
    return;
  }
  this.currentOperand = this.currentOperand**0.5
   }

plus_minus(){
  if(this.currentOperand !== ''){
    this.currentOperand = -this.currentOperand
  }
}

getDisplayNumber(number){
  const stringNumber = number.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
    integerDisplay=''
  }
  else {
    integerDisplay = integerDigits.toLocaleString('en',{ maximumFractionDigits: 0})
  }
  if(decimalDigits != null){
    return `${integerDisplay}.${decimalDigits}`
  } else{
    return integerDisplay
  }
}

updateDisplay() {
if(this.currentOperand ==='ERROR') this.currentOperandTextElement.innerText = 'ERROR'
else this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
if (this.operation != null) {
  this.previousOperandTextElement.innerText=
  `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
}else{
  this.previousOperandTextElement.innerText = ''
  }
}

}

const numberButtons = document.querySelectorAll('[data-number]')
const plus_minus=document.querySelector('[data-plus-minus]')
const operationButtons = document.querySelectorAll('[data-operation]')
const sqrt = document.querySelector('[data-operation-sqrt]')
const eaqualsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)

alert('Hello! My calculator is very easy to figure out, but you need to know a couple of things: 1) The root is calculated immediately after pressing the button 2) If you want to make a number negative, there is a special button +/- ')

numberButtons.forEach( button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

plus_minus.addEventListener('click', () =>{
  calculator.plus_minus()
  calculator.updateDisplay()
})

operationButtons.forEach(button =>{
  button.addEventListener('click',() =>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

sqrt.addEventListener('click', () =>{
  calculator.sqrt()
  calculator.updateDisplay()
    })

eaqualsButton.addEventListener('click', button =>{
calculator.compute()
calculator.updateDisplay()
calculator.currentOperand=''
})

allClearButton.addEventListener('click', button =>{
  calculator.clear()
  calculator.updateDisplay()
  })

 deleteButton.addEventListener('click', button =>{
  calculator.delete()
  calculator.updateDisplay()
  }) 