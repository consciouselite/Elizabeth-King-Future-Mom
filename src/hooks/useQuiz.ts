import { useState } from 'react';
import { QuizState, PersonalityType, UserData, OnboardingData } from '../types/quiz';
import { confidenceProfiles } from '../data/careerQuizData';
import { quizService } from '../services/quiz.service';

export const useQuiz = () => {
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    currentQuestion: 0,
    answers: [],
    onboardingData: {
      firstName: '',
      gender: 'female',
      ageGroup: '26-35'
    }
  });

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'female',
    ageGroup: '26-35'
  });

  const [result, setResult] = useState<PersonalityType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = (score: number) => {
    const newAnswers = [...state.answers, score];
    setState(prev => ({
      ...prev,
      answers: newAnswers,
      currentQuestion: prev.currentQuestion + 1,
      step: prev.currentQuestion === 3 ? 'form' : 'questions'
    }));
  };

  const calculateResult = () => {
    const totalScore = state.answers.reduce((sum, score) => sum + score, 0);
    const profile = confidenceProfiles.find(
      p => totalScore >= p.scoreRange.min && totalScore <= p.scoreRange.max
    ) || confidenceProfiles[0];
    return { score: totalScore, profile };
  };

  const updateOnboarding = (data: Partial<OnboardingData>) => {
    setState(prev => ({
      ...prev,
      onboardingData: { ...prev.onboardingData, ...data }
    }));
  };

  const nextStep = () => {
    setState(prev => {
      const steps: QuizState['step'][] = ['welcome', 'name', 'gender', 'age', 'questions', 'form', 'result'];
      const currentIndex = steps.indexOf(prev.step);
      const nextStep = steps[currentIndex + 1];
      return { ...prev, step: nextStep };
    });
  };

  const handleFormSubmit = async (formData: Partial<UserData>) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const fullUserData: UserData = {
        ...userData,
        ...state.onboardingData,
        ...formData
      };

      const { score, profile } = calculateResult();
      setResult(profile);

      await quizService.saveQuizResults(
        fullUserData,
        score,
        profile.type,
        state.answers
      );

      setState(prev => ({ ...prev, step: 'result' }));
    } catch (err) {
      console.error('Error submitting quiz:', err);
      setError('Failed to save quiz results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    state,
    userData,
    result,
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