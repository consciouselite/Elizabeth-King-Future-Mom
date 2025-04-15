import { Question, PersonalityType } from '../types/quizTypes';

// Quiz title and subtitle
export const quizTitle = "What Kind of Mom Will You Be? [QUIZ]";
export const quizSubtitle = "Discover your natural mom style (and why it explains EVERYTHING about how you'll rock motherhood)";

// Questions array with type-specific options
export const typeQuestions: Question[] = [
  {
    id: 1,
    text: "It's 3 AM and your baby is crying for the third time tonight. What's your FIRST instinct?",
    options: [
      {
        text: "Let me hold you close and figure out what you're feeling, sweet one",
        type: "Nurturing Navigator",
        icon: "👋",
      },
      {
        text: "Let's check if it's time for a feeding or change - we need to get back on schedule",
        type: "Structured Stability",
        icon: "📋",
      },
      {
        text: "I wonder what developmental phase is causing this sleep regression...",
        type: "Wisdom Cultivator",
        icon: "🧠",
      },
      {
        text: "Midnight dance party it is! If we're up, might as well make it fun!",
        type: "Adventure Catalyst",
        icon: "🌟",
      },
      {
        text: "This is why we need better parental leave policies - nobody should do this alone",
        type: "Empowered Advocate",
        icon: "✊",
      },
    ],
  },
  {
    id: 2,
    text: "Your kid just dumped an entire box of cereal on the floor during your busiest morning. What's your reaction?",
    options: [
      {
        text: "Oh sweetie, I see you were trying to be independent. How does this mess make you feel?",
        type: "Nurturing Navigator",
        icon: "❤️",
      },
      {
        text: "Quick clean-up routine! We've got 5 minutes to get this sorted before we leave",
        type: "Structured Stability",
        icon: "🧹",
      },
      {
        text: "Let's talk about what happens when cereal spills - this is actually a cool physics lesson",
        type: "Wisdom Cultivator",
        icon: "📚",
      },
      {
        text: "CEREAL SNOWBALL FIGHT! (then we'll clean it together)",
        type: "Adventure Catalyst",
        icon: "🎉",
      },
      {
        text: "This is why I've been pushing for breakfast stations where kids can serve themselves safely",
        type: "Empowered Advocate",
        icon: "🔄",
      },
    ],
  },
  {
    id: 3,
    text: "{firstName}, when picking out books for your child, you're naturally drawn to stories about:",
    options: [
      {
        text: "Characters exploring big emotions and learning emotional intelligence",
        type: "Nurturing Navigator",
        icon: "🐻",
      },
      {
        text: "Daily routines, predictable patterns, and orderly worlds",
        type: "Structured Stability",
        icon: "🚂",
      },
      {
        text: "Curious characters who ask \"why\" and discover how things work",
        type: "Wisdom Cultivator",
        icon: "🔍",
      },
      {
        text: "Wild adventures, unexpected journeys, and magical possibilities",
        type: "Adventure Catalyst",
        icon: "🚀",
      },
      {
        text: "Diverse characters who stand up for what's right and make a difference",
        type: "Empowered Advocate",
        icon: "⚖️",
      },
    ],
  },
  {
    id: 4,
    text: "You're designing your dream nursery/kid's room. What's the MUST-HAVE element?",
    options: [
      {
        text: "A super cozy reading nook with pillows for snuggling during stories",
        type: "Nurturing Navigator",
        icon: "💕",
      },
      {
        text: "Smart storage systems with labels so everything has its perfect place",
        type: "Structured Stability",
        icon: "🗂️",
      },
      {
        text: "An interactive learning wall with rotating educational elements",
        type: "Wisdom Cultivator",
        icon: "📊",
      },
      {
        text: "A tent/fort/canopy that transforms the space into different worlds",
        type: "Adventure Catalyst",
        icon: "🏕️",
      },
      {
        text: "Diverse books and toys that represent many cultures and family structures",
        type: "Empowered Advocate",
        icon: "🌍",
      },
    ],
  },
  {
    id: 5,
    text: "Your parenting philosophy could best be summed up with which quote?",
    options: [
      {
        text: "\"Children will never remember you for the material things you provided, but for the feeling that you cherished them\"",
        type: "Nurturing Navigator",
        icon: "💫",
      },
      {
        text: "\"Routine gives children a sense of security and helps them develop self-discipline\"",
        type: "Structured Stability",
        icon: "🔄",
      },
      {
        text: "\"The greatest gift you can give your child is the roots of responsibility and wings of independence\"",
        type: "Wisdom Cultivator",
        icon: "💡",
      },
      {
        text: "\"Childhood is not a race to see how quickly a child can read, write and count. It is a small window of time to learn and develop at the pace that is right for each individual child\"",
        type: "Adventure Catalyst",
        icon: "✨",
      },
      {
        text: "\"If you want your children to turn out well, spend twice as much time with them and half as much money\"",
        type: "Empowered Advocate",
        icon: "🌱",
      },
    ],
  },
  {
    id: 6,
    text: "Your toddler is having a FULL meltdown in the grocery store. You:",
    options: [
      {
        text: "Get down on their level, validate their feelings, and create a calm space together",
        type: "Nurturing Navigator",
        icon: "🧘",
      },
      {
        text: "Recognize it's past snack time in your schedule and pull out the emergency snack you packed",
        type: "Structured Stability",
        icon: "🗓️",
      },
      {
        text: "Give them choices to help them regain a sense of control over the situation",
        type: "Wisdom Cultivator",
        icon: "🔄",
      },
      {
        text: "Turn it into a silly game or unexpected adventure to shift the energy",
        type: "Adventure Catalyst",
        icon: "🎵",
      },
      {
        text: "Ignore the judgmental looks - you know all kids have meltdowns and it's perfectly normal",
        type: "Empowered Advocate",
        icon: "👊",
      },
    ],
  },
  {
    id: 7,
    text: "{firstName}, which TV/movie mom do you secretly relate to most?",
    options: [
      {
        text: "Beth Pearson from This Is Us (emotionally attuned, creates safe space)",
        type: "Nurturing Navigator",
        icon: "👑",
      },
      {
        text: "Claire Dunphy from Modern Family (organized, systems for everything)",
        type: "Structured Stability",
        icon: "🏆",
      },
      {
        text: "Dr. Bailey from Grey's Anatomy (teaching moments, straight talk)",
        type: "Wisdom Cultivator",
        icon: "🔬",
      },
      {
        text: "Linda Belcher from Bob's Burgers (enthusiastic, turns everything into an adventure)",
        type: "Adventure Catalyst",
        icon: "🎭",
      },
      {
        text: "Kristina Braverman from Parenthood (fierce advocate for her kids' needs)",
        type: "Empowered Advocate",
        icon: "💪",
      },
    ],
  },
  {
    id: 8,
    text: "Your child comes home upset because they weren't invited to a classmate's birthday party. Your response?",
    options: [
      {
        text: "\"I can see this really hurt your feelings. Let's talk about it and have a special mom-kid date instead\"",
        type: "Nurturing Navigator",
        icon: "💔",
      },
      {
        text: "\"Let's plan something fun for that day so you have something special to look forward to\"",
        type: "Structured Stability",
        icon: "🗓️",
      },
      {
        text: "\"Sometimes friendships get complicated. What ideas do you have for handling this situation?\"",
        type: "Wisdom Cultivator",
        icon: "🧩",
      },
      {
        text: "\"Their loss! Let's have our own EPIC adventure that day that'll be way more awesome!\"",
        type: "Adventure Catalyst",
        icon: "🌈",
      },
      {
        text: "\"Everyone deserves to feel included. Should we host an inclusive event for the whole class soon?\"",
        type: "Empowered Advocate",
        icon: "🛡️",
      },
    ],
  },
  {
    id: 9,
    text: "You've got an entire day free with your child. What are you MOST excited to do together?",
    options: [
      {
        text: "Cuddle marathon with books, talks about feelings, and connecting deeply",
        type: "Nurturing Navigator",
        icon: "🛌",
      },
      {
        text: "Finally tackle that fun organizing project together and create a new family system",
        type: "Structured Stability",
        icon: "🏡",
      },
      {
        text: "Visit a museum, nature center, or try experiments that spark great questions",
        type: "Wisdom Cultivator",
        icon: "🔭",
      },
      {
        text: "Spontaneous road trip! Let's see where the day takes us!",
        type: "Adventure Catalyst",
        icon: "🧳",
      },
      {
        text: "Volunteer together at the community garden or local food bank",
        type: "Empowered Advocate",
        icon: "🍽️",
      },
    ],
  },
  {
    id: 10,
    text: "{firstName}, when you imagine yourself as a mom, which of these thoughts feels MOST true?",
    options: [
      {
        text: "\"I want my child to always feel emotionally safe with me, no matter what\"",
        type: "Nurturing Navigator",
        icon: "💝",
      },
      {
        text: "\"I'll create a home with predictable routines where my child feels secure\"",
        type: "Structured Stability",
        icon: "🏠",
      },
      {
        text: "\"I'll help my child develop critical thinking skills to navigate life's complexity\"",
        type: "Wisdom Cultivator",
        icon: "🔦",
      },
      {
        text: "\"We're going to have the most magical, fun adventures together\"",
        type: "Adventure Catalyst",
        icon: "🪄",
      },
      {
        text: "\"I'll raise a child who stands up for themselves and others\"",
        type: "Empowered Advocate",
        icon: "🌻",
      },
    ],
  },
];

