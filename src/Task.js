import React, {useState} from 'react';
import Form from './Form';

function Task ({remove, task, id}) {
  const [editing, setEditing] = useState(false)
  
  const display = !editing
  ? <li className="Task">
    <p>{task}</p><button onClick={() => remove(id)}>Delete Task</button>
    <button onClick={()=> setEditing(true)}>Edit Task</button>
  </li>
  :
  <Form action="EDIT" initialValue={ { task } } id={id} />
  
  return display;
}

export default Task;