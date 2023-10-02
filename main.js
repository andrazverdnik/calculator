//Constants
const zeroButton = document.getElementById("0")
const oneButton = document.getElementById("1")
const twoButton = document.getElementById("2")
const threeButton = document.getElementById("3")
const fourButton = document.getElementById("4")
const fiveButton = document.getElementById("5")
const sixButton = document.getElementById("6")
const sevenButton = document.getElementById("7")
const eightButton = document.getElementById("8")
const nineButton = document.getElementById("9")
const ACButton = document.getElementById("AC")
const divisionButton = document.getElementById("divide")
const multiplicationButton = document.getElementById("multiplication")
const reductionButton = document.getElementById("reduction")
const additionButton = document.getElementById("addition")
const equalButton = document.getElementById("equal")
const display = document.getElementById("display")

//Variables

let firstNumber = ""
let result = ""
let secondNumber = ""
let operator = ""
let currentStage = 1

//Function definitions

function checkForKeyPress (){
    window.onkeydown = (keyPressed)=>{
        switch(keyPressed.key){
            case "0":
                console.log("0")
                animateG(zeroButton)
                addToNumber("0")
                updateDisplay()
                break
            case "1":
                console.log("1")
                animateG(oneButton)
                addToNumber("1")
                updateDisplay()
                
                break
            case "2":
                console.log("2")
                animateG(twoButton)
                addToNumber("2")
                updateDisplay()
                
                break
            case "3":
                console.log("3")
                animateG(threeButton)
                addToNumber("3")
                updateDisplay()
                
                break
            case "4":
                console.log("4")
                animateG(fourButton)
                addToNumber("4")
                updateDisplay()
                
                break
            case "5":
                console.log("5")
                animateG(fiveButton)
                addToNumber("5")
                updateDisplay()
                
                break
            case "6":
                console.log("6")
                animateG(sixButton)
                addToNumber("6")
                updateDisplay()
                
                break
            case "7":
                console.log("7")
                animateG(sevenButton)
                addToNumber("7")
                updateDisplay()
                
                break
            case "8":
                console.log("8")
                animateG(eightButton)
                addToNumber("8")
                updateDisplay()
                
                break
            case "9":
                console.log("9")
                animateG(nineButton)
                addToNumber("9")
                updateDisplay()
                
                break
            case "Backspace":
                console.log("delete")
                ac()
                updateDisplay()
                animateG(ACButton)
                break
            case "/":
                console.log("/")
                animateO(divisionButton)
                operatorPressed("/")
                break
            case "x":
                console.log("x")
                animateO(multiplicationButton)
                operatorPressed("x")
                break
            case "-":
                console.log("-")
                animateO(reductionButton)
                operatorPressed("-")
                break
            case "=":
                console.log("+")
                operatorPressed("+")
                animateO(additionButton)
                break
            case "Enter":
                console.log("=")
                animateO(equalButton)
                calculate()
                break
            }
    }
}

function animateG(element){
    element.classList.remove("gButton")
        element.classList.add("pgButton")
        console.log(element)
    setTimeout(()=>{
        element.classList.remove("pgButton")
        element.classList.add("gButton")
    }, 100)
}



function animateO(element){
        element.classList.remove("orangeButton")
        element.classList.add("pgButton")
        console.log(element)
    setTimeout(()=>{
        element.classList.remove("pgButton")
        element.classList.add("orangeButton")
    }, 100)
}


function checkForClick (){
    zeroButton.addEventListener("click", ()=>{
        animateG(zeroButton)
        addToNumber("0")
        updateDisplay()
    })
    oneButton.addEventListener("click", ()=>{
        animateG(oneButton)
        addToNumber("1")
        updateDisplay()
    })
    twoButton.addEventListener("click", ()=>{
        animateG(twoButton)
        addToNumber("2")
        updateDisplay()
    })
    threeButton.addEventListener("click", ()=>{
        animateG(threeButton)
        addToNumber("3")
        updateDisplay()
    })
    fourButton.addEventListener("click", ()=>{
        animateG(fourButton)
        addToNumber("4")
        updateDisplay()
    })
    fiveButton.addEventListener("click", ()=>{
        animateG(fiveButton)
        addToNumber("5")
        updateDisplay()
    })
    sixButton.addEventListener("click", ()=>{
        animateG(sixButton)
        addToNumber("6")
        updateDisplay()
    })
    sevenButton.addEventListener("click", ()=>{
        animateG(sevenButton)
        addToNumber("7")
        updateDisplay()
    })
    eightButton.addEventListener("click", ()=>{
        animateG(eightButton)
        addToNumber("8")
        updateDisplay()
    })
    nineButton.addEventListener("click", ()=>{
        animateG(nineButton)
        addToNumber("9")
        updateDisplay()
    })
    ACButton.addEventListener("click", ()=>{
        ac()
        updateDisplay()
        animateG(ACButton)
    })
    divisionButton.addEventListener("click", ()=>{
        animateO(divisionButton)
        operatorPressed("/")
    })
    multiplicationButton.addEventListener("click", ()=>{
        animateO(multiplicationButton)
        operatorPressed("x")
    })
    additionButton.addEventListener("click", ()=>{
        animateO(additionButton)
        operatorPressed("+")
    })
    reductionButton.addEventListener("click", ()=>{
        animateO(reductionButton)
        operatorPressed("-")
    })
    equalButton.addEventListener("click", ()=>{
        animateO(equalButton)
        calculate()
    })
}

function checkForPresses(){
    checkForClick()
    checkForKeyPress()
}

function add(a,b){
    result = a+b
}

function reduce(a,b){
    result = a-b
}

function multiply(a,b){
    result = a*b
}

function divide(a,b){
    result =  a/b
}

function ac(){
    result = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
    currentStage = 1
}

function addToNumber(number){
    if(currentStage == 1){
        if(firstNumber.length<17){
            firstNumber = firstNumber+number
            console.log(firstNumber)
        }
    }
    if(currentStage == 2){
        if(secondNumber.length<17){
            secondNumber = secondNumber+number
            console.log(secondNumber)
        }
    }
    if(currentStage == 3){
        result = ""
        firstNumber = ""
        secondNumber = ""
        operator = ""
        currentStage = 1
        firstNumber = firstNumber+number
        console.log(firstNumber)
    }
}

function calculate(){
    if(currentStage == 2){
        if(operator == "/"){
            divide(parseInt(firstNumber), parseInt(secondNumber))
        }else if(operator == "x"){
            multiply(parseInt(firstNumber), parseInt(secondNumber))
        }else if(operator == "-"){
            reduce(parseInt(firstNumber), parseInt(secondNumber))
        }else if(operator == "+"){
            add(parseInt(firstNumber), parseInt(secondNumber))
        }
        result = parseFloat(result.toFixed(1))
        currentStage = 3
        updateDisplay()
    }   
}

function operatorPressed(input){
    if(currentStage == 1){
        operator = input
        currentStage = 2
        updateDisplay()
    }
    if(currentStage == 2){
        
    }
}

function updateDisplay(){
    if(currentStage == 1){
        display.textContent = firstNumber;
    }
    if(currentStage == 2){
        display.textContent = secondNumber;
    }
    if(currentStage == 3){
        display.textContent = result
    }
}

//Function running

checkForPresses()
