import React, { useState } from 'react';

function programmingParagraph({ concept }) {
  const [Question, setQuestion] = useState('');
  const [Answer, setAnswer] = useState();

  const chooseProgrammingLanguage = (section) => {
    setQuestion(section.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (concept.quiz.answer.toLowerCase() === Question.toLowerCase()) {
      setResult('Correct!');
    } else {
      setResult('Incorrect');
    }
  };

  return (
    <div className="concept-details">
      {concept ? (
        <div>
          <h2>{concept.name}</h2>
          <p>{concept.description}</p>
          <img src={concept.image} alt={concept.name} />
          <form onSubmit={handleSubmit}>
            <label>
              Quiz Question: {concept.quiz.question}
              <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Submit Answer</button>
            {result && <p>{result}</p>}
          </form>
        </div>
      ) : (
        <p>Select a concept to see details</p>
      )}
    </div>
  );
}

export default ConceptDetails;
jsx
Copy code
// conceptsData.js
const conceptsData = [
  {
    id: 1,
    name: 'Variables',
    description:
      'Variables are used to store data values. In JavaScript, variables are declared with the var, let, or const keyword.',
    image: 'variable_image.png',
    quiz: {
      question: 'What keyword is used to declare a variable in JavaScript?',
      answer: 'var',
    },
  },
  // Add more concepts as needed
];

export default conceptsData;