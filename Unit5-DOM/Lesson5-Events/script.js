// ------DEMO : Event Listeners------
//select the clear button
// const clearBtn = document.querySelector('.clear-tasks')

//Method 2 - Using onclick
// clearBtn.onclick = function(){
//   alert("Clear Items - Method 1 ")
// }
// clearBtn.onclick = function(){
//   alert("Clear Items - Method 2 ")
// }

// Method 3 - Using addEventListener
// clearBtn.addEventListener('click',()=>alert("Clear Items via Event Listener"))

// clearBtn.addEventListener('click',()=>console.log("Clear Items via Event Listener 2"))

//Named function for reuse
// function logClearAction(){
//   console.log("Clear Items (logClearAction called)")
// }

// clearBtn.addEventListener('click', logClearAction)

//Remove Event Listener
// setTimeout(()=> {
//   clearBtn.removeEventListener('click', logClearAction)
//   console.log("logClearAction listener removed after 2 seconds")
// }, 2000)

//Simulate a click after 3 seconds
// setTimeout(()=>{
//   console.log("Simulated click after 3s")
//   clearBtn.click()
// }, 3000)


//-------ACTUAL CLEAR FUNCTION --------
// select the clear button
const clearBtn =  document.querySelector(".clear-tasks")

function clearTaskItems(){
  const itemList = document.querySelector('ul')
  // //Method 1 - Clear all at once
  // itemList.innerHTML = ""
  // console.log("All tasks cleared!")

  // //Method 2 - Remove each item individually
  // itemList.querySelectorAll('li').forEach(item => item.remove())

  //Method 3 - Best Practice remove one by one using while loop
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild)
  }
}

//Attach event listener to the clear tasks button
clearBtn.addEventListener('click', clearTaskItems)