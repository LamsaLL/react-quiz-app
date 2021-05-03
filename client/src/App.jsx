
import React, { useState } from 'react';
import useFetch from './hooks/useFetch.jsx'

import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx';
import Layout from './components/Layout/Layout.jsx';

const App = () => {
  const { data = [], loading, error } = useFetch('/api/randomQuestions', {});

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const text_question = data.length !== 0 ? data[currentQuestion].question_text : "";

  const handleAnswerButtonClick = (questions) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      console.log('you reached the end of the quiz');
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
            <Button text="Vraie"> </Button>
            <Button text="Faux"> </Button>
            <Button text="Valider" > </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
}

export default App;
