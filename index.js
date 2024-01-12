let firstnumberelement = document.getElementById("firstNumber");
let secondnumberelement = document.getElementById("secondNumber");
let userinputelement = document.getElementById("userInput");
let gameresultelement = document.getElementById("gameresult");

let successMessage = "congratulations! You got it right.";
let tryagainMessage = "Please Try Again!";

function restartbutton() {
    let firstrandomnumber = Math.random() * 100;
    let secondrandomnumber = Math.random() * 100;

    firstnumberelement.textContent = Math.ceil(firstrandomnumber);
    secondnumberelement.textContent = Math.ceil(secondrandomnumber);

    gameresultelement.textContent = "";
    userinputelement.value = "";
}

restartbutton();

function checkbutton() {
    let firstrandominteger = parseInt(firstnumberelement.textContent);
    let secondrandominteger = parseInt(secondnumberelement.textContent);
    let userenterdesum = parseInt(userinputelement.value);

    let sumoftworandominteger = firstrandominteger + secondrandominteger;

    if (userenterdesum === sumoftworandominteger) {
        gameresultelement.textContent = successMessage;
        gameresultelement.style.backgroundColor = "#028a0f";
    } else {
        gameresultelement.textContent = tryagainMessage;
        gameresultelement.style.backgroundColor = "#1e217c"
    }
}