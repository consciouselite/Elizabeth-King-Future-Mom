import { motion } from 'framer-motion';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (score: number) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="question-text">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedAnswer === option.score ? 'option-button-selected' : ''
            }`}
            onClick={() => onSelectAnswer(option.score)}
          >
            <span className="text-2xl">{option.icon}</span>
            <span>{option.text}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};