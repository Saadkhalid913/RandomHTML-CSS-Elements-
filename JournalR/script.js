let CardMaker = {
  current_id: 0,
  current_card: null,
  MakeCard: function (heading, body) {

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
    card.setAttribute("onclick", "CardMaker.ChangeDisplay(this.id)")

    // making remove button
    let RemButton = document.createElement("button")
    RemButton.setAttribute("onclick", "CardMaker.RemoveCard(this.parentElement.id)")
    RemButton.className = "card-remove-button"
    let RemButtonText = document.createTextNode("Remove");
    RemButton.appendChild(RemButtonText);


    card.appendChild(HeadingTag);
    card.appendChild(BodyTag);
    card.appendChild(RemButton)

    document.getElementById("sidebar").prepend(card);
    localStorage.setItem(card.id, JSON.stringify({ h: heading, t: body }));
  },

  ChangeDisplay: function (id) {
    if (localStorage.getItem(id) !== null) {
      document.getElementById("main-journal-header").textContent = JSON.parse(localStorage.getItem(id))["h"];
      document.getElementById("main-journal-body").textContent = JSON.parse(localStorage.getItem(id))["t"];
    }
    this.current_card = id
  },


  MoveDiv: function () {
    let attr = document.getElementById("post-maker-div").style.left;
    if (attr === "70%") {
      document.getElementById("post-maker-div").style.left = "130%";}
    else {
      document.getElementById("post-maker-div").style.left = "70%";
    }

  },

  RemoveCard: function (id) {
    document.getElementById(id).remove()
    localStorage.removeItem(id)
  },

  TextToCard: function () {
    let currentDate = new Date();
    let datetime =  currentDate.toLocaleTimeString() + " " +
                    currentDate.getFullYear() + "/" + 
                    currentDate.getMonth()  + "/" +
                    currentDate.getDay()  
                    



    let body = document.getElementById("new-post-text").value
    document.getElementById("new-post-text").value = "" 
    this.MakeCard(datetime, body);
    document.getElementById("post-maker-div").style.left = "130%";
  },

  ClearDisplay: function () {
    document.getElementById("main-journal-header").textContent = ""
    document.getElementById("main-journal-body").textContent = ""
  },

  SaveEdit: function () {
    console.log(this.current_card)
  },

  // EditCard: function (id, newBody) {
  //   if (!(id in localStorage)) {
  //     return
  //   }
  //   let Oldcard = JSON.parse(localStorage.getItem(id))
  //   Oldcard["t"] = newBody
  //   localStorage.removeItem(id)
  //   localStorage.setItem(id, JSON.stringify(Oldcard))
  //   CardMaker.RefreshPage()

  // },

  RefreshPage: function () {
    let cards = [];
    if (localStorage.length > 0) {
      for (let card in localStorage) {
      if (card.startsWith("card")) {
        cards.push(JSON.parse(localStorage.getItem(card)))
      }
    }
    localStorage.clear()
    for (let i in cards) {
      this.MakeCard(cards[i]["h"], cards[i]["t"])
    }


}
  }

}

CardMaker.RefreshPage()



