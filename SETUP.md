# Quick Setup Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Create `.env` File

Create a `.env` file in the root directory with:

```env
OPENAI_API_KEY=your_openai_api_key_here
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require
DEFAULT_VOICE=camille
```

## 3. Set Up Database

```bash
npm run db:generate
npm run db:push
```

## 4. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Getting API Keys

### OpenAI API Key
1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Create a new API key
4. Copy it to your `.env` file

### Neon Database
1. Go to https://neon.tech
2. Create a free account
3. Create a new project
4. Copy the connection string to `DATABASE_URL` in your `.env`

## Troubleshooting

- **Port already in use**: Change port with `PORT=3001 npm run dev`
- **Database connection error**: Check your `DATABASE_URL` is correct
- **TTS not working**: Verify `OPENAI_API_KEY` is set and you have credits

