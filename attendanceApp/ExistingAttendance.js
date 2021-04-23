function CreateAttendenceItem(attendance) {
  let tag = document.createElement("a");
  tag.href = "index.html?id=" + attendance.id
  let listItem = document.createElement("li");
  listItem.innerText = attendance.title
  tag.appendChild(listItem)
  document.getElementById("main-list").appendChild(tag);
}


function render() {
  for (let item in localStorage) {
    if (item.startsWith("SAVED"))
      CreateAttendenceItem(JSON.parse(localStorage.getItem(item)))
  }
}

render()
