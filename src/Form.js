import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Form({ action }) {
  const initialState = { task: "" }
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(action);
    setFormData(initialState);
  }
}

return (
  <div className="Form">
    <form>
      <label htmlFor="task"></label>
    </form>
  </div>
)

export default Form;