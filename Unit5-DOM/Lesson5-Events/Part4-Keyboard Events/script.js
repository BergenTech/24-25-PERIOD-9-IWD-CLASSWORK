// Get the input element with the ID 'item-input'
const itemInput = document.getElementById('item-input');

// Event handler for 'keypress' event (triggered when a key is pressed down and produces a character)
const onKeyPress = (e) => {
    console.log('keypress'); // Logs "keypress" to the console
};

// Event handler for 'keyup' event (triggered when a key is released)
const onKeyUp = (e) => {
    console.log('keyup'); // Logs "keyup" to the console
};

// Event handler for 'keydown' event (triggered when a key is first pressed down)
const onKeyDown = (e) => {
    // Check if the key pressed was 'Enter' using the `key` property
    if (e.key === 'Enter') {
        alert('You pressed enter'); // Show an alert if 'Enter' is pressed
    }

    // Check if the keyCode was 13 (which corresponds to 'Enter')
    if (e.keyCode === 13) {
        alert('You pressed enter'); // Also show an alert (older method, not recommended)
    }

    // Check if the physical key code was 'Digit1' (the number 1 key above the letters)
    if (e.code === 'Digit1') {
        console.log('You pressed 1'); // Log message when the number 1 key is pressed
    }

    // Check if the key is being held down repeatedly
    if (e.repeat) {
        console.log('You are holding down ' + e.key); // Log the key being held
    }

    // Check the state of modifier keys (Shift, Ctrl, Alt)
    console.log('Shift: ' + e.shiftKey);   // true if Shift key is held down
    console.log('Control: ' + e.ctrlKey);  // true if Ctrl key is held down
    console.log('Alt: ' + e.altKey);       // true if Alt key is held down

    // Check for a specific key combination: Shift + K
    if (e.shiftKey && e.key === 'K') {
        console.log('You hit shift + K'); // Log if Shift + K is pressed together
    }
};

// Attach event listeners to the input element for keypress, keyup, and keydown events
itemInput.addEventListener('keypress', onKeyPress); // Older event, doesn't detect non-character keys
itemInput.addEventListener('keyup', onKeyUp);       // Fires when key is released
itemInput.addEventListener('keydown', onKeyDown);   // Fires when key is pressed
