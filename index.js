let inputslider = document.querySelector("#slider");
// console.log(inputslider);
const lengthDisplay = document.querySelector("#data-length-display");
// console.log(dataLength);
const passwordDisplay = document.querySelector(".data-password");
const dataCopySection = document.querySelector(".data-copy-section");
const dataCopyMessage = document.querySelector(".data-copy-message");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const Symbols = document.querySelector("#Symbols");
const Numbers = document.querySelector("#Numbers");
const dataIndicator = document.querySelector(".data-indicator");
const passwordGenerator = document.querySelector(".generate-password");
// const allcheckbox = document.querySelectorall("input[type=checkbox]");

let password = "";
let passwordLength = 1;
let checkbox = 1;
let symbol = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

// set strength circle colour is

// set password -length
function handleslider() {
    slider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    // console.log(passwordLength);
}
handleslider();

function setIndicator(color) {
  dataIndicator.style.backgroundColor = color;
//   console.log(color);
}


function randomValue(min, max) {
  Math.floor(Math.random() * (max - min) + 1);
}

function generateRandomnumber() {
  return randomValue(0, 9);
}

function generateLowercase() {
  return String.randomValue(97, 123);
}
function generateuppercase() {
  return String.randomValue(65, 91);
}
function generatesymbol() {
  const randomsymbol = randomValue(0, symbol.length);
  return symbol.charAt(randomsymbol);
}
function strengthPassword() {
    let hasupper=false;
    let haslower=false;
    let hasnum=false;
    let hassym=false;
    if (uppercase.checked) hasupper=true;
    if (lowercase.checked) hasupper=true;
    if (Symbols.checked ) hasupper=true;
    if (Numbers.checked) hasupper=true;

    if (hasupper && haslower && (hasnum || hassym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (haslower || hasupper) &&
        (hasnum || hassym) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
    
}

function name(params) {
    
}