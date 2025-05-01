// =======================================================
// Section 1: Input Event
// =======================================================
const inputDemo = document.querySelector('#inputDemo')
const inputOutput = document.querySelector('#inputOutput')

inputDemo.addEventListener('input', function(e){
    inputOutput.textContent = `Current Value: ${e.target.value}`

})
// =======================================================
// Section 2: Change Event
// =======================================================
// const changeDemo = document.querySelector("#changeDemo")
// const changeOutput = document.querySelector("#changeOutput")
// changeDemo.addEventListener('change', function(e){
//     changeOutput.textContent = `Value committed: ${e.target.value}`
// })

document.querySelector("#changeDemo").addEventListener('change', function(e){
    document.querySelector("#changeOutput").textContent = `Value committed: ${e.target.value}`
})

document.querySelector("#selectDemo").addEventListener("change", function(e){
    document.querySelector("#selectOutput").textContent = `Selected option: ${e.target.value}`
})
// =======================================================
// Section 3: Focus and Blur Events
// =======================================================
// Basic focus and blur events
document.getElementById('focusDemo').addEventListener("focus", function(e){
    document.querySelector("#focusOutput").textContent = `Input Field is now focused!`
    document.getElementById('focusDemo').style.color = 'white'
    document.getElementById('focusDemo').style.backgroundColor = 'black'
})
document.getElementById('focusDemo').addEventListener("blur", function(e){
    document.querySelector("#focusOutput").textContent = `Input Field is now focused!`
    document.getElementById('focusDemo').style.color = 'black'
    document.getElementById('focusDemo').style.backgroundColor = 'yellow'
})

//Form validation with blur event
const usernameInput = document.querySelector("#usernameInput")
const usernameError = document.querySelector("#usernameError")
usernameInput.addEventListener('blur', function(e){
    if(this.value.length < 4 && this.value.length > 0){
        usernameInput.classList.add("invalid")
        usernameInput.classList.remove("valid")

    }
})


