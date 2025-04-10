import React from 'react';
import { UserData } from '../../types';
import { PersonalityType } from '../../types/quizTypes';
import { Share2, MessageCircle, Send } from 'lucide-react';

interface TypeQuizResultProps {
  result: PersonalityType & { displayName?: string; image?: string };
  userData: UserData;
  typeCounts: Record<string, number>;
  formatText?: (text: string) => string;
}

// Updated Unsplash image URLs for mom types
const typeImages: Record<string, string> = {
  "The Nurturing Navigator Mom": "https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "The Structured Stability Mom": "https://images.pexels.com/photos/1648407/pexels-photo-1648407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "The Wisdom Cultivator Mom": "https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "The Adventure Catalyst Mom": "https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "The Empowered Advocate Mom": "https://images.pexels.com/photos/4079281/pexels-photo-4079281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
};

export const TypeQuizResult: React.FC<TypeQuizResultProps> = ({
  result,
  userData,
  typeCounts,
  formatText = (text) => text // Default implementation if not provided
}) => {
  // Calculate percentages for visualization
  const totalAnswers = Object.values(typeCounts).reduce((sum, count) => sum + count, 0);
  const typePercentages = Object.entries(typeCounts).map(([type, count]) => ({
    type,
    percentage: Math.round((count / totalAnswers) * 100)
  }));

  // Get emoji based on type
  const getTypeEmoji = (type: string) => {
    if (type.includes('Nurturing')) return '👩‍👧';
    if (type.includes('Structured')) return '👩‍💼';
    if (type.includes('Wisdom')) return '🧠';
    if (type.includes('Adventure')) return '👩‍🚀';
    if (type.includes('Empowered')) return '💪';
    return '👶';
  };

  // Get image based on type
  const getTypeImage = (type: string) => {
    return typeImages[type] || result.image || "https://images.unsplash.com/photo-1581952976147-5a2d15560349?auto=format&fit=crop&w=800&q=80";
  };

  // Create personalized sharing messages
  const emoji = getTypeEmoji(result.type);
  const shareMessage = `${emoji} I just took Elizabeth King's "What Kind of Mom Will You Be?" quiz and discovered I'm "${result.displayName || result.type}"! Curious about your mom style? Take this 2-minute quiz: `;
  const shareUrl = window.location.href;
  
  // Share functions
  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage + shareUrl)}`, '_blank');
  };
  
  const shareOnMessenger = () => {
    window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=181374745748345&redirect_uri=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="quiz-result">
      {/* Type image */}
      <div className="mb-6 text-center">
        <img 
          src={getTypeImage(result.type)} 
          alt={result.type}
          className="rounded-xl shadow-lg mx-auto w-full max-w-md h-48 sm:h-56 object-cover"
        />
      </div>
      
      <h1 className="result-title">
        {userData.firstName}, you are <span className="highlight">{result.displayName || result.type}</span>
      </h1>
      
      <div className="result-description mt-4 mb-6 text-primary-800">
        <p dangerouslySetInnerHTML={{ __html: formatText(result.description) }}></p>
      </div>
      
      <div className="type-distribution my-8">
        <h3 className="text-lg font-semibold mb-4 text-primary-700">Your Mom Type Breakdown:</h3>
        <div className="type-bars">
          {typePercentages.map(({ type, percentage }) => (
            <div key={type} className="type-bar-container mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="type-label font-medium flex items-center gap-2">
                  {getTypeEmoji(type)} {type}
                </span>
                <span>{percentage}%</span>
              </div>
              <div className="h-4 w-full bg-accent-300 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full"
                  style={{ width: `${percentage}%`, backgroundColor: 'var(--primary-700)' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="type-details grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="strengths p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-success-dark flex items-center gap-2">
            <span className="text-xl">✅</span> Your Natural Strengths:
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {result.strengths.map((strength, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: formatText(strength) }}></li>
            ))}
          </ul>
        </div>

        <div className="challenges p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-warning-dark flex items-center gap-2">
            <span className="text-xl">🌱</span> Growth Opportunities:
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {result.challenges.map((challenge, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: formatText(challenge) }}></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="recommendations p-6 rounded-lg my-8">
        <h3 className="text-lg font-semibold mb-4 text-info-dark flex items-center gap-2">
          <span className="text-xl">💡</span> Personalized Strategies:
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          {result.tips.map((tip, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: formatText(tip) }}></li>
          ))}
        </ul>
      </div>

      <div className="cta-section text-center mt-10 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">👩‍👧 Know someone who'd love to discover their mom type? 👩‍👦</h3>
        <p className="mb-6">
          Who in your life would benefit from understanding their natural mom style? Share this quiz with them!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={shareOnWhatsApp}
            className="share-button flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-bold transition shadow-md hover:shadow-lg"
            style={{ backgroundColor: '#25D366' }} // WhatsApp's brand color
          >
            <Share2 size={18} />
            <span>Share on WhatsApp</span>
          </button>
          
          <button 
            onClick={shareOnMessenger}
            className="share-button flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-bold transition shadow-md hover:shadow-lg"
            style={{ backgroundColor: '#0084FF' }} // Messenger's brand color
          >
            <MessageCircle size={18} />
            <span>Share on Messenger</span>
          </button>
        </div>
        
        <p className="mt-6 text-sm italic" style={{ color: 'var(--primary-800)' }}>
          "Understanding your natural mom style is the first step to becoming the mom you were meant to be." - Elizabeth King
        </p>
      </div>
    </div>
  );
};