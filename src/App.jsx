import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Note from "./Components/Note";
import notes from "./Components/notes";
import CreateArea from "./Components/CreateArea";


function App() {

  const [note, setNote] = React.useState([]);

  const addNote = (notes) => {
    setNote(prevNotes => {
      return [...prevNotes, notes];
    })
  }

  const deleteNote = (id) =>{
    setNote(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header></Header>
      <CreateArea onAdd={addNote} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {note.map((note,index) => {
        return(
          <Note
            key = {index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          ></Note>
        )
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
