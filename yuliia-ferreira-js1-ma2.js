// question 1
// create a function expression by assigning an anonmyous function
const myFunctionExpression = function () {
    console.log("Yuliia");
}
// call the function
myFunctionExpression();

// question 2
// select the button in the HTML by its class
const buttonClass = document.querySelector(".btn");
// declare a function and add a click event listener
function callClick() {
    console.log("I was clicked");
};
buttonClass.addEventListener("click", callClick);

// question 3
// select the input in the HTML by its id
const inputId = document.querySelector("#firstName");
// declare a function and pass in the addEvenListener method
function keyWasPressed() {
    console.log("First Name");
};
// call the addEvenListener 
inputId.addEventListener("keydown", keyWasPressed);

// question 4
// select the button in the HTML by its tag
const tagButton = document.querySelector("button");
// declare a function that remove the class from the button
function addClass(event) {
    event.target.classList.add("hover");
}
// add a mouseover event listener
tagButton.addEventListener("mouseover", addClass);

// question 5
// select the button in the HTML by its data attribute
const dataAnimal = document.querySelector("[data-animal='dog']");
for (let index = 0; index < dataAnimal.length; index++) {
    dataAnimal[index].addEventListener("click", removeClass);
}
// declare a function that remove the class from the button
function removeClass(event) {
    event.target.classList.remove("hover");
}
// add a mouseout event listener
document.addEventListener("mouseout", removeClass);

// question 6
//  seletc all li tags
const allLiTags = document.querySelectorAll("li");
// loop throught and add a mouseover event listener to each tag
for (let index = 0; index < allLiTags.length; index++) {
    allLiTags[index].addEventListener("mouseover", cursorMovedOver);
}
// declare a function that log the value of the data attribute
function cursorMovedOver() {
    console.log(allLiTags[index]);
}

// question 7
// convert the if-else-if statement to a switch
const animal = "cow";

switch (animal) {
    case "cat":
        console.log("Meow");  
        break;
    case "cow":
        console.log("Moo");  
        break;
    case "bird":
        console.log("Tweet");  
        break;  
        
    default:
        console.log("Harrumph");
}

// question 8
const sheep = ["Malcolm", "Anders", "Marie"];
// convert the for loop to a forEach loop
sheep.forEach(function(sheeps) {
    console.log(sheeps);
});

// question 9
// create a timer that logs the word hello every half a second 6 times
function sayHello() {
    console.log("hello");
    if(counter === 5) {
        clearInterval(intervalId);
    }
    counter++;
}
let counter = 0;
const intervalId = setInterval(sayHello, 500);

// question 10
// select the div
const container = document.querySelector("div");
// update the div's text
container.innerHTML = `<div class="container">Text updated</div>`;

function changeHTML() {
    setTimeout(function() {
        console.log("Text updated");
        ;
    }, 2000);
}
