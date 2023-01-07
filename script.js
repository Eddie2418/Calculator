//This is a class that will show all the stuff that goes into a calculator 
class Calculator{
    //This will show the prevs text element and current text element 
    //This tells us where to place our display text for our calculator 
    constructor(previousOperandTextElement,currentOperandTextElement) {
        //We set a variable for the class 
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        //We do this because we want to set the function to clear all of the inputs and set them all to defualt values 
        this.clear()
        
    }

    // This is the clear function 
    clear() {

        // We do this for clear it and it will be emtpy string 
        this.currentOperand =''
        //we do the same thing here for previous 
        this.previousOperand = ''
        //we change it to undefied 
        this.operation = undefined
    }
    //Delete function that removes the number 
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
      }
      
    //Append fnction that happens when the user clicks on a number to add to the screen 
    appendNumber(number){

        // To add one single period on the output period section we do if the strings of number includes a period we want to return It stops the function from clickimng more decimal points  
        if (number === '.' && this.currentOperand.includes('.')) return
        //this will allow the numbers in the current operand to keep adding numbers multiple selects 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    //Choose operator that allows you to click on + etc  
    chooseOperation(operation){
        //We are doing more maths here 

        //we do if statement for current operand is == to nothing return 
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
          this.compute()
        }

        //this operation is = to the operation 
        this.operation = operation
        //previous oper is = to current oper
        //we done typing current number so we recyle it over to the previous oper 
        this.previousOperand = this.currentOperand
        //current oper is = nothing it is clear 
        this.currentOperand = ''
    }

    //this takes the value and computes its function 
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
          case '+':
            computation = prev + current
            break
          case '-':
            computation = prev - current
            break
          case '*':
            computation = prev * current
            break
          case '÷':
            computation = prev / current
            break
          default:
            return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
      }
   
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }



    //Updates the values inside the output
    updateDispay() {
        //this allows me to set the text of this value in the text 
        this.currentOperandTextElement.innerText = 
         this.getDisplayNumber(this.currentOperand)
    if(this.operation != null) {
            //previous operan is = to previous operan 
        this.previousOperandTextElement.innerText = 
           `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

//This is the important bit of creating calculator 

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


//we are going to hook up all are varablies here 

// Create a calculator and set it to a new defined calculator 
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


// we are selecting the number button, Then doing a for each statement for all the loops in the button 
numberButtons.forEach(button => {
    //For each button we add a event listener 
// It will be when we click on a button we want it to do something 
    button.addEventListener('click', () => {

        //Use the calculator to make a change for whatever is inside the button
        //1-9 etc
        calculator.appendNumber(button.innerText)
        //This will update the display whenever we click on a button 
        calculator.updateDispay()
    })
})

operationButtons.forEach(button => {
    //For each button we add a event listener 
// It will be when we click on a button we want it to do something 
    button.addEventListener('click', () => {

        //Use the calculator to make a change for whatever is inside the button
        //1-9 etc
        calculator.chooseOperation(button.innerText)
        //This will update the display whenever we click on a button 
        calculator.updateDispay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDispay()
})

allClearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDispay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })