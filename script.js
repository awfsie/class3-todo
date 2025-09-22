// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    "sour dough", "eggs", "milk", "strawberries ice cream"
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
const itemInput = document.getElementById('item-input');
const sortBtn = document.getElementById('sort-button');
const clearBtn = document.getElementById('clear-button');
// you can use these variables in your code below
// add more variables below
const list = document.getElementById('list');



// 3. Write a function to display all items in the #list element
function updateList() {
    list.innerHTML = "";
    for (let i = 0; i < todoItems.length; i++) {
        const li = document.createElement('li');
        li.textContent = todoItems[i];
        list.appendChild(li);
    }
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    const newItem = itemInput.value.trim();
    if (newItem !== "") {
        todoItems.push(newItem);
        itemInput.value = "";
        updateList();
    }
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort();
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    todoItems = [];
    updateList();
});