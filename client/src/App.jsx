
import React, { useState } from 'react';
import logo from './logo.svg';

const App = () => {
  const [msg, setMsg] = useState('');

  const handleClick = () => {
    fetch('/api/question')
      .then(response => response.json())
      .then(data => setMsg(data.msg));
  }

  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
        Click me 
      </button>
      <h1> {msg} </h1>      
    </div>
  );
}

export default App;
