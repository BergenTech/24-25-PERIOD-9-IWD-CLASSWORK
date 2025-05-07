// DOM ELEMENTS
const itemForm = document.getElementById("item-form")
const itemInput = document.querySelector("#item-input")
const itemList = document.querySelector("#item-list")
const clearBtn = document.getElementById("clear")

//Function to add a new item
function addItem(e){
  e.preventDefault() // Stop the form from refreshing
  // console.log("The form works fine!")
  //Step 1 - Get the input value and trim it
  const newItem = itemInput.value.trim()
  // console.log(newItem)
  
  //Step 2 - Warn the user if input text is empty
  if(newItem === ""){
    alert("Please enter an item!")
    return  //Stop the process
  }

  //Step 3 - Create a new list item
  //Alternative way
  const li = document.createElement('li')
  li.innerHTML = `
         ${newItem}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
  `
  itemList.appendChild(li)
  itemInput.value = ""
}

//Function to remove an item
function removeItem(e){
  //check if the click element is the X button or it's icon
  if(e.target.tagName ==='I' && e.target.classList.contains('fa-xmark')){
    // console.log("Clicked on an X!")
    //confirm before deleting
    if(confirm("Are you sure you want to remove this item?")){
      //Get the parent li and remove it
      e.target.parentElement.parentElement.remove()
    }
  }
}

function clearItems(){
  //Confirm before clear all items
  if(confirm('Are you sure you want to clear all items?')){
    //first way
    itemList.innerHTML = ""
    
    //second way - faster and more efficient
    while(itemList.firstChild){
      itemList.removeChild(itemList.firstChild)
    }
  }
}

//Function to Initialize the application
function initApp(){
  //Add item event
  itemForm.addEventListener('submit', addItem)

  //Remove item event
  itemList.addEventListener('click', removeItem)

  //Clear all items event
  clearBtn.addEventListener('click', clearItems)

}

//Call the initApp
initApp()
