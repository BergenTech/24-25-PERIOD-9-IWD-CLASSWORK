// // get the list by its ID
// const list = document.querySelector('#item-list')
// //create a new list item
// const li = document.createElement('li')
// //set the text content for the new list item
// li.textContent = 'Bread'
// //create a remove button
// const removeBtn = document.createElement('button')
// removeBtn.className = "remove-item btn-link text-red"
// removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
// //append remove button to the list item
// li.appendChild(removeBtn)
// //append li to ul
// list.appendChild(li)

//Function to create and append a new list item
function addItem(itemID, text) {
    //GEt the list by its ID
    const list = document.getElementById(itemID)
    //create a new list item
    const li = document.createElement('li')
    //set the text content
    li.textContent = text
    //create a remove button
    const removeBtn = document.createElement('button')
    removeBtn.className = "remove-item btn-link text-red"
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    //append remove button to the list item
    li.appendChild(removeBtn)
    //append li to ul
    list.appendChild(li)
}

//use examples
addItem('item-list', 'Bread')
addItem('item-list', 'Cheese')