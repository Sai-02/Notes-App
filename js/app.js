console.log("this is working");

// If user adds a note, add it to localStorage

let addNoteBtn = document.getElementById("add-note-btn");
addNoteBtn.addEventListener("click", AddNote);

function AddNote(e) {
  console.log("sda");
  let addTxt = document.getElementById("note-content");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
}

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
      <div class="single-note">
      <h3>Note ${index + 1}</h3>
      <p> ${element}</p>
      <div class="delete-note-btn-container">
        <button class="delete-note-btn note-btn">Delete Node</button>
      </div>
    </div>
      `;
  });
  let notesContainer = document.getElementById("notes-container");
  if (notes.length != 0) {
    notesContainer.innerHTML = html;
  }
}
