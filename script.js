// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    // add more items here
    'grapes', 'bread', 'tea', 'milk'
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');
// add more variables below
const list = document.getElementById('list');
const textInput = document.getElementById('text');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');



// 3. Write a function to display all items in the #list element
function updateList() {
    list.innerHTML = '';

    // go through each item in todoItems
    for (let i = 0; i < todoItems.length; i++) {
        addItem(todoItems[i]);
    }
}

updateList();

function addItem(newItem) {
    // create a <li> tag for each item
    const listItem = document.createElement('li');
    listItem.innerText = newItem;

    // add that <li> to the <ul id="list">
    list.appendChild(listItem);
}



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {
    const newItem = textInput.value;
    todoItems.push(newItem);
    updateList();

    textInput.value = '';
});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
    todoItems.sort();
    updateList();
});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
    // list.innerHTML = '';
    todoItems = [];
    updateList();
});