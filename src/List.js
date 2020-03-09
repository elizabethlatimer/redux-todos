import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Task from './Task';

function List() {
  const tasks = useSelector(st => st.tasks);
  const dispatch = useDispatch();

  const handleRemove = (i) => {
    dispatch({ type: "REMOVE", payload: i });
  }
  return (
    <div className="List">
      <ul>
        {tasks.map((task, i) => (
            <Task key={uuid()}
              remove={handleRemove}
              task={task}
              index={i}
              />))
          }
      </ul>
    </div>
  )
}

export default List;

