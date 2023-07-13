const input = document.querySelector("input");
const todoIems = document.querySelector("#todoIems");
const btn = document.querySelector("button");
const form = document.querySelector("form");
let inputText = input.value;
let total = 0 ;


form.addEventListener("submit", (event) => {
	event.preventDefault();
	createDiv();
    input.value= '';
});

// function text() {
// 	
// 	console.log(inputText);
	
// }

function createDiv() {
	let todoItem = document.createElement("div");
	todoItem.classList.add("todoclass");
	todos.appendChild(todoItem);
    todoItem.innerText = input.value;

    todoItem.addEventListener('click',()=>{
       
        let count = document.querySelector('#count');
        todoItem.classList.toggle('strikethrough');
        let hasStrike = todoItem.classList.contains("strikethrough");
        if(hasStrike){
            total+=1;
            count.innerText = total;
            
        }else if(!hasStrike){
            total -=5;
            todoItem.classList.remove('strikethrough')
        }

    })
}
