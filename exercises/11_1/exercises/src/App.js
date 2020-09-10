import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['wake up', 'eat', 'code', 'sleep', 'repeat']

function App() {
  return (tasks.map(el => task(el)));
}

export default App;
