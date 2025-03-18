import { Question, PersonalityType } from '../types';

export const careerQuestions: Question[] = [
  {
    id: 1,
    text: "How do you typically handle challenging work situations?",
    options: [
      { text: "I often doubt my abilities to handle them", score: 1, icon: "😟" },
      { text: "I seek help from others before trying", score: 2, icon: "🤝" },
      { text: "I try my best but feel uncertain", score: 3, icon: "🤔" },
      { text: "I face them with determination", score: 4, icon: "💪" },
      { text: "I see them as growth opportunities", score: 5, icon: "🚀" }
    ]
  },
  {
    id: 2,
    text: "When receiving feedback at work, how do you usually respond?",
    options: [
      { text: "Take it personally and feel discouraged", score: 1, icon: "😔" },
      { text: "Feel anxious but try to listen", score: 2, icon: "😅" },
      { text: "Accept it with some reservation", score: 3, icon: "🤨" },
      { text: "Welcome it as learning opportunity", score: 4, icon: "📝" },
      { text: "Actively seek it for growth", score: 5, icon: "📈" }
    ]
  },
  {
    id: 3,
    text: "How do you feel about presenting your ideas in meetings?",
    options: [
      { text: "Extremely nervous, prefer to stay quiet", score: 1, icon: "🤐" },
      { text: "Speak up only when necessary", score: 2, icon: "😶" },
      { text: "Comfortable with small groups", score: 3, icon: "👥" },
      { text: "Confident in most situations", score: 4, icon: "🎯" },
      { text: "Love sharing and leading discussions", score: 5, icon: "🎤" }
    ]
  },
  {
    id: 4,
    text: "When facing a new career opportunity, what's your typical response?",
    options: [
      { text: "Fear of not being good enough", score: 1, icon: "😨" },
      { text: "Hesitate and overthink", score: 2, icon: "🤯" },
      { text: "Carefully weigh pros and cons", score: 3, icon: "⚖️" },
      { text: "Feel excited about the challenge", score: 4, icon: "✨" },
      { text: "Confidently embrace the opportunity", score: 5, icon: "🌟" }
    ]
  }
];

export const confidenceProfiles: PersonalityType[] = [
  {
    type: "Emerging Confidence",
    description: "You're at the beginning of your confidence journey. Remember that self-doubt is normal, but it shouldn't hold you back. Focus on small wins and celebrate your progress. Try setting achievable daily goals to build momentum.",
    scoreRange: { min: 4, max: 8 },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    tips: [
      "Start a daily achievement journal",
      "Practice positive self-talk",
      "Set small, achievable goals",
      "Seek mentorship opportunities"
    ]
  },
  {
    type: "Growing Confidence",
    description: "You're developing a healthy sense of confidence in your abilities. While you may face moments of doubt, you're learning to trust your judgment. Continue building on this foundation by taking calculated risks.",
    scoreRange: { min: 9, max: 13 },
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    tips: [
      "Take on stretch assignments",
      "Share your knowledge with others",
      "Build your professional network",
      "Document your successes"
    ]
  },
  {
    type: "Established Confidence",
    description: "You possess a strong sense of career confidence! Your belief in your abilities serves you well in professional settings. You're ready to take on leadership roles and mentor others.",
    scoreRange: { min: 14, max: 20 },
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop",
    tips: [
      "Mentor others in your field",
      "Seek leadership opportunities",
      "Share your expertise publicly",
      "Set ambitious career goals"
    ]
  }
];