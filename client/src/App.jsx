import React, { useReducer, useState } from 'react';
import useFetch from './hooks/useFetch.jsx';
import { Router, BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login/Login.jsx';
import Score from './components/Score/Score.jsx';
import Question from './components/Question/Question.jsx';
import Card from './components/Card/Card.jsx';
import Layout from './components/Layout/Layout.jsx';

const initialState = {
  indCurrentQuestion: 0,
  userAnswer: false,
  score: 0,
  showScore: false,
};

const quizReducer = (state, action) => {
  if (action.type === 'RESET') {
    return initialState;
  }
  const result = { ...state };
  result[action.type] = action.payload;

  return result;
};

const App = () => {
  const [version, setVersion] = useState(0);
  const { data = [], loading, error } = useFetch(
    '/api/randomQuestions',
    version
  );

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { indCurrentQuestion, userAnswer, score, showScore } = state;

  const text_question = !loading ? data[indCurrentQuestion].question_text : '';
  const answer_question = !loading ? data[indCurrentQuestion].answer : '';

  const handleTrueButtonClick = () => {
    dispatch({ type: 'userAnswer', payload: true });
  };

  const handleFalseButtonClick = () => {
    dispatch({ type: 'userAnswer', payload: false });
  };

  const handleValidateButtonClick = () => {
    const indNextQuestion = indCurrentQuestion + 1;

    if (userAnswer === answer_question) {
      dispatch({ type: 'score', payload: score + 1 });
    }

    if (indNextQuestion < data.length) {
      dispatch({ type: 'indCurrentQuestion', payload: indNextQuestion });
    } else {
      dispatch({ type: 'showScore', payload: true });
    }
  };

  const handleRestartButtonClick = () => {
    setVersion(version + 1);
    dispatch({ type: 'RESET' });
  };

  return (
    <BrowserRouter>
      <Link to="/login">Login</Link>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Layout className="h-screen items-center justify-center bg-blue-200">
            <div className="container">
              <Card className="shadow-2xl">
                {showScore ? (
                  <Score
                    score={score}
                    numberOfQuestions={data.length}
                    handleRestartButtonClick={handleRestartButtonClick}
                  />
                ) : (
                  <Question
                    error={error}
                    loading={loading}
                    text_question={text_question}
                    handleTrueButtonClick={handleTrueButtonClick}
                    handleFalseButtonClick={handleFalseButtonClick}
                    handleValidateButtonClick={handleValidateButtonClick}
                  />
                )}
              </Card>
            </div>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
