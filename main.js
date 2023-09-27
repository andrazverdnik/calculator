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

//Variables


//Function definitions

function checkForKeyPress (){
    window.onkeydown = (keyPressed)=>{
        switch(keyPressed.key){
            case "0":
                console.log("0")
                animateG(zeroButton)
                break
            case "1":
                console.log("1")
                animateG(oneButton)
                break
            case "2":
                console.log("2")
                animateG(twoButton)
                break
            case "3":
                console.log("3")
                animateG(threeButton)
                break
            case "4":
                console.log("4")
                animateG(fourButton)
                break
            case "5":
                console.log("5")
                animateG(fiveButton)
                break
            case "6":
                console.log("6")
                animateG(sixButton)
                break
            case "7":
                console.log("7")
                animateG(sevenButton)
                break
            case "8":
                console.log("8")
                animateG(eightButton)
                break
            case "9":
                console.log("9")
                animateG(nineButton)
                break
            case "Backspace":
                console.log("delete")
                animateG(ACButton)
                break
            case "/":
                console.log("/")
                animateO(divisionButton)
                break
            case "x":
                console.log("x")
                animateO(multiplicationButton)
                break
            case "-":
                console.log("-")
                animateO(reductionButton)
                break
            case "=":
                console.log("+")
                animateO(additionButton)
                break
            case "Enter":
                console.log("=")
                animateO(equalButton)
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
    })
    oneButton.addEventListener("click", ()=>{
        animateG(oneButton)
    })
    twoButton.addEventListener("click", ()=>{
        animateG(twoButton)
    })
    threeButton.addEventListener("click", ()=>{
        animateG(threeButton)
    })
    fourButton.addEventListener("click", ()=>{
        animateG(fourButton)
    })
    fiveButton.addEventListener("click", ()=>{
        animateG(fiveButton)
    })
    sixButton.addEventListener("click", ()=>{
        animateG(sixButton)
    })
    sevenButton.addEventListener("click", ()=>{
        animateG(sevenButton)
    })
    eightButton.addEventListener("click", ()=>{
        animateG(eightButton)
    })
    nineButton.addEventListener("click", ()=>{
        animateG(nineButton)
    })
    ACButton.addEventListener("click", ()=>{
        animateG(ACButton)
    })
    divisionButton.addEventListener("click", ()=>{
        animateO(divisionButton)
    })
    multiplicationButton.addEventListener("click", ()=>{
        animateO(multiplicationButton)
    })
    additionButton.addEventListener("click", ()=>{
        animateO(additionButton)
    })
    reductionButton.addEventListener("click", ()=>{
        animateO(reductionButton)
    })
    equalButton.addEventListener("click", ()=>{
        animateO(equalButton)
    })
}

function animateButtons(){
    checkForClick()
    checkForKeyPress()
}



//Function running

animateButtons()
checkForKeyPress()
