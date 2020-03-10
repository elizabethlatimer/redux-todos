const INITIAL_STATE = { tasks: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, tasks: [...state.tasks, { task: action.payload.task, id: action.payload.id }] };
    case "REMOVE":
      const id = action.payload;
      let newArray = state.tasks.filter((task) => {
        return task.id !== id
      });
      return { ...state, tasks: newArray }
    case "EDIT":
      const editId = action.payload.id;
      let editedArray = state.tasks.map(task => {
        return task.id === editId ? { ...task, task: action.payload.task } : {...task};
      });
      console.log(editedArray);
      return { ...state, tasks: editedArray };
    default:
      return state;
  }
}

export default rootReducer;

//filter removing
//map editing