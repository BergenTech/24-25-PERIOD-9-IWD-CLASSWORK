function addCard() {
    const cardContainer = document.getElementById("cardContainer");
    const card = document.createElement("div");
    card.innerHTML = `<div class="card m-2" style="width: 18rem;">
        <img src="https://placehold.co/50x50" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
    cardContainer.appendChild(card);
  }

  function removeCard(){
    const cardContainer = document.getElementById("cardContainer")
    //check if container has any children
    if(cardContainer.lastChild){
        cardContainer.lastChild.remove()
    }
  }

  function clearCards() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = "";
  }
