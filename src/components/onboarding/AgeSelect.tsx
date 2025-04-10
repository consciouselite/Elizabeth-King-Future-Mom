import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AgeSelectProps {
  value: string | null;
  onChange: (age: '18-25' | '26-35' | '36-45' | '46+') => void;
  onNext: () => void;
  selectedGender?: 'male' | 'female' | null;
}

// Define age ranges with female images
const ageGroups = [
  {
    range: '18-25',
    icon: '👶',
    image: 'https://images.pexels.com/photos/1447771/pexels-photo-1447771.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '18-25 years'
  },
  {
    range: '26-35',
    icon: '👩‍👦',
    image: 'https://images.pexels.com/photos/325865/pexels-photo-325865.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '26-35 years'
  },
  {
    range: '36-45',
    icon: '👨‍👩‍👧',
    image: 'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '36-45 years'
  },
  {
    range: '46+',
    icon: '👨‍👩‍👧‍👦',
    image: 'https://images.pexels.com/photos/8417210/pexels-photo-8417210.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '46+ years'
  }
] as const;

export const AgeSelect: React.FC<AgeSelectProps> = ({ 
  value, 
  onChange, 
  onNext
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-secondary-800 mb-4 sm:mb-6">Which age group do you belong to?</h2>
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
              className="w-full aspect-square object-cover rounded-lg mb-2 sm:mb-3"
            />
            <span className="text-sm sm:text-lg text-secondary-700">
              {group.icon} {group.title}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};