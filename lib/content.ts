// lib/content.ts

export const SITE = {
  // Basic Info
  herName: "Debashruti",
  yourName: "Sumit",

  // Hero Image
  heroImage: "/images/hero.jpeg",

  // Intro Song
  song: "/audio/birthday.mp3",

  // Hero Section
  headline: "Happy Birthday ❤️",
  subheadline:
    "Today isn't just another day... It's the day someone incredibly special came into this world.",

  // Final Background
  finalBackground: "/images/final.jpeg",

  // Final Song
  finalSong: "/audio/final.mp3",

  // Email where answers will be sent
  receiveEmail: "yourgmail@gmail.com",
};

export type CardStep = {
  id: string;

  label: string;

  question: string;

  reveal: string;

  placeholder: string;

  // NEW
  background: string;

  song: string;

  themeColor: string;
};

export const GAME_STEPS: CardStep[] = [
  {
    id: "balloon",

    label: "🎈 Pop Balloon",

    question:
      "On a scale of 1-10, how excited are you that today is your birthday?",

    reveal:
      "Whatever number you picked, I'm even more excited because today is all about you ❤️",

    placeholder: "Type here...",

    background: "/images/bg1.jpeg",

    song: "/audio/intro.mp3",

    themeColor: "#ffb6c1",
  },

  {
    id: "cake",

    label: "🎂 Birthday Cake",

    question:
      "If you could make one birthday wish today, what would it be?",

    reveal:
      "I hope every wish you make today finds its way into your life.",

    placeholder: "Write your wish...",

    background: "/images/bg2.jpeg",

    song: "/audio/song1.mp3",

    themeColor: "#FFD166",
  },

  {
    id: "memory",

    label: "📸 Memory",

    question:
      "What's your happiest memory from the last year?",

    reveal:
      "I hope today's surprise becomes one of those happy memories too ❤️",

    placeholder: "Tell me...",

    background: "/images/bg3.jpeg",

    song: "/audio/song2.mp3",

    themeColor: "#A78BFA",
  },

  {
    id: "gift",

    label: "🎁 Secret Gift",

    question:
      "If someone secretly liked you for a long time, what would you say to them?",

    reveal:
      "Maybe... today is the day they finally found the courage ❤️",

    placeholder: "Your answer...",

    background: "/images/bg4.jpeg",

    song: "/audio/song3.mp3",

    themeColor: "#FB7185",
  },
 {
  id: "admire",

  label: "💖 Admiration",

  question:
    "What's one quality you admire most in a person?",

  reveal:
    "I hope one day you'll find someone who has that quality... maybe even more. ❤️",

  placeholder: "Type here...",

  background: "/images/bg5.jpeg",

  song: "/audio/song4.mp3",

  themeColor: "#8B5CF6",
},

{
  id: "happiness",

  label: "🌟 Best Moment",

  question:
    "What has made you the happiest this year?",

  reveal:
    "I hope today's birthday becomes one more beautiful reason to smile. 🎉❤️",

  placeholder: "Share your happiest moment...",

  background: "/images/bg6.jpeg",

  song: "/audio/song5.mp3",

  themeColor: "#22C55E",
},

];

export const FINAL_MESSAGE = {
  title: "One Last Thing ❤️",

  body: `
Happy Birthday, Debashruti.

I've wanted to tell you something for a long time.

Every little part of this website—
every animation,
every song,
every question,
every surprise—

was created with only one person in mind.

You.

I don't know what the future holds.

But I hope this birthday becomes one you'll always remember.

May every dream you have come true.

Keep smiling.

Keep shining.

And maybe...

one day...

I'll get the courage to tell you all of this face to face.
`,

  signOff: "With lots of love,\n\nSumit ❤️",
};
export const ENVELOPE_MESSAGE = {
  title: "A Letter From My Heart ❤️",

  body: `
Happy Birthday, Debashruti.

Some people become special without even realizing it.
You're one of them.

I hope today brings you countless smiles...
because seeing you happy has always been a beautiful feeling for someone.
`,

  signOff: `
With warm wishes,

Sumit ❤️
`,
};