let PostHandler = {
  AddPost: function () {
    let AreaText = document.getElementById("new-text").value
    if ((AreaText === null) | (AreaText === "")) {
      return;
    }
    
    let title, txt
    [title, txt] = AreaText.split(":")

    if (txt === undefined) {
      txt = title;
      title = "Untitled"
    }

    document.getElementById("new-text").value = "" // Setting textbox area to empty string
    let rawText = document.createTextNode(txt); // creating a text node with body text
    let paragraph_element = document.createElement("p"); // storing that node in a p tag
    paragraph_element.appendChild(rawText) // constructing the p tag
  
    let headingtext = document.createElement("p") // making the heading
    headingtext.className = "to-do-card-heading"
    let rawHeading = document.createTextNode(title);
    headingtext.appendChild(rawHeading);
  
    let text_card = document.createElement("div");
    text_card.className = "to-do-card";
  
    let removebutton = document.createElement("button")
    removebutton.appendChild(document.createTextNode("Remove"))
    removebutton.id = this.current_id;
    this.current_id++;
    removebutton.setAttribute("onclick", "PostHandler.RemovePost(this.id)")
  
  
    text_card.appendChild(headingtext);
    text_card.appendChild(paragraph_element);
    text_card.appendChild(removebutton)
  
    //dubugging 
    // text_card.appendChild(document.createTextNode(removebutton.id))
  
    document.getElementById("main").prepend(text_card);
  },

  RemovePost: function (id) {
    document.getElementById(id).parentElement.remove();

  },
  

  current_id: 1 

}


