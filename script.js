const notesElement = document.getElementById("app");
const saveBtn = document.querySelector(".save");
const text = document.querySelector("textarea")
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes){
    notes.forEach(note => {
        addNewNote(note);
    })
}


addBtn.addEventListener('click', () =>{
    addNewNote();
});

function addNewNote(textNote = ''){
    const note = document.createElement('div');

                                                    
    note.innerHTML = `                                                               
    <div class="notes">
    <div class="tools">
    <button class="save"><i class="fa-solid fa-floppy-disk"></i></i></button>
    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    <textarea></textarea>
    </div>`; 
    
    const deleteBtn = note.querySelector(".delete");
    const saveBtn = note.querySelector(".save");
    const textArea = note.querySelector("textarea");
    
    textArea.value = textNote;

    deleteBtn.addEventListener('click', () => {
        note.remove()

        updateLS()

    
    });


    saveBtn.addEventListener('click',  () =>{
        updateLS()
    });

    document.body.appendChild(note);  //*
}

function updateLS(){
    const noteText = document.querySelectorAll('textarea');

    const notes = [];

    noteText.forEach(note => {
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}