// Personality type definitions - adapted from mom types
export const personalityTypes: PersonalityType[] = [
  {
    type: "Nurturing Navigator",
    description:
      "You're an emotional genius when it comes to motherhood. For you, parenting isn't about schedules or achievements—it's about the soul-deep connection that happens in those quiet moments when your child feels completely seen and heard by you.",
    strengths: [
      "You can read your kid's emotional state better than anyone",
      "You create emotional sanctuaries everywhere you go",
      "You help children develop strong emotional intelligence",
      "You build secure attachment relationships naturally",
      "You normalize talking about feelings instead of stuffing them down"
    ],
    challenges: [
      "Learning to set necessary boundaries while maintaining connection",
      "Finding balance between emotional processing and practical life skills",
      "Allowing children to experience manageable struggles without rescuing",
      "Avoiding tendency to prioritize emotional comfort over reasonable expectations",
      "Distinguishing between emotional support and emotional enmeshment"
    ],
    tips: [
      "Remember that emotional resilience develops through experiencing manageable challenges",
      "Create specific times for emotional check-ins rather than processing 24/7",
      "Teach emotional vocabulary alongside problem-solving strategies",
      "Find ways to honor emotions while still maintaining necessary boundaries",
      "Practice self-care to replenish your emotional resources"
    ],
    image: "https://images.pexels.com/photos/5119802/pexels-photo-5119802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "Structured Stability",
    description:
      "Wow, you're the reason your family functions! While everyone else is flailing around wondering what's for dinner, you've already planned meals for the week, organized the carpool schedule, and created a chore chart that actually works.",
    strengths: [
      "You create secure, predictable environments where kids thrive",
      "Your organizational skills prevent unnecessary family stress",
      "You maintain family traditions that create lasting memories",
      "You navigate transitions smoothly through preparation",
      "You model executive functioning skills that benefit kids for life"
    ],
    challenges: [
      "Developing flexibility when plans inevitably change",
      "Finding balance between structure and spontaneity",
      "Allowing for appropriate risk-taking and natural consequences",
      "Distinguishing between helpful structure and overly rigid expectations",
      "Adapting systems as children grow and develop more independence"
    ],
    tips: [
      "Build 'flexibility time' into your schedules to practice adaptability",
      "Create systems that allow for choice within structure",
      "Remember that childhood development is messy and rarely follows a perfect plan",
      "Schedule spontaneous time—yes, that sounds contradictory, but it works!",
      "Focus on the purpose behind routines rather than perfect execution"
    ],
    image: "https://images.pexels.com/photos/6212713/pexels-photo-6212713.jpeg",
  },
  {
    type: "Wisdom Cultivator",
    description:
      "You're raising tiny philosophers, and it's brilliant. While other parents are answering questions, you're asking them right back—\"Well, what do YOU think happens when we die?\"—and watching your kid's mind explode with possibilities.",
    strengths: [
      "You foster critical thinking and independent reasoning",
      "You naturally develop children's curiosity and love of learning",
      "You help children develop strong decision-making skills",
      "You create a home atmosphere that values intellectual exploration",
      "You help children develop their own moral compass through reasoning"
    ],
    challenges: [
      "Recognizing when simple answers are more appropriate than deep discussions",
      "Finding balance between intellectual development and emotional connection",
      "Accepting that some family rules may need to be followed without debate",
      "Allowing for the developmental reality that children can't always reason like adults",
      "Avoiding tendency to overexplain or intellectualize emotional matters"
    ],
    tips: [
      "Balance 'why' questions with emotional validation and connection",
      "Create a 'question time' for deeper topics that need more discussion",
      "Remember that children need both guidance and independence",
      "Practice giving direct answers when appropriate, especially for safety issues",
      "Use stories and metaphors to make complex ideas developmentally accessible"
    ],
    image: "https://images.pexels.com/photos/10565684/pexels-photo-10565684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "Adventure Catalyst",
    description:
      "You're the mom other kids wish they had, and that's not an exaggeration. Your approach to motherhood? Make. It. MAGICAL. Why have breakfast when you can have a pancake picnic on the living room floor? Why drive the normal route when you can take the \"scenic adventure path\" that's only 10 minutes longer?",
    strengths: [
      "You create magical childhood memories through everyday adventures",
      "You naturally cultivate a sense of wonder and possibility",
      "You help children develop adaptability and openness to new experiences",
      "You create a home atmosphere filled with joy and anticipation",
      "You help children see the extraordinary in ordinary moments"
    ],
    challenges: [
      "Developing consistent routines to balance the spontaneity",
      "Finding equilibrium between excitement and necessary structure",
      "Recognizing when children need predictability over surprise",
      "Distinguishing between enriching adventures and overwhelming stimulation",
      "Managing the practical aftermath of adventurous undertakings"
    ],
    tips: [
      "Create some predictable rhythms that children can count on",
      "Consider the 'adventure cleanup plan' before launching into messy fun",
      "Watch for signs that your child might need some calm, predictable time",
      "Balance big adventures with small, manageable moments of magic",
      "Remember that adventure doesn't always mean going somewhere—it's a mindset"
    ],
    image: "https://images.pexels.com/photos/1157399/pexels-photo-1157399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "Empowered Advocate",
    description:
      "You're not just raising kids; you're raising little revolutionaries, and it's amazing. While other parents are avoiding \"difficult topics,\" you're at the kitchen table talking about consent, privilege, and why that TV commercial is problematic.",
    strengths: [
      "You nurture children's sense of agency and empowerment",
      "You naturally develop children's civic engagement and social responsibility",
      "You help children develop strong advocacy skills and moral courage",
      "You create a home atmosphere that values integrity and walking the talk",
      "You help children see themselves as capable of creating positive change"
    ],
    challenges: [
      "Finding balance between advocacy and allowing childhood innocence",
      "Developing ways to discuss serious topics without creating anxiety",
      "Respecting that children may develop different values and causes",
      "Distinguishing between empowerment and imposing one's own agenda",
      "Managing the emotional toll of engagement with challenging issues"
    ],
    tips: [
      "Balance activism with plenty of carefree childhood fun",
      "Create age-appropriate ways to discuss social issues without overwhelm",
      "Be mindful of the emotional weight children carry from social awareness",
      "Provide opportunities for empowerment through child-led initiatives",
      "Remember that making a difference starts with how we treat those closest to us"
    ],
    image: "https://example.com/empowered-advocate.jpg",
  },
];

// Add a console log to verify data is exported correctly
console.log('Quiz data loaded:', typeQuestions.length, 'questions,', personalityTypes.length, 'personality types'); 