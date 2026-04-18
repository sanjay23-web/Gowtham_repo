const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const deleteBtn = document.querySelector(".delete-btn"); // New selector

// Create a note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox);
});

// Delete the last note
deleteBtn.addEventListener("click", () => {
    const notes = document.querySelectorAll(".input-box");
    if (notes.length > 0) {
        // This removes the last note in the list
        notes[notes.length - 1].remove();
    }
});