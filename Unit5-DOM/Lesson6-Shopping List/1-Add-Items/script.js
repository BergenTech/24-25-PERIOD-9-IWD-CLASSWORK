// DOM ELEMENTS
const itemForm = document.getElementById("item-form")
const itemInput = document.querySelector("#item-input")
const itemList = document.querySelector("#item-list")

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
  // const li = document.createElement('li')
  // li.appendChild(document.createTextNode(newItem))
  // const button = document.createElement('button')
  // button.className = 'remove-item btn-link text-red'
  // const icon = document.createElement('i')
  // icon.className = 'fa-solid fa-xmark'
  // button.appendChild(icon)
  // li.appendChild(button)
  // itemList.appendChild(li)
  // itemInput.value = ""

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


//Event Listener
itemForm.addEventListener('submit', addItem)