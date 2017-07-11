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
         <section>${peopleArray[i].bio}  <img src="${peopleArray[i].image}"> </img></section>
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
        cards[i].addEventListener("click", function(e){
            activateFocusEvent();
            activateBorderEvent(e.currentTarget)

        });
    }
}
function activateFocusEvent() {
input.focus();
}


function activateBorderEvent(clickedCard) {
    console.log("cards", clickedCard);

}



