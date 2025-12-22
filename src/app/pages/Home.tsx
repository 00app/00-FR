import { Logo } from '../components/Logo';
import { PrimaryButton } from '../components/PrimaryButton';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const days = [
  { num: 1, title: 'introductions' },
  { num: 2, title: 'greetings' },
  { num: 3, title: 'how are you' },
  { num: 4, title: 'yes, no, please' },
  { num: 5, title: 'numbers 1–20' },
  { num: 6, title: 'where are you from' },
  { num: 7, title: 'week review' },
  { num: 8, title: 'ordering food' },
  { num: 9, title: 'être + avoir' },
  { num: 10, title: 'buying things' },
  { num: 11, title: 'directions' },
  { num: 12, title: 'weather' },
  { num: 13, title: 'days of week' },
  { num: 14, title: 'week review' },
  { num: 15, title: 'booking' },
  { num: 16, title: 'transport' },
  { num: 17, title: 'health' },
  { num: 18, title: 'clothes shopping' },
  { num: 19, title: 'real estate / notaire' },
  { num: 20, title: 'vet & pets' },
  { num: 21, title: 'week review' },
  { num: 22, title: 'asking questions' },
  { num: 23, title: 'past tense' },
  { num: 24, title: 'future tense' },
  { num: 25, title: 'opinions' },
  { num: 26, title: 'problems & help' },
  { num: 27, title: 'social life' },
  { num: 28, title: 'food & cooking' },
  { num: 29, title: 'full conversation' },
  { num: 30, title: 'final challenge' }
];

export function Home({ onNavigate }: HomeProps) {
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
            <PrimaryButton 
              key={day.num}
              onClick={() => onNavigate(`day${day.num}`)}
              className="w-full animate-fade-in-up"
              style={{ animationDelay: `${200 + (index * 40)}ms` }}
            >
              day {day.num}
            </PrimaryButton>
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