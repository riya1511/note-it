import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {

  const { title, content, onDelete, id } = props;

  const handleClick = (event) =>{
    onDelete(id);
    event.preventDefault();
  }

  return (
    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
    </div>
  )
}
