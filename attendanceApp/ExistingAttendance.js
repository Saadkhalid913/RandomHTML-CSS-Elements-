function CreateAttendenceItem(attendance) {
  let listItem = document.createElement("li");
  listItem.id = attendance.id
  let removeButton = document.createElement("button")
  
  removeButton.addEventListener("click", function() {
    localStorage.removeItem("SAVED-" + attendance.id)
    document.getElementById(attendance.id).remove()
  })
  removeButton.innerText = "Delete"
  
  let tag = document.createElement("a");
  tag.href = "index.html?id=" + attendance.id
  tag.innerText = attendance.title
  console.log(tag)

  listItem.appendChild(tag)
  listItem.appendChild(removeButton)

  console.log(listItem)

  document.getElementById("main-list").appendChild(listItem);

}


function render() {
  for (let item in localStorage) {
    if (item.startsWith("SAVED"))
      CreateAttendenceItem(JSON.parse(localStorage.getItem(item)))
  }
}

render()
