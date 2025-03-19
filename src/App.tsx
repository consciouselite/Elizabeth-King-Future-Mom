import { AnimatePresence } from 'framer-motion';
import { QuizProgress } from './components/QuizProgress';
import { QuizQuestion } from './components/QuizQuestion';
import { LeadForm } from './components/LeadForm';
import { QuizResult } from './components/results/QuizResult';
import { NameInput } from './components/onboarding/NameInput';
import { GenderSelect } from './components/onboarding/GenderSelect';
import { AgeSelect } from './components/onboarding/AgeSelect';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { careerQuestions } from './data/careerQuizData';
import { useQuiz } from './hooks/useQuiz';
import './styles/index.css';

function App() {
  const {
    state,
    userData,
    result,
    handleAnswer,
    handleFormSubmit,
    calculateResult,
    setUserData,
    updateOnboarding,
    nextStep
  } = useQuiz();

  const handleFormChange = (field: keyof typeof userData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 md:py-12 px-2 sm:px-4">
      <div className="quiz-container">
        {state.step !== 'welcome' && (
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
            alt="Career Coach"
            className="coach-image"
          />
        )}

        <AnimatePresence mode="wait">
          {state.step === 'welcome' && (
            <WelcomeScreen onStart={nextStep} />
          )}
          
          {state.step === 'form' && (
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-4 text-center">Where should we send you your results?</h2>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && state.step !== 'form' && (
            <h1 className="quiz-title">Discover Your Career Confidence Level</h1>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'form' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && (
            <p className="quiz-subtitle">
              Take this quiz to understand your professional self-confidence and get personalized tips! 😊
            </p>
          )}

          {state.step === 'name' && (
            <NameInput
              value={state.onboardingData.firstName}
              onChange={(name) => updateOnboarding({ firstName: name })}
              onNext={nextStep}
            />
          )}

          {state.step === 'gender' && (
            <GenderSelect
              value={state.onboardingData.gender}
              onChange={(gender) => updateOnboarding({ gender })}
              onNext={nextStep}
            />
          )}

          {state.step === 'age' && (
            <AgeSelect
              value={state.onboardingData.ageGroup}
              onChange={(ageGroup) => updateOnboarding({ ageGroup })}
              onNext={nextStep}
            />
          )}

          {state.step === 'questions' && (
            <>
              <QuizProgress
                currentQuestion={state.currentQuestion + 1}
                totalQuestions={careerQuestions.length}
              />
              <QuizQuestion
                key={state.currentQuestion}
                question={{
                  ...careerQuestions[state.currentQuestion],
                  text: careerQuestions[state.currentQuestion].text.replace(
                    '{firstName}',
                    state.onboardingData.firstName
                  )
                }}
                selectedAnswer={null}
                onSelectAnswer={handleAnswer}
              />
            </>
          )}

          {state.step === 'form' && (
            <LeadForm
              userData={userData}
              onSubmit={handleFormSubmit}
              onChange={handleFormChange}
            />
          )}

          {state.step === 'result' && result && (
            <QuizResult
              result={result}
              userData={userData}
              score={calculateResult().score}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;