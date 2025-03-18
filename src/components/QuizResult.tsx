import { motion } from 'framer-motion';
import { Share2, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { PersonalityType, UserData } from '../types';

interface QuizResultProps {
  result: PersonalityType;
  userData: UserData;
}

export const QuizResult: React.FC<QuizResultProps> = ({ result, userData }) => {
  return (
    <motion.div
      className="result-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <img
        src={result.image}
        alt={result.type}
        className="result-image"
      />
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        {userData.firstName}, you are: {result.type} ✨
      </h2>
      <p className="text-gray-600 mb-8">{result.description}</p>
      
      <div className="space-y-4">
        <p className="font-semibold">Share your results!</p>
        <div className="flex justify-center gap-4">
          <button className="share-button text-blue-600">
            <Facebook size={24} />
          </button>
          <button className="share-button text-blue-400">
            <Twitter size={24} />
          </button>
          <button className="share-button text-blue-700">
            <Linkedin size={24} />
          </button>
          <button className="share-button text-green-500">
            <MessageCircle size={24} />
          </button>
          <button className="share-button text-gray-600">
            <Share2 size={24} />
          </button>
        </div>
      </div>
      
      <button className="primary-button mt-8">
        🎁 Claim Your Free Gift!
      </button>
    </motion.div>
  );
};