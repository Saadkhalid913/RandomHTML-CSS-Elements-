function SavedAttendance(Title, ListOfStudents) {
  this.length = ListOfStudents.length;
  this.students = ListOfStudents;
  this.title = Title;
  this.id = Date.now()
  return this 
}

function Student(name) {
  this.name = name;
  this.isHere = false;
  this.id = name
  return this 
}

function MakeAttendanceItems(AttendanceInstanceItem) {
  let ListWrapper = document.createElement("ul");
  ListWrapper.className= "current-attendance-list";

  for (let i = 0; i < AttendanceInstanceItem.length; i++) {
    let listElement = document.createElement("li");
    listElement.className = "attendance-item"

    let nameElement = document.createElement("p");
    nameElement.className = "attendance-item-student-name"

    let presentButton = document.createElement("button")
    presentButton.className = "present-button"
    presentButton.innerText = "Present"
    presentButton.id = AttendanceInstanceItem.students[i].id; 
    presentButton.addEventListener("click", function() {
      AttendanceInstanceItem.MarkHere(this.id)
    })

    let name = AttendanceInstanceItem.students[i].name;
    nameElement.appendChild(document.createTextNode(name))
    
    listElement.appendChild(nameElement)
    listElement.appendChild(presentButton)
    ListWrapper.appendChild(listElement)
  }
  return ListWrapper
}

function AttendanceInstance(SavedAttendanceItem) {
  this.students = [...SavedAttendanceItem.students]
  this.length = SavedAttendanceItem.length
  this.title = SavedAttendanceItem.title
  this.time = Date.now()
  this.MarkHere = function(id) {
    for (let i = 0; i < this.length; i++) {
      if (this.students[i].id == id)
      this.students[i].isHere = true;
    }
  }
  return this 
}

function MakeNewAttendanceFromDisplay() {
 let text =  document.getElementById("text-area-for-attendance").value;
 let title = document.getElementById("attendance-title-box").value;
 text = text.split(",");
 let StudentNames= []
 for (let i = 0; i < text.length; i++) {
   let student = new Student(text[i]);
   StudentNames.push(student); 
  }
  
  let att = new SavedAttendance(title, StudentNames);
  localStorage.setItem("SAVED-" + att.id, JSON.stringify(att))
  document.getElementById("text-area-for-attendance").value = "";
  document.getElementById("attendance-title-box").value = "";
}

function render() {
  let url = new URLSearchParams(window.location.search);
  let Current_attendance_id = url.get("id")
  let att = JSON.parse(localStorage.getItem("SAVED-" + Current_attendance_id))
  let attinstance = new AttendanceInstance(att)

  let htmlcontent = MakeAttendanceItems(attinstance);
  document.getElementById("attendance-body").appendChild(htmlcontent);
  document.getElementById("attendance-title").innerText=attinstance.title
  return attinstance
}

attinstance = render()

function SaveToLocal() {
  saved_time = Date.now()
  attinstance.time = saved_time 
  localStorage.setItem("INSTANCE-" + saved_time, JSON.stringify(attinstance))
  window.location.replace("index.html")
}