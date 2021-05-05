
import React, { useState } from 'react';
import useFetch from './hooks/useFetch.jsx'

import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx';
import Layout from './components/Layout/Layout.jsx';

const App = () => {
  const { data = [], loading, error } = useFetch('/api/randomQuestions', {});

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)

  const text_question = data.length !== 0 ? data[currentQuestion].question_text : "";

  const handleTrueButtonClick = () =>{
    setUserAnswer(true);
  }

  const handleFalseButtonClick = () =>{
    setUserAnswer(false);    
  }

  const handleValidateButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    
    if ( userAnswer === data[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Layout className="h-screen items-center justify-center bg-blue-200">
      <div className="container">
        <Card className="shadow-2xl">
          {
            <div className="p-4 text-center text-xl">
              {error && 'Error!'}
              {loading && 'Loading...'}
              {text_question}
            </div>
          }
          <div className="flex flex-wrap gap-4 p-4 justify-center">
            <Button className="focus:bg-green-400" onClick={handleTrueButtonClick} text="Vraie"> </Button>
            <Button className="focus:bg-red-400" onClick={handleFalseButtonClick} text="Faux"> </Button>
            <Button className="text-white bg-blue-400" onClick={handleValidateButtonClick} text="Valider" > </Button>
          </div>
          <div className=''>
            {showScore ? <div className='score-section'> Your score is {score}/{data.length} </div> : <></>}
          </div>
        </Card>
      </div>
    </Layout>
  );
}

export default App;
