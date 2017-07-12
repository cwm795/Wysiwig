console.log("Hi");
//The global variables
let input = document.getElementById("input");
let cards = document.getElementsByClassName("cards");
let container = document.getElementById("container");
let bio = "";
let array = [];

//defining set array function
function setArr() {
    // parses the JSON file and defines the array
    array = JSON.parse(this.responseText);
    // calling output cards and passes the variable "array" into it
    outputCards(array);

};
// defines outputCards and expecting a parameter named peopleArray(array from line 14)
function outputCards(peopleArray) {
    // for loop that iterates over the peopleArray
    for (i = 0; i < peopleArray.length; i++) {
//targets the container in innerHTML and is setting it to concatenate the string template literal
        container.innerHTML += `<div class="cards"><person>
         <header>${peopleArray[i].name}  ${peopleArray[i].title}</header>
         <section><span class="bio">${peopleArray[i].bio}</span>  <img src="${peopleArray[i].image}"> </img></section>
         <footer>${peopleArray[i].lifespan.birth} & ${peopleArray[i].lifespan.death}</footer>
    	</person></div>`
    }
    // calls activateClickEvents
    activateClickEvents();
};



// defines the XHRFail function
function XHRFail() {

};
// creates myRequest object for the XHR request
var myRequest = new XMLHttpRequest();
//when the page loads, run setArr
myRequest.addEventListener("load", setArr);
// if the XHR fails, we get a error message
myRequest.addEventListener("error", XHRFail);
//initializes and defines a request
myRequest.open("GET", "items.json");
//sends the request
myRequest.send();


// defines the function activateClickEvents
function activateClickEvents() {
    // iterates over cards array
    for (var i = 0; i < cards.length; i++) {
        // for each card in the array it will add a click event listener
        cards[i].addEventListener("click", function(e) {
            // calls function clearInputEvent
            clearInputEvent()
            // calls function activateFocusEvent
            activateFocusEvent();
            // calls function deathCard
            deathCard()
            // calls function activateBorderEvent with e.currentTarget passed into it
            activateBorderEvent(e.currentTarget)

        });
    }
}
// defines function activateFocusEvent
function activateFocusEvent() {
    //places the focus on the input
    input.focus();
}

//defines function activeBorderElement and is expecting a parameter named clickedCard (from line 63, e.currentTarget)
function activateBorderEvent(clickedCard) {
    //adds the class "selectedCard" to clickedCard
    clickedCard.classList.add("selectedCard");
    // calls activateKeyEvent and passes clickedCard through it
    activateKeyEvent(clickedCard);
}
// defines function deathCard
function deathCard() {
    // for loop that iterates over cards array
    for (var i = 0; i < cards.length; i++) {
        // checking to see if each card contains class "selectedCard"
        if (cards[i].classList.contains("selectedCard")) {
            // if the condition is true, remove the class "selectedCard"
            cards[i].classList.remove("selectedCard")


        };
    }
}
//defines function activateKeyEvent  and is expecting a parameter named clickedcard (from line 79, clickedCard)
function activateKeyEvent(clickedCard) {
    //places eventlistener on input and listens for keyup
    input.addEventListener("keyup", function(e) {
        // checking to see if the keyup property keycode is equivalent to 13/enter
        if (e.keyCode === 13) {
            // if true execute clearInputEvent
            clearInputEvent()
            // otherwise if false
        } else {
            // call mirrorText function and pass clicked card through it
            mirrorText(clickedCard);
        }
    });
}

//defines function mirrorText and is expecting a parameter named clickedcard (from line 105, clickedCard)
function mirrorText(clickedCard) {
    // checks to see the class contains "selectedCard" for clickedCard
    if (clickedCard.classList.contains("selectedCard")) {
        // if true target everything between the bio class element and set it to equal the input.value (input field)
        clickedCard.querySelector(".bio").innerHTML = input.value;

    }
}
// defines the function clearInputEvent
function clearInputEvent() {
// sets the input to equal an empty string
    input.value = "";
}