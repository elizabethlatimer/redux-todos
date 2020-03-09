import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Form({ action, initialValue = { task: "" }, taskIdx = null }) {
  const initialState = initialValue;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: action, payload: { task: formData.task, taskIdx } });
    setFormData(initialState);
  }


  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input id="task" name="task" value={formData.task} onChange={handleChange}></input>
        <button type="submit">{action}</button>
      </form>
    </div>
  )
}

export default Form;