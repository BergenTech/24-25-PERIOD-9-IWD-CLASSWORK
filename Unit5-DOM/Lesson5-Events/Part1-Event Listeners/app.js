// ---------- DEMO START: Event Listeners ---------- //
// Select the clear button
const clearBtn = document.querySelector('.clear-tasks');

// Method 1: Using onclick — only one function allowed
clearBtn.onclick = function () {
  alert('Clear Items 1'); // This will be overwritten
};

// Overwrites the previous one
clearBtn.onclick = function () {
  alert('Clear Items 2'); // Only this runs
};

// Method 2: Using addEventListener — allows multiple handlers
clearBtn.addEventListener('click', () => alert('Clear Items via Event Listener'));
clearBtn.addEventListener('click', () => console.log('Second click handler works!'));

// Named function for reuse
function logClearAction() {
  console.log('Clear Items (logClearAction called)');
}

// Add and remove the named function
clearBtn.addEventListener('click', logClearAction);

// Remove it after 2 seconds
setTimeout(() => {
  clearBtn.removeEventListener('click', logClearAction);
  console.log('logClearAction listener removed after 2 seconds');
}, 2000);

// Simulate a click after 3 seconds
setTimeout(() => {
  console.log('Simulated click after 3s:');
  clearBtn.click();
}, 3000);

// ---------- DEMO END: Event Listeners ---------- //

// ---------- ACTUAL CLEAR FUNCTION ---------- //

// Select the clear button
const clearBtn = document.querySelector('.clear-tasks');

function clearTaskItems() {
  const itemList = document.querySelector('ul');
  // Method 1: Clear all at once
  // itemList.innerHTML = '';

  // Method 2: Remove each item individually
  // itemList.querySelectorAll('li').forEach(item => item.remove());

  // Method 3: Best practice — remove one by one using while loop
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  console.log('All tasks cleared!');
}

// Attach the real clear function
clearBtn.addEventListener('click', clearTaskItems);