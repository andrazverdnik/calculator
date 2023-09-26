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




function animateG(element){
    element.addEventListener("click", ()=>{
        element.classList.remove("gButton")
        element.classList.add("pgButton")
        console.log(element)
    setTimeout(()=>{
        element.classList.remove("pgButton")
        element.classList.add("gButton")
    }, 100)
    })
}

function animateO(element){
    element.addEventListener("click", ()=>{
        element.classList.remove("orangeButton")
        element.classList.add("pgButton")
        console.log(element)
    setTimeout(()=>{
        element.classList.remove("pgButton")
        element.classList.add("orangeButton")
    }, 100)
    })
}

function animateButtons(){
animateO(equalButton)
animateO(multiplicationButton)
animateO(reductionButton)
animateO(additionButton)
animateO(divisionButton)
animateG(zeroButton)
animateG(oneButton)
animateG(twoButton)
animateG(threeButton)
animateG(fourButton)
animateG(fiveButton)
animateG(sixButton)
animateG(sevenButton)
animateG(eightButton)
animateG(nineButton)
animateG(ACButton)
}


animateButtons()

