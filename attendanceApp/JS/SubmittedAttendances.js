function display() {
  items = []
  for (let item in localStorage) {
    if (item.startsWith("INSTANCE"))
      items.push(JSON.parse(localStorage.getItem(item)))
  }
  items.sort((a,b) => b.time - a.time)

  for (let i in items)
    document.getElementById("archive-list-body").appendChild(createArchiveListElement(items[i]))
}

function createArchiveListElement(ArchiveAttendance) {
  let listItem = document.createElement("li");
  let listLink = document.createElement("a")
  listLink.innerText = `${ArchiveAttendance.title} - ${new Date(ArchiveAttendance.time).toDateString()}`
  listLink.href = "/HTML/View.html?instance=" + ArchiveAttendance.time
  listItem.appendChild(listLink)
  return listItem
}

display()