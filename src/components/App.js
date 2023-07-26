import { useState } from "react";
import Header from "./Header";
import Pad from "./Pad";
import Notes from "./Notes";

function App() {

  const DUMMY_NOTES = [{ id:1, title: "Hello", message: "This is a test message" }]

  const [notes, setNotes] = useState(DUMMY_NOTES)

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [
        {
          id: Math.random().toString(),
          title: newNote.title,
          message: newNote.message
        },
        ...prevNotes
      ]
    })
  }

  function deleteNote(noteId) {
    console.log(noteId);
    setNotes(prevNotes => {
      prevNotes.filter(note => note.id !== noteId)
    })
  }

  return (
    <div>
      <Header />
      <Pad onAddNote={addNote} />
      <Notes notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
