//Section 1 - Initial Script Execution
console.log("Run me!")

//Section 2 - load events
//Method 1 - window.onload property (traditional)
window.onload = function(){
    document.querySelector("h1").textContent = "Hello BT!"
    console.log("Windows loaded(onload property)")
}

//Method 2 - addEventListener
//2-1 load event
window.addEventListener('load', () => {
    console.log(" Page Loaded!")
})

//2-2 - DOMContentLoaded event - fires earlier than load
window.addEventListener('DOMContentLoaded', () => {
    console.log(" DOM Loaded!")
})

//Section 3 - resize event
window.addEventListener("resize", ()=>{
    const newSize = `Resized to ${window.innerWidth} x ${window.innerHeight}`
    document.querySelector("h1").innerText = newSize
    console.log("newSize")
})

//Section 4 - scroll event
window.addEventListener("scroll", function(){
    document.querySelector("#scroll-heading").textContent = `Scrolled:${window.scrollX} x ${window.scrollY}`
    if(window.scrollY > 75){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
})