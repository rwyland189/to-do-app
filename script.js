// select the UI elements
const taskInput = document.getElementById("new");
const addButton = document.getElementById("add");
const tasks = document.getElementById("tasks");

// listen for click --> invoke addNewItem function (function call is hoisted here)
addButton.addEventListener('click', addNewItem);

// make an array of objects - tasks are javascript objects
const items = [
    { value: "my item", complete: false }
];

// loop over each item to render them by creating <li> elements; go through each item in the array and do this function on each of them
for (let item of items) {
    createElementForTask(item);
}

// create new list items 
function createElementForTask(item) {
    // reference the template
    const template = document.getElementById("taskTemplate");
    // this is a cloned node assigned to newListItem - clone the content/markup of the template
    const newListItem = template.content.cloneNode(true);
}

function addNewItem() {
    console.log("Add new item!");
}