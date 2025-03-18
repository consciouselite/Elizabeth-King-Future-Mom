import { Question, PersonalityType } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "How do you typically spend your weekends?",
    options: [
      { text: "Staying in, reading or watching movies", score: 1, icon: "📚" },
      { text: "Meeting friends for coffee or brunch", score: 2, icon: "☕" },
      { text: "Mix of social activities and me-time", score: 3, icon: "🎭" },
      { text: "Outdoor adventures and activities", score: 4, icon: "🏃" },
      { text: "Hosting parties or large gatherings", score: 5, icon: "🎉" }
    ]
  },
  {
    id: 2,
    text: "How do you prefer to work on projects?",
    options: [
      { text: "Independently, at my own pace", score: 1, icon: "🎯" },
      { text: "Small group collaboration", score: 2, icon: "👥" },
      { text: "Mix of solo and team work", score: 3, icon: "🤝" },
      { text: "Leading a team", score: 4, icon: "👨‍💼" },
      { text: "Large team collaboration", score: 5, icon: "👥" }
    ]
  },
  {
    id: 3,
    text: "How do you recharge after a long day?",
    options: [
      { text: "Quiet time alone", score: 1, icon: "🧘" },
      { text: "Chat with a close friend", score: 2, icon: "💭" },
      { text: "Light exercise", score: 3, icon: "🚶" },
      { text: "Social media and networking", score: 4, icon: "📱" },
      { text: "Going out with friends", score: 5, icon: "🎊" }
    ],
    reverseScoring: true
  }
];

export const personalityTypes: PersonalityType[] = [
  {
    type: "The Introspective Soul",
    description: "You're a thoughtful individual who values deep connections and meaningful experiences. Your introspective nature allows you to see the world in unique ways.",
    scoreRange: { min: 3, max: 7 },
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&auto=format&fit=crop"
  },
  {
    type: "The Social Butterfly",
    description: "You thrive in social situations and have a natural ability to connect with others. Your energy and enthusiasm are contagious!",
    scoreRange: { min: 8, max: 11 },
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=800&auto=format&fit=crop"
  },
  {
    type: "The Balanced Spirit",
    description: "You maintain a healthy balance between social interaction and personal time. Your adaptable nature helps you thrive in various situations.",
    scoreRange: { min: 12, max: 15 },
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&auto=format&fit=crop"
  }
];