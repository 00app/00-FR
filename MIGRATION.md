# Migration from Vite to Next.js

This project has been migrated from Vite + React to Next.js 14 (App Router).

## Files That Can Be Removed

The following files are no longer needed and can be safely deleted:

- `vite.config.ts` - Vite configuration (replaced by `next.config.js`)
- `src/main.tsx` - Vite entry point (Next.js uses App Router)
- `src/app/App.tsx` - Old React app component (replaced by App Router pages)
- `src/app/pages/` directory - Old pages (moved to App Router structure)

## New Structure

- **App Router**: Pages are now in `src/app/` with `page.tsx` files
- **API Routes**: TTS API is at `src/app/api/tts/route.ts`
- **Components**: Moved to `src/app/components/`
- **Store**: Zustand store at `src/app/store/useSettingsStore.ts`

## Key Changes

1. **Navigation**: Uses Next.js `Link` component instead of custom navigation
2. **Routing**: File-based routing with App Router
3. **API**: Server-side API routes instead of client-side calls
4. **State**: Zustand with localStorage persistence for settings

## Next Steps

1. Install dependencies: `npm install`
2. Set up environment variables (see README.md)
3. Set up database: `npm run db:generate && npm run db:push`
4. Run dev server: `npm run dev`

