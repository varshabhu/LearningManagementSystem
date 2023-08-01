import React, { useState } from 'react';
import axios from 'axios';

const questions = [
  {
    question: 'What is the output of the following Python code?',
    options: ['Option A: 10', 'Option B: 20', 'Option C: 30', 'Option D: 40'],
    correctAnswer: 'Option B: 20',
  },
  {
    question: 'What is the viewof the following Python code?',
    options: ['Option A: 10', 'Option B: 20', 'Option C: 30', 'Option D: 40'],
    correctAnswer: 'Option B: 20',
  },
  
  // You can add more questions here in a similar format
];

const Test = () => {
  const token = localStorage.getItem("token");
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const handleChange = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };
  
  const handleSubmit = async() => {
    // Send answers to the backend for evaluation
    await axios
      .post("http://localhost:8181/api/evaluate", { answers },{
        headers:{
          "Authorization":`Bearer ${token}`,
        }
      })
      .then((response) => {
        setScore(response.data.score);
        setShowResult(true);
      })
      .catch((error) => {
        console.error('Error submitting answers:', error);
      });
  };

  return (
    <div className="test-container">
      <h1>Python Technical Test</h1>
      {questions.map((question, index) => (
        <div key={index} className="question-container">
          <h3>{question.question}</h3>
          <div className="options-container">
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  onChange={() => handleChange(index, option)}
                  checked={answers[index] === option}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      {!showResult ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <div className="result-container">
          <h2>Your Score: {score.toFixed(2)}%</h2>
        </div>
      )}
    </div>
  );
};

export default Test;
