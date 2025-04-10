import { Question } from '../../../types/quizTypes';

// Extended PersonalityType that includes 'mantra'
export interface MomPersonalityType {
  type: string;
  description: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
  mantra: string;
  image: string;
}

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
        type: "Nurturing",
        icon: "🥰",
      },
      {
        text: "Let's check if it's time for a feeding or change - we need to get back on schedule",
        type: "Structured",
        icon: "🧐",
      },
      {
        text: "I wonder what developmental phase is causing this sleep regression...",
        type: "Wisdom",
        icon: "🤔",
      },
      {
        text: "Midnight dance party it is! If we're up, might as well make it fun!",
        type: "Adventure",
        icon: "😄",
      },
      {
        text: "This is why we need better parental leave policies - nobody should do this alone",
        type: "Empowered",
        icon: "😤",
      },
    ],
  },
  {
    id: 2,
    text: "Your kid just dumped an entire box of cereal on the floor during your busiest morning. What's your reaction?",
    options: [
      {
        text: "Oh sweetie, I see you were trying to be independent. How does this mess make you feel?",
        type: "Nurturing",
        icon: "☺️",
      },
      {
        text: "Quick clean-up routine! We've got 5 minutes to get this sorted before we leave",
        type: "Structured",
        icon: "😯",
      },
      {
        text: "Let's talk about what happens when cereal spills - this is actually a cool physics lesson",
        type: "Wisdom",
        icon: "🤓",
      },
      {
        text: "CEREAL SNOWBALL FIGHT! (then we'll clean it together)",
        type: "Adventure",
        icon: "😂",
      },
      {
        text: "This is why I've been pushing for breakfast stations where kids can serve themselves safely",
        type: "Empowered",
        icon: "🙄",
      },
    ],
  },
  {
    id: 3,
    text: "[Name], when picking out books for your child, you're naturally drawn to stories about:",
    options: [
      {
        text: "Characters exploring big emotions and learning emotional intelligence",
        type: "Nurturing",
        icon: "😊",
      },
      {
        text: "Daily routines, predictable patterns, and orderly worlds",
        type: "Structured",
        icon: "😌",
      },
      {
        text: "Curious characters who ask \"why\" and discover how things work",
        type: "Wisdom",
        icon: "🧐",
      },
      {
        text: "Wild adventures, unexpected journeys, and magical possibilities",
        type: "Adventure",
        icon: "🤩",
      },
      {
        text: "Diverse characters who stand up for what's right and make a difference",
        type: "Empowered",
        icon: "😎",
      },
    ],
  },
  {
    id: 4,
    text: "You're designing your dream nursery/kid's room. What's the MUST-HAVE element?",
    options: [
      {
        text: "A super cozy reading nook with pillows for snuggling during stories",
        type: "Nurturing",
        icon: "🥰",
      },
      {
        text: "Smart storage systems with labels so everything has its perfect place",
        type: "Structured",
        icon: "😏",
      },
      {
        text: "An interactive learning wall with rotating educational elements",
        type: "Wisdom",
        icon: "🤓",
      },
      {
        text: "A tent/fort/canopy that transforms the space into different worlds",
        type: "Adventure",
        icon: "😃",
      },
      {
        text: "Diverse books and toys that represent many cultures and family structures",
        type: "Empowered",
        icon: "🙂",
      },
    ],
  },
  {
    id: 5,
    text: "Your parenting philosophy could best be summed up with which quote?",
    options: [
      {
        text: "\"Children will never remember you for the material things you provided, but for the feeling that you cherished them\"",
        type: "Nurturing",
        icon: "🥲",
      },
      {
        text: "\"Routine gives children a sense of security and helps them develop self-discipline\"",
        type: "Structured",
        icon: "😌",
      },
      {
        text: "\"The greatest gift you can give your child is the roots of responsibility and wings of independence\"",
        type: "Wisdom",
        icon: "🧐",
      },
      {
        text: "\"Childhood is not a race to see how quickly a child can read, write and count. It is a small window of time to learn and develop at the pace that is right for each individual child\"",
        type: "Adventure",
        icon: "😊",
      },
      {
        text: "\"If you want your children to turn out well, spend twice as much time with them and half as much money\"",
        type: "Empowered",
        icon: "😉",
      },
    ],
  },
  {
    id: 6,
    text: "Your toddler is having a FULL meltdown in the grocery store. You:",
    options: [
      {
        text: "Get down on their level, validate their feelings, and create a calm space together",
        type: "Nurturing",
        icon: "😇",
      },
      {
        text: "Recognize it's past snack time in your schedule and pull out the emergency snack you packed",
        type: "Structured",
        icon: "😏",
      },
      {
        text: "Give them choices to help them regain a sense of control over the situation",
        type: "Wisdom",
        icon: "🤨",
      },
      {
        text: "Turn it into a silly game or unexpected adventure to shift the energy",
        type: "Adventure",
        icon: "😜",
      },
      {
        text: "Ignore the judgmental looks - you know all kids have meltdowns and it's perfectly normal",
        type: "Empowered",
        icon: "😑",
      },
    ],
  },
  {
    id: 7,
    text: "[Name], which TV/movie mom do you secretly relate to most?",
    options: [
      {
        text: "Beth Pearson from This Is Us (emotionally attuned, creates safe space)",
        type: "Nurturing",
        icon: "🥺",
      },
      {
        text: "Claire Dunphy from Modern Family (organized, systems for everything)",
        type: "Structured",
        icon: "😅",
      },
      {
        text: "Dr. Bailey from Grey's Anatomy (teaching moments, straight talk)",
        type: "Wisdom",
        icon: "🤨",
      },
      {
        text: "Linda Belcher from Bob's Burgers (enthusiastic, turns everything into an adventure)",
        type: "Adventure",
        icon: "😆",
      },
      {
        text: "Kristina Braverman from Parenthood (fierce advocate for her kids' needs)",
        type: "Empowered",
        icon: "😠",
      },
    ],
  },
  {
    id: 8,
    text: "Your child comes home upset because they weren't invited to a classmate's birthday party. Your response?",
    options: [
      {
        text: "\"I can see this really hurt your feelings. Let's talk about it and have a special mom-kid date instead\"",
        type: "Nurturing",
        icon: "😢",
      },
      {
        text: "\"Let's plan something fun for that day so you have something special to look forward to\"",
        type: "Structured",
        icon: "🙂",
      },
      {
        text: "\"Sometimes friendships get complicated. What ideas do you have for handling this situation?\"",
        type: "Wisdom",
        icon: "🤔",
      },
      {
        text: "\"Their loss! Let's have our own EPIC adventure that day that'll be way more awesome!\"",
        type: "Adventure",
        icon: "😁",
      },
      {
        text: "\"Everyone deserves to feel included. Should we host an inclusive event for the whole class soon?\"",
        type: "Empowered",
        icon: "😌",
      },
    ],
  },
  {
    id: 9,
    text: "You've got an entire day free with your child. What are you MOST excited to do together?",
    options: [
      {
        text: "Cuddle marathon with books, talks about feelings, and connecting deeply",
        type: "Nurturing",
        icon: "🥰",
      },
      {
        text: "Finally tackle that fun organizing project together and create a new family system",
        type: "Structured",
        icon: "😏",
      },
      {
        text: "Visit a museum, nature center, or try experiments that spark great questions",
        type: "Wisdom",
        icon: "🧐",
      },
      {
        text: "Spontaneous road trip! Let's see where the day takes us!",
        type: "Adventure",
        icon: "😃",
      },
      {
        text: "Volunteer together at the community garden or local food bank",
        type: "Empowered",
        icon: "🤗",
      },
    ],
  },
  {
    id: 10,
    text: "[Name], when you imagine yourself as a mom, which of these thoughts feels MOST true?",
    options: [
      {
        text: "\"I want my child to always feel emotionally safe with me, no matter what\"",
        type: "Nurturing",
        icon: "☺️",
      },
      {
        text: "\"I'll create a home with predictable routines where my child feels secure\"",
        type: "Structured",
        icon: "😌",
      },
      {
        text: "\"I'll help my child develop critical thinking skills to navigate life's complexity\"",
        type: "Wisdom",
        icon: "🤔",
      },
      {
        text: "\"We're going to have the most magical, fun adventures together\"",
        type: "Adventure",
        icon: "😄",
      },
      {
        text: "\"I'll raise a child who stands up for themselves and others\"",
        type: "Empowered",
        icon: "😤",
      },
    ],
  },
];

