const inputslider = document.querySelector(".slider");
const dataLength = document.querySelector("[data-lengthnumber]");
const passwordDisplay = document.querySelector(".data-password");
const dataCopySection = document.querySelector(".data-copy-section");
const dataCopyMessage = document.querySelector(".data-copy-message");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const Symbols = document.querySelector("#Symbols");
const Numbers = document.querySelector("#Numbers");
const dataIndicator = document.querySelector(".data-indicator");
const passwordGenerator = document.querySelector(".generate-password");
const allcheckbox = document.querySelectorall("input[type=checkbox]");

let password = "";
let passwordLength = 20;
let checkbox = 1;

// set strength circle colour is
