//1 - Changing the name
function changeName(){
    let newName = prompt("Enter new name:")
    if(newName) document.getElementById("profile-name").textContent = newName
}

//2 Change the bio text
function changeBio() {
    let newBio = prompt("Enter new bio:");
    if (newBio) document.getElementById("profile-bio").textContent = newBio;
}

//3 Toggle Theme (Dark/Light Mode)
function toggleTheme(){
    document.body.classList.toggle("dark-mode")
}

//4 Change the profile image randomly
function changeImage(){
    let randomNumber = Math.floor(Math.random()*100)
    document.getElementById("profile-img").src = `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`
}

//add a new interest
function addInterest(){
    let newInterest = prompt("Enter a new interest:")
    let li = document.createElement("li")
    li.textContent = newInterest
    li.classList.add("list-group-item")
    document.getElementById("profile-interests").appendChild(li)
}

