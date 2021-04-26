function CreateArchiveAttendanceItem(Name, isPresent) {
  let listItem = document.createElement("li")
  listItem.style.backgroundColor = isPresent ? "green" : "red"
  listItem.innerText = Name
  return listItem
}

function render() {
  let urlparams = new URLSearchParams(window.location.search);
  let instance_id = urlparams.get("instance");
  let archivedAttendance = JSON.parse(localStorage.getItem("INSTANCE-" + instance_id))
  for (let student of archivedAttendance.students) {
    let isPresent = student.Present;
    let name = student.name;
    console.log(name)
    console.log(isPresent)
    document.getElementById("list-body").appendChild(CreateArchiveAttendanceItem(name, isPresent))
  }
}
render()