const INITIAL_STATE = { tasks: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "ADD":
      return {...state, tasks: [...state.tasks, action.payload.task]};
    case "REMOVE":
      let newArray = [...state.tasks];
      const taskIdx = action.payload;
      newArray.splice(taskIdx, 1);
      return {...state, tasks: newArray}
    case "EDIT":
      let editedArray = [...state.tasks];
      const editIdx = action.payload.taskIdx;
      editedArray.splice(editIdx, 1, action.payload.task);
      return {...state, tasks: editedArray}
    default:
      return state;
  }
}

export default rootReducer;