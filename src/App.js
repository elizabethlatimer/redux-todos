import React from 'react';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
  return (
    <div className="App">
      <Form action="ADD" />
      <List />
    </div>
  );
}

export default App;
