import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

//-----------------------------------------

/*
function App() {
  return (
    <div>
      <Header />
      {note.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
*/

//-----------------------

//This 👆 is better then 👇.
/*
function createNote(noteItem) {
  return (
    <Note key={noteItem.id} title={noteItem.title} content={noteItem.content} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {note.map(createNote)}
      <Footer />
    </div>
  );
}

*/
