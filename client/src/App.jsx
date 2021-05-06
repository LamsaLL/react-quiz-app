
import React, { useReducer, useState } from 'react';
import useFetch from './hooks/useFetch.jsx';

import Score from './components/Score/Score.jsx';
import Question from './components/Question/Question.jsx'
import Card from './components/Card/Card.jsx';
import Layout from './components/Layout/Layout.jsx';

const initialState = {
  currentQuestion: 0,
  userAnswer: false,
  score: 0,
  showScore: false
};

const reducer = (state, action) => {
  if (action.type === "RESET") {
    return initialState;
  }
  const result = { ...state };
  result[action.type] = action.value;

  return result;
};


const App = () => {
  const { data = [], loading, error } = useFetch('/api/randomQuestions', {});

  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentQuestion, userAnswer, score, showScore } = state;

  const text_question = data.length !== 0 ? data[currentQuestion].question_text : "";
  const answer_question = data.length !== 0 ? data[currentQuestion].answer : "";

  const handleTrueButtonClick = () => {
    dispatch({ type: 'userAnswer', value: true });
  }

  const handleFalseButtonClick = () => {
    dispatch({ type: 'userAnswer', value: false });
  }

  const handleValidateButtonClick = () => {
    const nextQuestion = currentQuestion + 1;

    if (userAnswer === answer_question) {
      dispatch({ type: 'score', value: score + 1 });
    }

    if (nextQuestion < data.length) {
      dispatch({ type: 'currentQuestion', value: nextQuestion });
    } else {
      dispatch({ type: 'showScore', value: true });
    }
  };

  const handleRestartButtonClick = () => {
    dispatch({ type: "RESET" });
  }

  return (
    <Layout className="h-screen items-center justify-center bg-blue-200">
      <div className="container">
        <Card className="shadow-2xl">
          {
            showScore ?
              <Score
                score={score}
                numberOfQuestions={data.length}
                handleRestartButtonClick={handleRestartButtonClick}
              />
              :
              <Question
                error={error}
                loading={loading}
                text_question={text_question}
                handleTrueButtonClick={handleTrueButtonClick}
                handleFalseButtonClick={handleFalseButtonClick}
                handleValidateButtonClick={handleValidateButtonClick}
              />
          }
        </Card>
      </div>
    </Layout>
  );
}

export default App;
