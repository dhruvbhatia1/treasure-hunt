// src/components/QuestionPage.jsx
import React, { useState } from 'react';

const QuestionPage = ({ questionData, onNext }) => {
  const [answer, setAnswer] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === questionData.answer.toLowerCase()) {
      onNext();
      setAnswer('');
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg text-center transition-opacity duration-700 ease-in-out">
      <div className="bg-gray-900 p-8 rounded shadow-lg max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-yellow-300">{questionData.question}</h2>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border border-yellow-300 bg-gray-800 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Your answer..."
        />
        {showError && <p className="text-red-500 mb-4">Incorrect answer. Try again!</p>}
        <button
          onClick={handleSubmit}
          className="bg-yellow-400 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
