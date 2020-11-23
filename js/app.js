console.log("this is working");
showNotes();
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

// Function to show notes from local storage
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
        <button class="delete-note-btn note-btn" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
      </div>
    </div>
      `;
  });
  let notesContainer = document.getElementById("notes-container");
  if (notesObj.length != 0) {
    notesContainer.innerHTML = html;
  } else {
    notesContainer.innerHTML = `No notes to show here`;
  }
}

// Function to delete note
function deleteNote(index) {
  console.log("I m deleting  " + index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
