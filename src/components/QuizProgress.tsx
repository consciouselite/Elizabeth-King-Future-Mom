import { motion } from 'framer-motion';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progress-bar">
      <motion.div
        className="progress-fill"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};