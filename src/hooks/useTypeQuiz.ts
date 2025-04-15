import { useState } from 'react';
import { QuizState, UserData, OnboardingData, QuizStep } from '../types';
import { personalityTypes } from '../data/typeQuizData';
import { quizService } from '../services/quiz.service';

// Create type mapping to convert short type names to display names
const typeDisplayNames: Record<string, string> = {
  "Nurturing Navigator": "The Nurturing Navigator Mom",
  "Structured Stability": "The Structured Stability Mom",
  "Wisdom Cultivator": "The Wisdom Cultivator Mom",
  "Adventure Catalyst": "The Adventure Catalyst Mom",
  "Empowered Advocate": "The Empowered Advocate Mom"
};

export const useTypeQuiz = () => {
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    currentQuestion: 0,
    answers: [],
    onboardingData: {
      firstName: '',
      gender: null,
      ageGroup: null
    }
  });

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: null,
    ageGroup: null
  });

  const [result, setResult] = useState<any>(null);
  const [typeCounts, setTypeCounts] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = (type: string) => {
    const newAnswers = [...state.answers, type];
    const nextQuestion = state.currentQuestion + 1;
    const isLastQuestion = nextQuestion >= 10; // We have 10 questions (0-9)
    
    setState((prev: QuizState) => ({
      ...prev,
      answers: newAnswers,
      currentQuestion: isLastQuestion ? prev.currentQuestion : nextQuestion,
      step: isLastQuestion ? 'form' : 'questions'
    }));
  };

  const calculateResult = () => {
    // Count frequency of each type in answers
    const counts: Record<string, number> = state.answers.reduce((acc: Record<string, number>, type: string) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Find the most frequent type
    let maxCount = 0;
    let dominantType = "";

    Object.entries(counts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        dominantType = type;
      }
    });

    // Calculate percentage of dominance
    const totalQuestions = state.answers.length;
    const dominancePercentage = totalQuestions > 0 ? (maxCount / totalQuestions) * 100 : 0;

    // Get the profile for the dominant type
    const profile = personalityTypes.find(p => p.type === dominantType) || personalityTypes[0];
    
    // Add display name to profile
    const displayProfile = {
      ...profile,
      displayName: typeDisplayNames[profile.type] || profile.type
    };

    return { 
      profile: displayProfile, 
      dominantType, 
      dominancePercentage, 
      typeCounts: counts 
    };
  };

  const updateOnboarding = (data: Partial<OnboardingData>) => {
    setState((prev: QuizState) => ({
      ...prev,
      onboardingData: { ...prev.onboardingData, ...data }
    }));
  };

  const nextStep = () => {
    setState((prev: QuizState) => {
      const steps: QuizStep[] = ['welcome', 'name', 'age', 'questions', 'form', 'result'];
      const currentIndex = steps.indexOf(prev.step);
      const nextStep = steps[currentIndex + 1];
      
      // Automatically set gender to female
      if (prev.step === 'name') {
        updateOnboarding({ gender: 'female' });
      }
      
      return { ...prev, step: nextStep };
    });
  };

  const handleFormSubmit = async (formData: Partial<UserData>) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const fullUserData = {
        ...userData,
        ...state.onboardingData,
        ...formData,
        ageGroup: formData.ageGroup || userData.ageGroup || state.onboardingData.ageGroup || null
      };

      const { profile, typeCounts: counts, dominantType } = calculateResult();
      setResult(profile);
      setTypeCounts(counts);

      try {
        // Try to save to server but don't block moving to results if it fails
        await quizService.saveQuizResults(
          fullUserData,
          0, // No score in type framework
          dominantType,
          state.answers.map(_ => 0) // Convert type answers to scores (all 0)
        );
      } catch (serverError) {
        console.error('Error saving quiz results to server:', serverError);
        setError('Failed to save quiz results, but your results are still available.');
        // Continue to results page despite the error
      }

      // Always move to results page, even if saving to server fails
      setState((prev: QuizState) => ({ ...prev, step: 'result' }));
    } catch (err) {
      console.error('Error calculating quiz results:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    state,
    userData,
    result,
    typeCounts,
    isSubmitting,
    error,
    handleAnswer,
    handleFormSubmit,
    calculateResult,
    setUserData,
    updateOnboarding,
    nextStep
  };
}; 