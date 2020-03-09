const INITIAL_STATE = { tasks: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "ADD":
      return {...state, tasks: [...state.tasks, action.payload]};
    case "REMOVE":
      let newArray = [...state.tasks];
      const taskIdx = action.payload;
      newArray.splice(taskIdx, 1);
      return {...state, tasks: newArray}
    default:
      return state;
  }
}

export default rootReducer;