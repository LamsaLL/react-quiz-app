
import React, { useState } from 'react';
import logo from './logo.svg';

const App = () => {
  const [questions, setQuestions] = useState([]);

  const handleClick = () => {
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }

  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
        Click me 
      </button>
      {
        questions.map((question) => (
          <h1>{question.text_question}</h1>
        ))
      }     
    </div>
  );
}

export default App;
