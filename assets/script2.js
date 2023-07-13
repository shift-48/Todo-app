const form = document.querySelector("form");
const input = document.querySelector("input");
const todos = document.querySelector("#todos");
form.addEventListener("submit", addTodo);

function addTodo(event) {
	event.preventDefault();
	console.log("hii");

	//get input value
	let inputValue = input.value;

	//create a new div for the todo item
	let todoItem = document.createElement("div");
	//add styling
	todoItem.classList.add("todoclass");

	//add input to todo div
	todoItem.appendChild(document.createTextNode(inputValue));

	//add todo item to the main todos
	todos.appendChild(todoItem);
	inputValue = "";
}
