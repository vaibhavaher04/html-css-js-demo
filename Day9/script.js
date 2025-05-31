
const myBody = document.getElementsByTagName("body")[0];
myBody.style.margin = "0px";
myBody.style.padding = "0px";

const bodyContent = '<div id="myDiv">Hello Vaibhav</div>';
myBody.insertAdjacentHTML('beforeend', bodyContent);

const myDiv = document.getElementById("myDiv");
myDiv.style.color = "red";
myDiv.style.fontSize = "30px";
myDiv.style.border = "2px solid black";
myDiv.style.padding = "10px";

// Button
const plusButton = '<button id="plusButton">+</button>';
const minusButton = '<button id="minusButton">-</button>';
myBody.insertAdjacentHTML('beforeend', plusButton);
myBody.insertAdjacentHTML('beforeend', minusButton);

const plusButtonElement = document.getElementById("plusButton");
const minusButtonElement = document.getElementById("minusButton");

plusButtonElement.addEventListener("click", plusButtonClicked);
minusButtonElement.addEventListener("click", minusButtonClicked);

let count = 30;

function plusButtonClicked() {
    count++;
    myDiv.style.fontSize = count + "px";
}

function minusButtonClicked() {
    count--;
    myDiv.style.fontSize = count + "px";
}

