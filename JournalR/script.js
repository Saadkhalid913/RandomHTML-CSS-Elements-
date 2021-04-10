let CardMaker = {
  current_id: 0,
  MakeCard : function (heading, body) {
    let BodyText = document.createTextNode(body);
    let HeadingText = document.createTextNode(heading);

    if (BodyText.length === 0 || HeadingText.length === 0) {
      return;
    }

    if (BodyText == null || HeadingText == null) {
      return;
    }
  
    let HeadingTag = document.createElement("h2");
    let BodyTag = document.createElement("p");
  
    HeadingTag.appendChild(HeadingText);
    BodyTag.appendChild(BodyText);
  
    HeadingTag.className = "card-heading"
    BodyTag.className = "card-body"
  
    let card = document.createElement("div")
    card.className = "card"
    card.id = "card-" + this.current_id;
    this.current_id++;
    card.setAttribute("onclick", "CardMaker.ChangeDisplay(this.id)" )

    // making remove button
    let RemButton = document.createElement("button")
    RemButton.setAttribute("onclick", "CardMaker.RemoveCard(this.parentElement.id)")
    RemButton.className = "card-remove-button"
    let ButtonText = document.createTextNode("Remove");
    RemButton.appendChild(ButtonText);


    card.appendChild(HeadingTag);
    card.appendChild(BodyTag);
    card.appendChild(RemButton)

    document.getElementById("sidebar").prepend(card);
    localStorage.setItem(card.id, JSON.stringify({h:heading, t:body}));
  },

  ChangeDisplay: function (id) {
    if (localStorage.getItem(id) !== null ){
    document.getElementById("main-journal-header").textContent = JSON.parse(localStorage.getItem(id))["h"];
    document.getElementById("main-journal-body").textContent = JSON.parse(localStorage.getItem(id))["t"];
    }
  },


  addpost: function () {
    this.MakeCard(prompt(), prompt())
  },

  RemoveCard: function (id) {
    document.getElementById(id).remove()
    localStorage.removeItem(id)
  }
}



let cards = [];
if (localStorage.length > 0) {
  for (let card in localStorage) {
    if (card.startsWith("card")) {
      cards.push(JSON.parse(localStorage.getItem(card)))
    }
  }
  localStorage.clear()
  console.log(cards)
  for (let i in cards) {
    CardMaker.MakeCard(cards[i]["h"], cards[i]["t"])
  }

}