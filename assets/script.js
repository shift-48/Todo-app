const input = document.querySelector("input");
const form = document.querySelector("form");
let inputText = input.value;


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
	todoItem.classList.add("todoItem");
	todos.appendChild(todoItem);
    todoItem.setAttribute('draggable',"true");
    console.log(todoItem)
    todoItem.classList.add('boxClass')
    todoItem.innerText = input.value;
    if(inputText == null){
        console.log('hii')
    }

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
