

const button = document.querySelector("button");

button.addEventListener("click", updateName);



function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}


const button1 = document.getElementById("button1");

button1.addEventListener("click", updateAge);


function updateAge() {
  const age = prompt("Enter a new age");
  button1.textContent = `Age of Player 1: ${age}`;
}


const para= document.querySelector('p');


para.addEventListener("click", updateText);


function updateText() {
  const txt = prompt("Enter a new text");
  para.textContent = `${txt}`;
}
