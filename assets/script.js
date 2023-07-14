const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.querySelector(".container");
let inputText = input.value;
let total = 0;
//for the todo item array
let words = [];
// document.querySelector('#night').style.display = 'none'


container.classList.add('night')
form.addEventListener("submit", (event) => {
	event.preventDefault();
	createDiv();
	input.value = "";
});

// function text() {
//
// 	console.log(inputText);

// }

function createDiv() {
	let todoItem = document.createElement("div");
	todoItem.classList.add("todoItem");
	todos.appendChild(todoItem);
	todoItem.setAttribute("draggable", "true");
	todoItem.setAttribute("id", "todoItem");
	console.log(todoItem);
	todoItem.classList.add("boxClass");
	todoItem.innerText = input.value;

	// let count = document.querySelector("#count");
	// todoItem.classList.toggle("strikethrough");
	// let hasStrike = todoItem.classList.contains("strikethrough");
	// if (hasStrike) {
	// 	total += 1;
	// 	count.innerText = total;
	// } else if (!hasStrike) {
	// 	total -= 5;
	// 	todoItem.classList.remove("strikethrough");
	// }

	words.push(todoItem.innerText);
	console.log(words);
	todoItem.addEventListener("click", () => {
		todoItem.classList.add("strikethrough");
		let hasStrike = todoItem.classList.contains("strikethrough");
		if (hasStrike) {
		}
	});
}

function daynNight() {
	// let container = document.querySelector(".container");
	let dayBtn = document.querySelector("#day");
	dayBtn.addEventListener("click", () => {
		container.style.color = "black";
		container.classList.add("day");
		container.classList.remove("night");
		// console.log("hii");
		dayBtn.style.display = "none";
		nightbtn.style.display = "block";
	});
	let nightbtn = document.querySelector("#night");
	// console.log(nightbtn);
	nightbtn.addEventListener("click", () => {
		container.style.color = "white";
		container.classList.add("night");
		container.classList.remove("day");
		dayBtn.style.display = "block";
		nightbtn.style.display = "none";
	});
}
// function night(params) {
// 	let nightbtn = document.querySelector("#night");
// 	nightbtn.addEventListener("click", () => {
// 		let container = document.querySelector(".container");
// 		container.classList.toggle("night");
// 		console.log("hii");
// 		nightbtn.style.display = "block";
// 		// dayBtn.style.display = 'block'
// 	});
// }
// night();
