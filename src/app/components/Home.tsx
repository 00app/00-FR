'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { PrimaryButton } from './PrimaryButton';

const days = Array.from({ length: 30 }, (_, i) => ({
  num: i + 1,
  title: `day ${i + 1}`,
}));

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <Logo />
      
      <div className="text-center mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '40ms' }}>
        <h3 
          className="text-white mb-6 md:mb-8 px-4"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 'var(--font-weight-extrabold)', 
            fontSize: 'clamp(24px, 6vw, 30px)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          the 15-minute french method built for real life.
        </h3>
        <p 
          className="text-white/70 px-4"
          style={{ 
            fontFamily: 'var(--font-body)', 
            fontWeight: 'var(--font-weight-bold)', 
            fontSize: 'var(--text-body)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          audio-first. driving-safe. adhd-friendly. zero boredom.
        </p>
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: '80ms', marginTop: 'var(--spacing-section)' }}>
        <h2 
          className="text-white mb-8 md:mb-12 px-4 text-center"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 'var(--font-weight-extrabold)', 
            fontSize: 'clamp(32px, 8vw, 50px)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          start your 30 days
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mb-16 md:mb-20 px-4">
          {days.map((day, index) => (
            <Link key={day.num} href={`/day/${day.num}`}>
              <PrimaryButton 
                className="w-full animate-fade-in-up"
                style={{ animationDelay: `${200 + (index * 40)}ms` }}
              >
                day {day.num}
              </PrimaryButton>
            </Link>
          ))}
        </div>
      </div>

      <footer className="text-center mt-16 md:mt-20 pt-16 md:pt-20 border-t border-white/15 animate-fade-in-up" style={{ animationDelay: '240ms' }}>
        <p 
          className="text-white/50 px-4"
          style={{ 
            fontFamily: 'var(--font-body)', 
            fontWeight: 'var(--font-weight-bold)', 
            fontSize: 'var(--text-body)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          00 → fr — a zero zero learning method — 2025
        </p>
      </footer>
    </div>
  );
}

