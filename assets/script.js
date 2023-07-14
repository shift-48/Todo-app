const input = document.querySelector("input");
const form = document.querySelector("form");
let inputText = input.value;
let total = 0;
// document.querySelector('#night').style.display = 'none'

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

	todoItem.addEventListener("click", () => {
		let count = document.querySelector("#count");
		todoItem.classList.toggle("strikethrough");
		let hasStrike = todoItem.classList.contains("strikethrough");
		if (hasStrike) {
			total += 1;
			count.innerText = total;
		} else if (!hasStrike) {
			total -= 5;
			todoItem.classList.remove("strikethrough");
		}
	});
}

function daynNight() {
	let container = document.querySelector(".container");

	let dayBtn = document.querySelector("#day");
	dayBtn.addEventListener("click", () => {
		container.classList.add("day");
		container.classList.remove("night");
		console.log("hii");
		dayBtn.style.display = "none";
		nightbtn.style.display = "block";
		
	});
	let nightbtn = document.querySelector("#night");
	console.log(nightbtn);
	nightbtn.addEventListener("click", () => {
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
