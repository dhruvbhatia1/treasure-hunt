import { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './components/HomePage'
import QuestionPage from './components/QuestionPage'
import { questions } from './data'
import './App.css'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <TransitionGroup>
      <CSSTransition
        key={currentQuestionIndex}
        classNames="fade"
        timeout={500}
      >
        {currentQuestionIndex === -1 ? (
          <HomePage onStart={startQuiz} />
        ) : currentQuestionIndex < questions.length ? (
          <QuestionPage
            questionData={questions[currentQuestionIndex]}
            onNext={nextQuestion}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl font-bold text-yellow-400">Your gift was on your table all along. Go get it!</h2>
          </div>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
