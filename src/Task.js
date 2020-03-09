import React from 'react';

function Task ({remove, task}) {
  return (
    <div className="Task">
      <p>{task}</p><button onClick={remove}>Delete Task</button>
    </div>
  )
}

export default Task;