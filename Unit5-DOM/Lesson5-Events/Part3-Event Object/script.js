// 📖 Reference: Event Object Property Glossary
/*
- target: Element that triggered the event
- currentTarget: Element that the listener is attached to
- type: Type of the event (e.g., 'click', 'drag')
- timeStamp: Time the event occurred
- clientX / clientY: Mouse position relative to the window
- offsetX / offsetY: Mouse position relative to the element
- pageX / pageY: Mouse position relative to the page
- screenX / screenY: Mouse position relative to the screen (not used here)
*/

/* ================================================*/
// Part 1: Selecting Elements and Basic Event Listener
/* ================================================*/
// Select the logo image element to attach event listeners
const logo = document.querySelector("img")

/* ================================================*/
// Part 2: Handling Click Events on an Element
/* ================================================*/
// Function to handle click events on the logo
function onClick(e){
  // Logs event properties for inspection
  // Element that triggered the event
  console.log(`Target: ${e.target}`)
  //Element that the listener is attached to
  console.log(`Current Target: ${e.currentTarget}`)
  //Type of the event
  console.log(`Event Type: ${e.type}`)
  //When the event occured (in ms)
  console.log(`Timestamp: ${e.timeStamp}`)

  //Mouse position relative to the browser window
  console.log(`Mouse X (ClientX): ${e.clientX}`)
  console.log(`Mouse Y (ClientY): ${e.clientY}`)

  //Mouse position relative to the target element
  console.log(`Offset X: ${e.offsetX}`)
  console.log(`Offset Y: ${e.offsetY}`)

  //Mouse position relative to whole page
  console.log(`Page X: ${e.pageX}`)
  console.log(`Page Y: ${e.pageY}`)

}

// Add a click event listener to the logo image
logo.addEventListener("click", onClick)


/* ================================================*/
// Part 3: Detecting Click Events on the Whole Body
/* ================================================*/
// Add event listener to detect any click on the entire body
// document.body.addEventListener('click', function(e){
//   //Exact element clicked
//   console.log(`Element Clicked:${e.target}`)
//   //Event listener is attached to
//   console.log(`Current Target:${e.currentTarget}`)
// })

/* ================================================*/
//Part 4: Preventing Default Behavior of a Button
/* ================================================*/
// Prevents the default action of the button (e.g., form submission)
document.querySelector(".btn").addEventListener('click',function(e){
  e.preventDefault();
  console.log("Add button is clicked!")
})

/* ================================================*/
//Part 5: Tracking Mouse Movement During a Drag Event
/* ================================================*/
// Function to update the title with current mouse position during drag
function onDrag(e){
  const title = document.querySelector("h1")
  title.textContent = `X: ${e.clientX} Y: ${e.clientY}`
}
// Add drag event listener to the logo image
logo.addEventListener("drag", onDrag)
