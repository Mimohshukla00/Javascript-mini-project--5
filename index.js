// Get HTML elements
const inputslider = document.querySelector("#slider");
const dataLength = document.querySelector("#data-length-display");
const passwordDisplay = document.querySelector(".data-password");
const dataCopySection = document.querySelector(".data-copy-section");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const Numbers = document.querySelector("#Numbers");
const Symbols = document.querySelector("#Symbols");
const dataIndicator = document.querySelector(".data-indicator");
const allcheckbox = document.querySelectorAll(".allcheck");

let passwordLength = 1;

// Function to update slider value display
function handleslider() {
    inputslider.value = passwordLength;
    dataLength.innerText = passwordLength;
}

// Function to set strength indicator color
function setIndicator(color) {
    dataIndicator.style.backgroundColor = color;
}

// Function to generate a random integer within a range
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random number
function generateRandomNumber() {
    return randomValue(0, 9).toString();
}

// Function to generate a random lowercase letter
function generateRandomLowercase() {
    return String.fromCharCode(randomValue(97, 122));
}

// Function to generate a random uppercase letter
function generateRandomUppercase() {
    return String.fromCharCode(randomValue(65, 90));
}

// Function to generate a random symbol
function generateRandomSymbol() {
    const symbols = "~`!@#$%^&*()_-+={[}]|:;<,>.?";
    return symbols[randomValue(0, symbols.length - 1)];
}

// Function to evaluate password strength
function strengthPassword() {
    let hasupper = uppercase.checked;
    let haslower = lowercase.checked;
    let hasnum = Numbers.checked;
    let hassym = Symbols.checked;

    if (hasupper && haslower && (hasnum || hassym) && passwordLength >= 8) {
        setIndicator("#0f0"); // Strong
    } else if ((haslower || hasupper) && (hasnum || hassym) && passwordLength >= 6) {
        setIndicator("#ff0"); // Medium
    } else {
        setIndicator("#f00"); // Weak
    }
}

// Event listener for slider input
inputslider.addEventListener("input", function (e) {
    passwordLength = e.target.value;
    handleslider();
});

// Event listener for copy button
dataCopySection.addEventListener("click", function () {
    if (passwordDisplay.value) {
        navigator.clipboard.writeText(passwordDisplay.value)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch((error) => {
                console.error("Failed to copy password:", error);
            });
    }
});

// Event listener for generate button
document.querySelector('.generateBtn').addEventListener('click', () => {
    let password = "";
    let arrayOfCheckedFunction = [];

    if (uppercase.checked) arrayOfCheckedFunction.push(generateRandomUppercase);
    if (lowercase.checked) arrayOfCheckedFunction.push(generateRandomLowercase);
    if (Numbers.checked) arrayOfCheckedFunction.push(generateRandomNumber);
    if (Symbols.checked) arrayOfCheckedFunction.push(generateRandomSymbol);

    // Compulsory Addition
    for (let i = 0; i < arrayOfCheckedFunction.length; i++) {
        password += arrayOfCheckedFunction[i]();
    }

    // Additional addition
    for (let i = 0; i < passwordLength - arrayOfCheckedFunction.length; i++) {
        let randIndex = randomValue(0, arrayOfCheckedFunction.length - 1);
        password += arrayOfCheckedFunction[randIndex]();
    }

    // Shuffle Password 
    password = shuffle(Array.from(password));
    passwordDisplay.value = password;
    strengthPassword();
});

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.join('');
}
