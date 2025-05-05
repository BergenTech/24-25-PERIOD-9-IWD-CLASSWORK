// ------ DEMO: EVENT LISTENERS ------

// const clearBtn = document.querySelector('.clear-tasks')


// Method 2 - .onclick
// clearBtn.onclick = function() {
//     alert('Clear Items - Method i')
// }
// clearBtn.onclick = function() {
//     alert('Clear Items - Method 2')
// }
// Can only have 1


// Method 3 - .addEventListener
//Can Stack
// clearBtn.addEventListener('click', ()=>alert('Clear Items via event listeners'))
// clearBtn.addEventListener('click', ()=>console.log('Clear Items via event listeners 2'))

// Named function for reuse
// function logClearAction() {
// console.log('Clear Items (logClearAction Called)')
// }

// clearBtn.addEventListener('click', logClearAction)

// Remove Event Listener
// setTimeout(() => {
// clearBtn.removeEventListener('click', logClearAction)
// console.log('logClearAction Listener removed after 2 seconds')
// }, 2000)

// Simulate Click after 3 seconds
// setTimeout(() => {
//     console.log('Simulated Click After 3 seconds') 
//     clearBtn.click()
// }, 3000);

// ------ Actual Clear Function ------
// Select Button
const clearBtn = document.querySelector('.clear-tasks')

function clearTaskItems() {
    console.log('All Tasks Cleared!')
    const itemList = document.querySelector('.collection')
    // Clearing All At Once - Method 1
    // itemList.innerHTML = ''

    // Clearing Each Item Individually - 2
    itemList.querySelectorAll('li').forEach(item => 
        item.remove()
    )

    // Clearing One By One With While Loop- 3: Best Practice
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }

}

// Attach Event Listener To Button
clearBtn.addEventListener('click', clearTaskItems)