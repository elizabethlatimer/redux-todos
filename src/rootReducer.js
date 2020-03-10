const INITIAL_STATE = { tasks: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case "ADD":
      return {...state, tasks: [...state.tasks, {task: action.payload.task, id:action.payload.id}]};
    case "REMOVE":
      let newArray = [...state.tasks];
      const id = action.payload;
      newArray.filter((task) => task.id !== id)
      console.log(newArray);
      return {...state, tasks: newArray}
    case "EDIT":
      let editedArray = [...state.tasks];
      editedArray.map(task => {
        return task.id === id ? {...task, task: action.payload.task} : task});
      return {...state, tasks: editedArray}
    default:
      return state;
  }
}

export default rootReducer;

//filter removing
//map editing