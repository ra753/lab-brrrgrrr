// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var money = [20, 0, 0, 0, 0, 0];

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let addPatty = document.getElementById("patty");
  //you can also use getElementById
  if (state.Patty) {
    money[2] = 80;
    addPatty.style.display = "inherit";
  } else {
    addPatty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let addCheese = document.getElementById("cheese");
  if(state.Cheese) {
    addCheese.style.display = "inherit";

  } 
  else
    addCheese.style.display = "none";
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let addTomatoes = document.getElementById("tomato");
  if(state.Tomatoes) {
    addTomatoes.style.display = "inherit"
  }
  else  
    addTomatoes.style.display = "none"
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let addOnion = document.getElementById("onion");
  if(state.Onions) {
    addOnion.style.display = "inherit";
  }
  else  
    addOnion.style.display = "none";
}


function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let addLettuce = document.getElementById("lettuce");
  if(state.Lettuce) {
    addLettuce.style.display = "inherit";
  }
  else
    addLettuce.style.display = "none";
}


document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
}

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
}

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
var total = money.reduce((acc, val) => acc+val);
console.log(total);
document.getElementById("price-details").innerHTML = total;
