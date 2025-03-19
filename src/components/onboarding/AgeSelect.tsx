import { motion } from 'framer-motion';

interface AgeSelectProps {
  value: string;
  onChange: (age: '18-25' | '26-35' | '36-45' | '46+') => void;
  onNext: () => void;
}

const ageGroups = [
  {
    range: '18-25',
    icon: '🔵',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
    title: '18-25 years'
  },
  {
    range: '26-35',
    icon: '🟢',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=300&fit=crop',
    title: '26-35 years'
  },
  {
    range: '36-45',
    icon: '🟡',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    title: '36-45 years'
  },
  {
    range: '46+',
    icon: '🔴',
    image: 'https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b9?w=400&h=300&fit=crop',
    title: '46+ years'
  }
] as const;

export const AgeSelect: React.FC<AgeSelectProps> = ({ value, onChange, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Which age group do you belong to?</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
        {ageGroups.map((group) => (
          <button
            key={group.range}
            onClick={() => {
              onChange(group.range);
              onNext();
            }}
            className={`age-option ${value === group.range ? 'age-option-selected' : ''}`}
          >
            <img
              src={group.image}
              alt={group.title}
              className="w-full h-20 sm:h-28 md:h-32 object-cover rounded-lg mb-2 sm:mb-3"
            />
            <span className="text-sm sm:text-lg">
              {group.icon} {group.title}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};