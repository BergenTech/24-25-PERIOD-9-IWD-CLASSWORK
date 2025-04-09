// Select the <h2> element with ID "heading" and:
const heading = document.getElementById("heading")

// change its text content as 'Updated Heading'
// heading.textContent = "Updated Heading"

function updateText(){
    //Get the new text from the Field
    let newText = document.querySelector("#textInput").value
    document.getElementById("heading").textContent = newText
}
// Select all <p> elements inside <div> with class "content" and:
let elems = document.querySelectorAll(".content p")
// change: font color to red, fontWeight as bold, font size to 18px
elems.forEach(p => {
    p.style.color = "red";
    p.style.fontWeight = "bold";
    p.style.fontSize = "18px";
    p.style.backgroundColor = "yellow";
})
