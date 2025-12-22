'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { RecapCard } from './RecapCard';
import { useSettingsStore } from '../store/useSettingsStore';
import AudioPlayer from './AudioPlayer';

interface DayPageProps {
  dayNum: number;
  title: string;
  script: string;
  recapPhrases: string[];
  microChallenge: string;
}

export function DayPage({ dayNum, title, script, recapPhrases, microChallenge }: DayPageProps) {
  const { drivingSafe, isParked, setIsParked } = useSettingsStore();
  const showRecap = !drivingSafe || isParked;

  const nextDay = dayNum < 30 ? dayNum + 1 : null;

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <div className="mb-12 md:mb-16 animate-fade-in-up">
        <h1 
          className="text-white mb-4 px-4"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 'var(--font-weight-extrabold)', 
            fontSize: 'clamp(36px, 10vw, 60px)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          day {dayNum} — {title.toLowerCase()}
        </h1>
        <p 
          className="text-white/70 px-4"
          style={{ 
            fontFamily: 'var(--font-body)', 
            fontWeight: 'var(--font-weight-bold)', 
            fontSize: 'var(--text-body)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          audio-only while driving. recap visible when parked.
        </p>
      </div>

      <div className="mb-12 md:mb-16 px-4 animate-fade-in-up" style={{ animationDelay: '40ms', marginTop: 'var(--spacing-section)' }}>
        <AudioPlayer text={script} />
        
        <p 
          className="text-white/50 mt-6"
          style={{ 
            fontFamily: 'var(--font-body)', 
            fontWeight: 'var(--font-weight-bold)', 
            fontSize: 'var(--text-body)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          use audio only while driving. keep eyes on the road.
        </p>
      </div>

      <div className="mb-12 md:mb-16 px-4 animate-fade-in-up" style={{ animationDelay: '80ms', marginTop: 'var(--spacing-section)' }}>
        <h2 
          className="text-white mb-8"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 'var(--font-weight-extrabold)', 
            fontSize: 'clamp(32px, 8vw, 50px)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          recap (parked only)
        </h2>
        
        {!showRecap ? (
          <div className="bg-white/10 border-2 border-white/30 p-8 md:p-12 w-full" style={{ borderRadius: 'var(--radius-card)' }}>
            <p 
              className="text-white mb-6 text-center"
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontWeight: 'var(--font-weight-bold)', 
                fontSize: 'var(--text-body)', 
                lineHeight: 'var(--line-height-tight)'
              }}
            >
              recap hidden for driving safety
            </p>
            <PrimaryButton 
              onClick={() => setIsParked(true)}
              className="w-full"
            >
              i am parked
            </PrimaryButton>
          </div>
        ) : (
          <RecapCard phrases={recapPhrases} />
        )}
      </div>

      <div className="mb-12 md:mb-16 px-4 animate-fade-in-up" style={{ animationDelay: '120ms', marginTop: 'var(--spacing-section)' }}>
        <h2 
          className="text-white mb-8"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 'var(--font-weight-extrabold)', 
            fontSize: 'clamp(32px, 8vw, 50px)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          night micro-challenge
        </h2>
        <p 
          className="text-white mb-6"
          style={{ 
            fontFamily: 'var(--font-body)', 
            fontWeight: 'var(--font-weight-bold)', 
            fontSize: 'var(--text-body)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          say today's key phrase once before bed:
        </p>
        <p 
          className="text-white"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 'var(--font-weight-extrabold)', 
            fontSize: 'clamp(20px, 5vw, 30px)', 
            lineHeight: 'var(--line-height-tight)',
            textTransform: 'none'
          }}
        >
          "{microChallenge}"
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 px-4 animate-fade-in-up" style={{ animationDelay: '160ms', marginTop: 'var(--spacing-section)' }}>
        <Link href="/">
          <SecondaryButton className="w-full sm:w-auto">
            back to all days
          </SecondaryButton>
        </Link>
        {nextDay && (
          <Link href={`/day/${nextDay}`}>
            <PrimaryButton className="w-full sm:w-auto">
              next day
            </PrimaryButton>
          </Link>
        )}
        {!nextDay && (
          <Link href="/">
            <PrimaryButton className="w-full sm:w-auto">
              back to home
            </PrimaryButton>
          </Link>
        )}
      </div>
    </div>
  );
}
