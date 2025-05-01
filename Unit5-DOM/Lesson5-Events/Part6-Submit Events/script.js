// Section 4 - Submit Event
const formDemo = document.querySelector("#formDemo")
const submitOutput = document.getElementById("submitOutput")
formDemo.addEventListener("submit", function(e){
    e.preventDefault()
    submitOutput.textContent = "Form Submitted!" // in real app, data would be sent to the server
    
    //Reset the form after 3 secs
    setTimeout(() => {
        formDemo.reset()
        submitOutput.textContent = 'Form has been reset. Try submitting again.'
    },3000)
})


// Section 5 - Select and Copy Events
const selectDemo = document.querySelector("#selectDemo")
const selectOutput = document.querySelector("#selectOutput")

//selecting
selectDemo.addEventListener('select', function(){
    const selectedText = this.value.substring(this.selectionStart, this.selectionEnd)
    selectOutput.textContent = `Selected Text: ${selectedText}`
})

//copying
selectDemo.addEventListener("copy", function(){
    selectOutput.textContent = "Text copied to the clipboard!"
    // Original message restores after 2 secs
    setTimeout(() =>{
        const selectedText = this.value.substring(this.selectionStart, this.selectionEnd)
        selectOutput.textContent = `Selected Text: ${selectedText}`
    }, 2000)
})