# Happy Birthday Site 🎂💌

A full-screen photo hero + background song + a 4-step funny/romantic
card game that ends in a birthday confession card. Built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui-style
components, and Framer Motion.

## 1. Install & run

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## 2. Make it yours (only 2 things to add)

- **Her photo** → save as `public/images/her.jpg`
- **Your song** → save as `public/audio/song.mp3`

## 3. Edit all the text in one place

Open **`lib/content.ts`**. Everything lives there:

- `SITE` — her name, headline, subheadline
- `GAME_STEPS` — the 4 cards (balloon, cake, photo bubble, gift).
  Each has a `question`, and a `reveal` message shown after she
  answers. The reveal doesn't validate the answer — it's written to
  work as a fun reaction to *anything* she types, so feel free to
  rewrite these in your own voice.
- `FINAL_MESSAGE` — the closing confession card copy.

You can add, remove, or reorder items in `GAME_STEPS` freely — the
game flow and progress dots adapt automatically.

## 4. How the flow works

1. **Hero** — full-screen photo of her, headline, floating balloons,
   a "Let's play" button that scrolls to the game.
2. **Music** — a floating button bottom-right. Browsers block
   autoplay with sound, so the very first tap starts the song (this
   is a browser rule, not something a website can bypass).
3. **Card game** — one card at a time. Tap the closed card → a funny
   question appears → she types an answer → a reveal message and
   confetti play → "Next card" advances.
4. **Final card** — after all 4 steps, a confetti burst plays and the
   confession card appears with her photo and your message.

## 5. Deploy it for free

The easiest path is [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or push this folder to a GitHub repo and import it on vercel.com —
it will detect Next.js automatically. You'll get a shareable link
like `your-project.vercel.app` you can send her.

## Project structure

```
app/
  layout.tsx        fonts + metadata
  page.tsx           assembles the page
  globals.css         theme + starfield background
components/
  hero-section.tsx    full-screen photo hero
  balloon-field.tsx    decorative floating balloons
  music-player.tsx     floating play/pause control
  game-flow.tsx        steps through the card game
  cards/
    game-card.tsx       one question card (closed → question → reveal)
    final-card.tsx       closing confession card
  ui/
    button.tsx, card.tsx   shadcn-style primitives
lib/
  content.ts           <- ALL editable text lives here
  utils.ts             className helper
public/
  images/her.jpg        <- add her photo here
  audio/song.mp3         <- add your song here
```

birthday-site/
│
├── app/
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   └── api/
│       └── send/
│           └── route.ts
│
├── components/
│   │
│   ├── loading-screen.tsx      ⭐ Loading Animation
│   ├── hero-section.tsx        ⭐ Hero
│   ├── game-flow.tsx           ⭐ Controls Game
│   ├── music-player.tsx        ⭐ Global Music
│   ├── balloon-field.tsx
│   ├── falling-petals.tsx
│   ├── floating-hearts.tsx
│   ├── sparkle-background.tsx
│   ├── countdown.tsx
│   ├── envelope.tsx
│   ├── photo-gallery.tsx
│   ├── fireworks.tsx
│   │
│   ├── cards/
│   │   ├── game-card.tsx
│   │   └── final-card.tsx
│   │
│   └── ui/
│       ├── button.tsx
│       └── card.tsx
│
├── lib/
│   └── content.ts
│
├── public/
│   │
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── bg1.jpg
│   │   ├── bg2.jpg
│   │   ├── bg3.jpg
│   │   ├── bg4.jpg
│   │   ├── final.jpg
│   │   ├── envelope.png
│   │   ├── cake.png
│   │   └── logo.png
│   │
│   ├── photos/
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   ├── 3.jpg
│   │   ├── 4.jpg
│   │   └── 5.jpg
│   │
│   └── audio/
│       ├── intro.mp3
│       ├── song1.mp3
│       ├── song2.mp3
│       ├── song3.mp3
│       ├── song4.mp3
│       ├── final.mp3
│       └── click.mp3
│
├── .env.local
│
├── package.json
│
├── tailwind.config.ts
│
├── tsconfig.json
│
└── next.config.ts