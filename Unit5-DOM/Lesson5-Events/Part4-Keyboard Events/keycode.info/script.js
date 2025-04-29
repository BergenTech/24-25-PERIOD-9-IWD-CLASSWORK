document.addEventListener('keydown', function(e){
    document.querySelector('#key-info').innerHTML = `
    <div id="key" class="display-1">${e.key}</div>
            <div class="row mt-4">
                <div class="col">
                    <h2>event.key</h2>
                    <div class="key-box" id="event-key">${e.key}</div>
                </div>
                <div class="col">
                    <h2>event.keyCode</h2>
                    <div class="key-box" id="event-key-code">${e.keyCode}</div>
                </div>
                <div class="col">
                    <h2>event.code</h2>
                    <div class="key-box" id="event-code">${e.code}</div>
                </div>
            </div>
    `
})