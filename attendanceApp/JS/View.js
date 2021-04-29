function CreateArchiveAttendanceItem(Name, isPresent) {
  let ParaItem = document.createElement("p")
  ParaItem.style.backgroundColor = isPresent ? "#2E7D32" : "#EF5350"
  ParaItem.innerText = Name

  let listItem = document.createElement("li")
  listItem.appendChild(ParaItem)
  return ParaItem
}

function render() {
  let urlparams = new URLSearchParams(window.location.search);
  let instance_id = urlparams.get("instance");
  let archivedAttendance = JSON.parse(localStorage.getItem("INSTANCE-" + instance_id))
  for (let student of archivedAttendance.students) {
    let isPresent = student.Present;
    let name = student.name;
    document.getElementById("list-body").appendChild(CreateArchiveAttendanceItem(name, isPresent))
  }
  document.getElementById("heading").innerHTML = `${archivedAttendance.title} - ${new Date(archivedAttendance.time).toDateString()}`
}

// function CSVexport() {

// }
render()