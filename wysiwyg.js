console.log("Hi");

let input = document.getElementById("input");
let card = document.getElementById("");
let container = document.getElementById("container");
let bio = "";
let array = [];


function setArr() {
    array = JSON.parse(this.responseText);
    console.log(array)
    outputCards(array);

};

function outputCards(peopleArray) {
    for (i = 0; i < peopleArray.length; i++) {

        console.log(peopleArray[i].title)
        container.innerHTML += `<person>
         <header>${peopleArray[i].name}  ${peopleArray[i].title}</header>
         <section>${peopleArray[i].bio}  <img src="${peopleArray[i].image}"> </img></section>
         <footer>${peopleArray[i].lifespan}</footer>
    	</person>`
    }
};





function XHRFail() {

};

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", setArr);
myRequest.addEventListener("error", XHRFail);

myRequest.open("GET", "items.json");
// console.log("data", myRequest);
myRequest.send();