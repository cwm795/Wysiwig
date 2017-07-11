console.log("Hi");

let input = document.getElementById("input");
let cards = document.getElementsByClassName("cards");
let container = document.getElementById("container");
let bio = "";
let array = [];


function setArr() {
    array = JSON.parse(this.responseText);
    outputCards(array);

};

function outputCards(peopleArray) {
    for (i = 0; i < peopleArray.length; i++) {

        container.innerHTML += `<div class="cards"><person>
         <header>${peopleArray[i].name}  ${peopleArray[i].title}</header>
         <section><span class="bio">${peopleArray[i].bio}</span>  <img src="${peopleArray[i].image}"> </img></section>
         <footer>${peopleArray[i].lifespan.birth} & ${peopleArray[i].lifespan.death}</footer>
    	</person></div>`
    }
    activateClickEvents();
};





function XHRFail() {

};

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", setArr);
myRequest.addEventListener("error", XHRFail);

myRequest.open("GET", "items.json");
// console.log("data", myRequest);
myRequest.send();



function activateClickEvents() {
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function(e) {
            clearInputEvent()
            activateFocusEvent();
            deathCard()
            activateBorderEvent(e.currentTarget)

        });
    }
}

function activateFocusEvent() {
    input.focus();
}


function activateBorderEvent(clickedCard) {
    console.log("cards", clickedCard);
    clickedCard.classList.add("selectedCard");
    activateKeyEvent(clickedCard);
}

function deathCard() {
    console.log("cards", cards)
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains("selectedCard")) {
            cards[i].classList.remove("selectedCard")


        };
    }
}

function activateKeyEvent(clickedCard) {
    // console.log("activateKeyEvent", clickedCard)
    input.addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            clearInputEvent()
        } else {

            mirrorText(clickedCard);
        }
    });
}


function mirrorText(clickedCard) {
    console.log("input", input.value);
    if (clickedCard.classList.contains("selectedCard")) {
        clickedCard.querySelector(".bio").innerHTML = input.value;

    }
}

function clearInputEvent() {

    input.value = "";
}