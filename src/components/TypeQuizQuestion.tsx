import React, { useState, useEffect } from 'react';
import { Question } from '../types/quizTypes';
import { motion } from 'framer-motion';

interface QuizQuestionProps {
  question: Question & { text: string }; // Ensure text is already formatted
  selectedAnswer: string | null;
  onSelectAnswer: (type: string) => void;
}

export const TypeQuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer
}) => {
  // State to hold randomized options
  const [randomizedOptions, setRandomizedOptions] = useState([...question.options]);
  
  // Randomize options when question changes
  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleOptions = [...question.options];
    for (let i = shuffleOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleOptions[i], shuffleOptions[j]] = [shuffleOptions[j], shuffleOptions[i]];
    }
    setRandomizedOptions(shuffleOptions);
  }, [question.id]); // Dependency on question ID ensures randomization on question change

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="quiz-question"
    >
      <h2 
        className="question-text"
        dangerouslySetInnerHTML={{ __html: question.text }}
      />
      
      <div className="options-container space-y-3">
        {randomizedOptions.map((option, index) => (
          <motion.button
            key={index}
            className={`option-button ${
              selectedAnswer === option.type
                ? 'option-button-selected'
                : ''
            }`}
            onClick={() => onSelectAnswer(option.type)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl mr-3">{option.icon}</span>
            <span 
              className="text-base text-left"
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}; 