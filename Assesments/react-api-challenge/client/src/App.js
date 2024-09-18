import './App.css';
import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

function App() {
  const [task, setTask] = useState(null);
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`https://example.com/nima408@gmail.com`);
        const data = await response.json();
        setTask(data);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    fetchTask();
  }, []);

  const solveTask = (task) => {
    // If the task is to reverse a string:
    if (task && task.type === 'reverse_string') {
      return task.data.split('').reverse().join('');
    }

  };

  useEffect(() => {
    if (task) {
      const solution = solveTask(task);
      setSolution(solution);
    }
  }, [task]);

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1>API Challenge</h1>
      {task ? (
        <div>
          <p>Task: {JSON.stringify(task)}</p>
          <p>Solution: {solution}</p>
        </div>
      ) : (
        <p>Loading task...</p>
      )}

    </div>
  );
}

export default App;
