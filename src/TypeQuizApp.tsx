import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuizProgress } from './components/QuizProgress';
import { TypeQuizQuestion } from './components/TypeQuizQuestion';
import { LeadForm } from './components/LeadForm';
import { TypeQuizResult } from './components/results/TypeQuizResult';
import { NameInput } from './components/onboarding/NameInput';
import { GenderSelect } from './components/onboarding/GenderSelect';
import { AgeSelect } from './components/onboarding/AgeSelect';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { typeQuestions, quizTitle, quizSubtitle } from './data/typeQuizData';
import { useTypeQuiz } from './hooks/useTypeQuiz';
import { UserData } from './types';
import './styles/index.css';

// Define animation variants for transitions
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

// Elizabeth's profile image URL
const COACH_PROFILE_IMAGE = "https://nrojbwxcqochzwhmmkql.supabase.co/storage/v1/object/sign/coaches-profile-images/Elizabeth%20King%20PP.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb2FjaGVzLXByb2ZpbGUtaW1hZ2VzL0VsaXphYmV0aCBLaW5nIFBQLnBuZyIsImlhdCI6MTc0MzUxNzEzMCwiZXhwIjoxNzc1MDUzMTMwfQ.J8kyDe9RYhULcMAR_dXYlqAY0NAc2w1J24c1kMe_7Lg";

function TypeQuizApp() {
  const {
    state,
    userData,
    result,
    typeCounts,
    isSubmitting,
    error,
    handleAnswer,
    handleFormSubmit,
    setUserData,
    updateOnboarding,
    nextStep
  } = useTypeQuiz();
  
  const [showRetakeMessage, setShowRetakeMessage] = useState(false);

  // Add favicon
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = COACH_PROFILE_IMAGE;
      document.head.appendChild(newLink);
    } else {
      link.href = COACH_PROFILE_IMAGE;
    }
  }, []);

  // Monitor error state and show error notifications
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [error]);

  // Custom form submit handler with error handling
  const handleFormSubmitWithFeedback = async (formData: Partial<UserData>) => {
    try {
      await handleFormSubmit(formData);
      // Show success notification when we don't get an error
      if (!error) {
        toast.success("Your results are ready!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (err) {
      // This is a fallback in case error handling in the hook fails
      toast.error("There was a problem submitting your information. Your results are still available.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Even if saving to server fails, show the results
      if (state.step === 'form') {
        nextStep();
      }
    }
  };

  const handleFormChange = (field: keyof typeof userData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };
  
  // Function to handle quiz retake attempt
  const handleRetakeAttempt = () => {
    // Show message to user
    toast.info("You've already completed the quiz. Your results are shown below. Sharing is available at the bottom of the page.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setShowRetakeMessage(true);
    
    // Scroll to results section
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Helper function to process text with markdown formatting
  const formatText = (text: string) => {
    // Replace bold markdown with HTML
    let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Replace italic markdown with HTML
    formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
    return formattedText;
  };

  return (
    <div className="min-h-screen py-12 px-4" style={{ backgroundColor: 'white' }}>
      <ToastContainer />
      <div className="quiz-container">
        {state.step !== 'welcome' && (
          <img
            src={COACH_PROFILE_IMAGE}
            alt="Coach Elizabeth"
            className="coach-image"
          />
        )}

        <AnimatePresence mode="wait">
          {state.step === 'welcome' && (
            <motion.div
              key="welcome"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <WelcomeScreen 
                onStart={nextStep}
                coachImage={COACH_PROFILE_IMAGE}
              />
            </motion.div>
          )}
          
          {state.step === 'form' && (
            <motion.h2 
              key="form-title"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--primary-700)' }}
            >
              Where should we send you your results?
            </motion.h2>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && state.step !== 'form' && (
            <motion.h1 
              key="quiz-title"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="quiz-title"
              dangerouslySetInnerHTML={{ __html: formatText(quizTitle) }}
            />
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && state.step !== 'form' && (
            <motion.p 
              key="quiz-subtitle"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="quiz-subtitle"
              dangerouslySetInnerHTML={{ __html: formatText(quizSubtitle) }}
            />
          )}

          {state.step === 'name' && (
            <motion.div
              key="name-input"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <NameInput
                value={state.onboardingData.firstName}
                onChange={(name) => updateOnboarding({ firstName: name })}
                onNext={nextStep}
              />
            </motion.div>
          )}

          {state.step === 'age' && (
            <motion.div
              key="age-select"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AgeSelect
                value={state.onboardingData.ageGroup}
                onChange={(ageGroup) => updateOnboarding({ ageGroup })}
                onNext={nextStep}
                selectedGender={state.onboardingData.gender}
              />
            </motion.div>
          )}

          {state.step === 'questions' && (
            <motion.div 
              key="questions-container"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <QuizProgress
                currentQuestion={state.currentQuestion + 1}
                totalQuestions={typeQuestions.length}
              />
              <TypeQuizQuestion
                key={`question-${state.currentQuestion}`}
                question={{
                  ...typeQuestions[state.currentQuestion],
                  text: formatText(typeQuestions[state.currentQuestion].text.replace(
                    '{firstName}',
                    state.onboardingData.firstName
                  ))
                }}
                selectedAnswer={null}
                onSelectAnswer={handleAnswer}
              />
            </motion.div>
          )}

          {state.step === 'form' && (
            <motion.div
              key="lead-form"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <LeadForm
                userData={userData}
                onSubmit={handleFormSubmitWithFeedback}
                onChange={handleFormChange}
                isSubmitting={isSubmitting}
                error={error}
              />
            </motion.div>
          )}

          {state.step === 'result' && result && (
            <motion.div
              key="quiz-result"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <TypeQuizResult
                result={result}
                userData={userData}
                typeCounts={typeCounts}
                formatText={formatText}
              />
              <div className="mt-8 text-center">
                <button
                  onClick={handleRetakeAttempt}
                  className="text-primary-700 underline hover:text-primary-800 transition"
                >
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TypeQuizApp; 