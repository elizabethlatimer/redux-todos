import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Task from './Task';

function List() {
  const tasks = useSelector(st => st.tasks);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  }
  return (
    <div className="List">
      <ul>
        {tasks.map((task) => (
          <Task key={task.id}
            remove={handleRemove}
            task={task.task}
            id={task.id}
          />))
        }
      </ul>
    </div>
  )
}

export default List;

