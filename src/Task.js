import React, {useState} from 'react';
import Form from './Form';

function Task ({remove, task, index}) {
  const [editing, setEditing] = useState(false)
  
  const display = !editing
  ? <li className="Task">
    <p>{task}</p><button onClick={() => remove(index)}>Delete Task</button>
    <button onClick={()=> setEditing(true)}>Edit Task</button>
  </li>
  :
  <Form action="EDIT" initialValue={ { task } } taskIdx={ index }/>
  
  return display;
}

export default Task;