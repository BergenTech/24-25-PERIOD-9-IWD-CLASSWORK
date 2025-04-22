const logo = document.querySelector('img')
//Event Functions
const onClick = () => console.log("Click Event")

const onDoubleClick = () =>{
    const pageStyle = document.body.style
    if(pageStyle.backgroundColor !== 'purple'){
        pageStyle.backgroundColor = 'purple'
        pageStyle.color = 'white'
    }else {
        pageStyle.backgroundColor = 'white'
        pageStyle.color = 'black'
    }
}

const onRightClick = ()=> console.log('right click event')

const onMouseDown = ()=> console.log('mouse down event')
const onMouseUp = ()=> console.log('mouse up event')
const onMouseWheel = ()=> console.log('mouse wheel event')
const onMouseOver = ()=> console.log('mouse over event')
const onMouseOut = ()=> console.log('mouse out event')
const onDrag = ()=> console.log('drag  event')
const onDragStart = ()=> console.log('drag start event')
const onDragEnd = ()=> console.log('drag end event')

//Event Listeners
logo.addEventListener('click', onClick)
logo.addEventListener('dblclick', onDoubleClick)
logo.addEventListener('contextmenu', onRightClick)
logo.addEventListener('mousedown', onMouseDown)
logo.addEventListener('mouseover', onMouseOver)
logo.addEventListener('drag', onDrag)
logo.addEventListener('dragstart', onDragStart)
logo.addEventListener('dragend', onDragEnd)


// Select the add item button
const addButton = document.querySelector('.btn');
// Event listener to enlarge the image on mouseover
addButton.addEventListener('mouseover', function () {
  // Enlarge the image by scaling it to 120%
  addButton.style.transform = 'scale(1.2)';
  // Smooth transition effect
  addButton.style.transition = 'transform 0.3s ease';
});


// Event listener to reset the image size on mouseout
addButton.addEventListener('mouseout', function () {
  // Reset the scale to 100%
  addButton.style.transform = 'scale(1)';
});
