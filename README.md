# 00 → FR

The 15-minute French method built for real life. Audio-first, driving-safe, ADHD-friendly learning.

## Features

- ✅ **30-Day Curriculum**: Structured daily lessons with audio, recap, and micro-challenges
- ✅ **OpenAI TTS Integration**: High-quality French text-to-speech for all lessons
- ✅ **Driving-Safe Mode**: Recap hidden until user confirms they're parked
- ✅ **AI Practice**: Guided conversation practice with roleplay and recall modes
- ✅ **Zero Zero Design**: Pure black/white, minimal, distraction-free interface
- ✅ **Mobile-First**: Responsive design optimized for all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom Zero Zero Design System
- **State Management**: Zustand with localStorage persistence
- **Database**: PostgreSQL (Neon) with Prisma ORM
- **TTS**: OpenAI TTS API
- **TypeScript**: Full type safety

## Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- OpenAI API key
- Neon PostgreSQL database (or any PostgreSQL database)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Fill in your environment variables:

```env
OPENAI_API_KEY=your_openai_api_key_here
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require
DEFAULT_VOICE=camille
```

**Getting your OpenAI API Key:**
1. Go to https://platform.openai.com/api-keys
2. Create a new API key
3. Copy it to your `.env` file

**Setting up Neon Database:**
1. Go to https://neon.tech
2. Create a new project
3. Copy the connection string to `DATABASE_URL` in your `.env`

### 3. Database Setup

Generate Prisma client and push schema:

```bash
npm run db:generate
npm run db:push
```

Or with pnpm:

```bash
pnpm db:generate
pnpm db:push
```

### 4. Run Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
00-FR/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── tts/          # TTS API route
│   │   ├── components/      # React components
│   │   ├── data/            # Curriculum data
│   │   ├── day/[id]/        # Dynamic day pages
│   │   ├── practice/        # Practice page
│   │   ├── settings/        # Settings page
│   │   ├── store/           # Zustand state store
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── styles/              # Global styles
├── prisma/
│   └── schema.prisma        # Database schema
├── next.config.js           # Next.js config
├── tailwind.config.ts       # Tailwind config
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Detect Next.js
- Run build commands
- Deploy your app

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

Make sure to:
1. Set all environment variables
2. Run `npm run build` successfully
3. Configure database connection

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

### Adding New Days

Edit `src/app/data/curriculum.ts` to add or modify lesson content.

### Customizing TTS

The TTS API route is at `src/app/api/tts/route.ts`. You can:
- Change voice mapping
- Adjust script format
- Add caching logic

### Design System

The Zero Zero design system is defined in `src/styles/theme.css`:
- Pure black background (`#000000`)
- Pure white text (`#FFFFFF`)
- Roboto Condensed (headings)
- Roboto Light (body)
- Max-width: 760px
- Padding: 32px
- Section spacing: 100px

## Features in Detail

### Recap Safety Gate

When driving-safe mode is enabled, the recap card is hidden until the user clicks "I am parked". This prevents distracted driving.

### State Persistence

Settings are persisted to localStorage using Zustand's persist middleware. This includes:
- Driving-safe mode toggle
- Voice preferences
- Mini-mode toggle
- Parked status

### Audio Generation

Audio is generated on-demand using OpenAI's TTS API. Each day's script is converted to MP3 format and streamed to the client.

## Troubleshooting

### TTS Not Working

1. Check your `OPENAI_API_KEY` is set correctly
2. Verify you have credits in your OpenAI account
3. Check browser console for errors

### Database Connection Issues

1. Verify `DATABASE_URL` is correct
2. Check database is accessible from your network
3. Run `npm run db:push` to sync schema

### Build Errors

1. Clear `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run lint`

## License

Private project - All rights reserved

## Support

For issues or questions, please open an issue on the repository.

---

**00 → FR** — A Zero Zero learning method — 2025
