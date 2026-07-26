// lib/content.ts

export const SITE = {
  // Basic Info
  herName: "Sana",
  yourName: "Your Stranger",

  // Hero Image
  heroImage: "/images/hero.jpeg",

  // Intro Song
  song: "/audio/birthday.mp3",

  // Hero Section
  headline: "❤️ Happy Birthday ❤️",
  subheadline:
    "Today isn't just another day... It's the day someone incredibly special came into this world.",

  // Final Background
  finalBackground: "/images/final.jpeg",

  // Final Song
  finalSong: "/audio/final.mp3",

  // Email where answers will be sent
  receiveEmail: "sumitachar1997@gmail.com",
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
    id: "gift",

    label: "🎁 Favorite Gift",

    question:
      "তুমি যতগুলো Gift পেয়েছ, তার মধ্যে কোনটা তোমার সবচেয়ে বেশি ভালো লেগেছে? কেন?",

    reveal:
      "সব Gift-এর মূল্য এক রকম হয় না, কিছু Gift সবসময় হৃদয়ে থেকে যায়। ❤️",

    placeholder: "এখানে লিখো...",

    background: "/images/bg1.jpeg",

    song: "/audio/song1.mp3",

    themeColor: "#FFB6C1",
  },

  {
    id: "rating",

    label: "⭐ Honest Rating",

    question:
      "সবকিছু বিচার করে আমাকে ১ থেকে ১০-এর মধ্যে কত নম্বর দিতে চাও?",

    reveal:
      "তোমার দেওয়া নম্বর যাই হোক, তোমার মুখের হাসিটাই আমার কাছে Full Marks। 😊",

    placeholder: "১ থেকে ১০-এর মধ্যে লিখো...",

    background: "/images/bg2.jpeg",

    song: "/audio/song2.mp3",

    themeColor: "#FFD166",
  },

  {
    id: "opinion",

    label: "💬 Honest Opinion",

    question:
      "আমার সম্পর্কে একটা ভালো আর একটা খারাপ দিক বলো। একদম Honest উত্তর চাই।",

    reveal:
      "তোমার সত্যি কথাগুলো আমার কাছে অনেক মূল্যবান। ❤️",

    placeholder: "মনের কথা লিখো...",

    background: "/images/bg3.jpeg",

    song: "/audio/song3.mp3",

    themeColor: "#A78BFA",
  },

  {
    id: "care",

    label: "🤍 Care",

    question:
      "তোমার খারাপ দিন হলে, একজন মানুষ কী করলে তোমার সত্যিই ভালো লাগবে?",

    reveal:
      "কখনও কখনও শুধু পাশে থাকাটাই সবচেয়ে বড় সান্ত্বনা। 🌸",

    placeholder: "তোমার অনুভূতি লিখো...",

    background: "/images/bg4.jpeg",

    song: "/audio/song4.mp3",

    themeColor: "#FB7185",
  },

  {
    id: "trust",

    label: "🤝 Trust",

    question:
      "Family-এর বাইরে, এই মুহূর্তে তোমার জীবনের সবচেয়ে বিশ্বাসযোগ্য ও ভরসাযোগ্য মানুষ কে?",

    reveal:
      "ভরসা এমন একটা অনুভূতি, যা সময়ের সঙ্গে ধীরে ধীরে তৈরি হয়। 💖",

    placeholder: "নাম বা উত্তর লিখো...",

    background: "/images/bg5.jpeg",

    song: "/audio/song5.mp3",

    themeColor: "#8B5CF6",
  },

  {
    id: "miss",

    label: "🌙 Missing Someone",

    question:
      "আজকের এই Special দিনে তুমি কাকে সবচেয়ে বেশি Miss করছ?",

    reveal:
      "কিছু মানুষ সবসময় আমাদের হৃদয়ে আলাদা একটা জায়গা নিয়ে থাকে... ❤️",

    placeholder: "তোমার উত্তর লিখো...",

    background: "/images/bg6.jpeg",

    song: "/audio/song6.mp3",

    themeColor: "#22C55E",
  },
];

export const FINAL_MESSAGE = {
  title: "One Last Thing ❤️",

  body: `
Happy Birthday, shruti.

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
Happy Birthday, Tithi.

Some people become special without even realizing it.
You're one of them.

I hope today brings you countless smiles...
because seeing you happy has always been a beautiful feeling for someone.
`,

  signOff: `
With warm wishes,

Your Stranger ❤️
`,
};