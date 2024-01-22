import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;