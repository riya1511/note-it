import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [ notes, changeNotes ] = React.useState({title: "", content: ""});
    const [ expand, handleExpand ] = React.useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        changeNotes(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleClick = () =>{
        handleExpand(true);
    }

    const submitNote = (event) =>{
        props.onAdd(notes);
        changeNotes({title: "", content: ""});
        event.preventDefault();
    }

  return (
    <div>
        <form className='create-note'>
            {expand && <input name="title" placeholder="Title" onChange={handleChange} value={notes.title} />}
            <textarea onClick={handleClick} name="content" placeholder="Take a note..." rows={expand ? "3" : "1"}
             onChange={handleChange} value={notes.content} />
            <Zoom in={expand}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
