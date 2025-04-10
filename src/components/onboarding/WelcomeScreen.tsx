import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { quizTitle, quizSubtitle, typeQuestions } from '../../data/typeQuizData';

interface WelcomeScreenProps {
  onStart: () => void;
  coachImage?: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ 
  onStart, 
  coachImage = "https://nrojbwxcqochzwhmmkql.supabase.co/storage/v1/object/sign/coaches-profile-images/Elizabeth%20King%20PP.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb2FjaGVzLXByb2ZpbGUtaW1hZ2VzL0VsaXphYmV0aCBLaW5nIFBQLnBuZyIsImlhdCI6MTc0MzUxNzEzMCwiZXhwIjoxNzc1MDUzMTMwfQ.J8kyDe9RYhULcMAR_dXYlqAY0NAc2w1J24c1kMe_7Lg" 
}) => {
  // Strip the [QUIZ] suffix from the title if present
  const displayTitle = quizTitle.replace('[QUIZ]', '').trim();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-lg mx-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-4 sm:mb-8"
      >
        <img 
          src={coachImage}
          alt="Coach Elizabeth" 
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mx-auto shadow-lg border-4 object-cover"
          style={{ borderColor: 'var(--primary-700)' }}
        />
      </motion.div>
      
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{ 
          background: 'linear-gradient(135deg, var(--primary-700) 0%, var(--primary-800) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {displayTitle}
      </motion.h1>
      
      <motion.p
        className="text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto px-2 sm:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ color: 'var(--primary-900)' }}
      >
        {quizSubtitle}
      </motion.p>
      
      <motion.div
        className="space-y-2 sm:space-y-3 mb-6 sm:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-700)' }}></div>
          <span className="text-sm sm:text-base" style={{ color: 'var(--primary-800)' }}>{typeQuestions.length} simple questions</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-700)' }}></div>
          <span className="text-sm sm:text-base" style={{ color: 'var(--primary-800)' }}>Takes only 2 minutes</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-700)' }}></div>
          <span className="text-sm sm:text-base" style={{ color: 'var(--primary-800)' }}>Get instant results</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 sm:mt-8"
      >
        <button
          onClick={onStart}
          className="primary-button flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 mx-auto text-base sm:text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          style={{ 
            background: 'linear-gradient(135deg, var(--primary-700) 0%, var(--primary-800) 100%)'
          }}
        >
          <span>Get Started</span>
          <ArrowRight size={18} className="inline-block" />
        </button>
      </motion.div>
      
      <motion.p
        className="mt-6 sm:mt-8 text-xs sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2 }}
        style={{ color: 'var(--secondary-700)' }}
      >
        Join thousands of women discovering their natural mom style with Elizabeth King
      </motion.p>
    </motion.div>
  );
}; 