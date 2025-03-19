import { motion } from 'framer-motion';

interface GenderSelectProps {
  value: 'male' | 'female';
  onChange: (gender: 'male' | 'female') => void;
  onNext: () => void;
}

export const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Please select your gender</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
        <button
          onClick={() => {
            onChange('male');
            onNext();
          }}
          className={`gender-option ${value === 'male' ? 'gender-option-selected' : ''}`}
        >
          <img
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=300&fit=crop"
            alt="Male"
            className="w-full h-24 sm:h-36 md:h-48 object-cover rounded-lg mb-2 sm:mb-4"
          />
          <span className="text-base sm:text-xl">👨 Male</span>
        </button>
        <button
          onClick={() => {
            onChange('female');
            onNext();
          }}
          className={`gender-option ${value === 'female' ? 'gender-option-selected' : ''}`}
        >
          <img
            src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&fit=crop"
            alt="Female"
            className="w-full h-24 sm:h-36 md:h-48 object-cover rounded-lg mb-2 sm:mb-4"
          />
          <span className="text-base sm:text-xl">👩 Female</span>
        </button>
      </div>
    </motion.div>
  );
};