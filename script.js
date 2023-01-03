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
    

    }
    //Append fnction that happens when the user clicks on a number to add to the screen 
    appendNumber(number){

    }
    //Choose operator that allows you to click on + etc  
    chooseOperation(operation){

    }

    //this takes the value and computes its function 
    compute() {

    }
    //Updates the values inside the output
    updateDispay(){

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operations]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

//we are going to hook up all are varablies here 
