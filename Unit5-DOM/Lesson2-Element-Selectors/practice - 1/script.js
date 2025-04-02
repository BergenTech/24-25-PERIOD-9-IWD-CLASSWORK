// Select all <div> elements with class "box" and:
// change background color to "lightblue"
document.querySelectorAll(".box").forEach(box =>{
    box.style.backgroundColor = 'lightblue'
    box.style.color = 'white'
})


// Select <ul> element with ID "list" and 
//change: text color of all <li> children to "green"
document.querySelector("#list").querySelectorAll("li").forEach(item => item.style.color = "green")