// Mom Type definitions
export const momTypes: MomPersonalityType[] = [
  {
    type: "The Nurturing Navigator Mom",
    description:
      "You're a fucking emotional genius when it comes to motherhood. For you, parenting isn't about schedules or achievements—it's about the soul-deep connection that happens in those quiet moments when your child feels completely seen and heard by you.",
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
    mantra: "I see you, I hear you, I'm with you in this.",
    image: "https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "The Structured Stability Mom",
    description:
      "Holy shit, you're the reason your family functions! While everyone else is flailing around wondering what's for dinner, you've already planned meals for the week, organized the carpool schedule, and created a chore chart that actually works.",
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
    mantra: "A place for everything, and everyone thrives with structure.",
    image: "https://images.pexels.com/photos/1648407/pexels-photo-1648407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "The Wisdom Cultivator Mom",
    description:
      "You're raising tiny philosophers, and it's fucking brilliant. While other parents are answering questions, you're asking them right back—\"Well, what do YOU think happens when we die?\"—and watching your kid's mind explode with possibilities.",
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
    mantra: "Question everything, especially the things everyone else takes for granted.",
    image: "https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "The Adventure Catalyst Mom",
    description:
      "You're the mom other kids wish they had, and that's not bullshit. Your approach to motherhood? Make. It. MAGICAL. Why have breakfast when you can have a pancake picnic on the living room floor? Why drive the normal route when you can take the \"scenic adventure path\" that's only 10 minutes longer?",
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
    mantra: "We can sleep when we're dead. Today, we LIVE!",
    image: "https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    type: "The Empowered Advocate Mom",
    description:
      "You're not just raising kids; you're raising little revolutionaries, and it's badass. While other parents are avoiding \"difficult topics,\" you're at the kitchen table talking about consent, privilege, and why that TV commercial is problematic AF.",
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
    mantra: "Never doubt that a small group of thoughtful, committed people can change the world—I'm raising one of them.",
    image: "https://images.pexels.com/photos/4079281/pexels-photo-4079281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Type-specific calculation logic
export const calculateMomType = (answers: string[]) => {
  // Count frequency of each type in answers
  const typeCounts = answers.reduce((counts, answer) => {
    counts[answer] = (counts[answer] || 0) + 1;
    return counts;
  }, {} as Record<string, number>);

  // Find dominant type
  let dominantType: string | null = null;
  let maxCount = 0;

  for (const [type, count] of Object.entries(typeCounts)) {
    if (count > maxCount) {
      dominantType = type;
      maxCount = count;
    }
  }

  // Handle ties by choosing the type that appeared first in the quiz
  if (dominantType) {
    // Find matching personality profile
    const typeMap: Record<string, string> = {
      "Nurturing": "The Nurturing Navigator Mom",
      "Structured": "The Structured Stability Mom",
      "Wisdom": "The Wisdom Cultivator Mom",
      "Adventure": "The Adventure Catalyst Mom",
      "Empowered": "The Empowered Advocate Mom"
    };
    
    const fullTypeName = typeMap[dominantType];
    return momTypes.find((profile) => profile.type === fullTypeName);
  }
  
  // Default return if something goes wrong
  return momTypes[0];
}; 