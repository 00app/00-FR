import { useState } from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';

interface SettingsProps {
  onNavigate: (page: string) => void;
}

export function Settings({ onNavigate }: SettingsProps) {
  const [drivingSafe, setDrivingSafe] = useState(true);
  const [narratorVoice, setNarratorVoice] = useState('camille');
  const [dialogueVoice, setDialogueVoice] = useState('camille');
  const [miniMode, setMiniMode] = useState(false);

  const voices = [
    { id: 'camille', label: 'camille (female, recommended)' },
    { id: 'marianne', label: 'marianne (female)' },
    { id: 'thomas', label: 'thomas (male)' },
    { id: 'neutral', label: 'neutral french' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <div className="mb-12 md:mb-16 px-4 animate-fade-in-up">
        <h1 
          className="text-white mb-4"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 'var(--font-weight-extrabold)', 
            fontSize: 'clamp(36px, 10vw, 60px)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          settings
        </h1>
      </div>

      <div className="space-y-12 md:space-y-16">
        {/* Driving-Safe Mode */}
        <div className="border-b border-white/15 pb-12 md:pb-16 px-4 animate-fade-in-up" style={{ animationDelay: '40ms' }}>
          <h2 
            className="text-white mb-4 md:mb-6"
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 'var(--font-weight-extrabold)', 
              fontSize: 'clamp(28px, 7vw, 50px)', 
              lineHeight: 'var(--line-height-tight)'
            }}
          >
            driving-safe mode
          </h2>
          <p 
            className="text-white mb-6 md:mb-8"
            style={{ 
              fontFamily: 'var(--font-body)', 
              fontWeight: 'var(--font-weight-bold)', 
              fontSize: 'var(--text-body)', 
              lineHeight: 'var(--line-height-tight)'
            }}
          >
            hide recap until user confirms they're parked.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDrivingSafe(!drivingSafe)}
              className={`w-16 h-8 border-2 border-white/15 relative transition-all duration-200 ${drivingSafe ? 'bg-white' : 'bg-transparent'}`}
              style={{ borderRadius: 'var(--radius-pill)' }}
            >
              <div 
                className={`absolute top-0.5 w-7 h-7 transition-all duration-200 ${drivingSafe ? 'right-0.5 bg-black' : 'left-0.5 bg-white'}`}
                style={{ borderRadius: '50%' }}
              />
            </button>
            <span 
              className="text-white"
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontWeight: 'var(--font-weight-bold)', 
                fontSize: 'var(--text-body)' 
              }}
            >
              {drivingSafe ? 'on' : 'off'}
            </span>
          </div>
        </div>

        {/* Narrator Voice */}
        <div className="border-b border-white/15 pb-12 md:pb-16 px-4 animate-fade-in-up" style={{ animationDelay: '80ms' }}>
          <h2 
            className="text-white mb-4 md:mb-6"
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 'var(--font-weight-extrabold)', 
              fontSize: 'clamp(28px, 7vw, 50px)', 
              lineHeight: 'var(--line-height-tight)'
            }}
          >
            narrator voice
          </h2>
          <div className="space-y-4 mb-6 md:mb-8">
            {voices.map((voice) => (
              <label key={voice.id} className="flex items-center gap-4 cursor-pointer">
                <input
                  type="radio"
                  name="narrator"
                  value={voice.id}
                  checked={narratorVoice === voice.id}
                  onChange={(e) => setNarratorVoice(e.target.value)}
                  className="w-6 h-6 border-2 border-white/15"
                />
                <span 
                  className="text-white"
                  style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontWeight: 'var(--font-weight-bold)', 
                    fontSize: 'var(--text-body)', 
                    lineHeight: 'var(--line-height-tight)'
                  }}
                >
                  {voice.label}
                </span>
              </label>
            ))}
          </div>
          <SecondaryButton className="w-full sm:w-auto">preview voice</SecondaryButton>
        </div>

        {/* Dialogue Voice */}
        <div className="border-b border-white/15 pb-12 md:pb-16 px-4 animate-fade-in-up" style={{ animationDelay: '120ms' }}>
          <h2 
            className="text-white mb-4 md:mb-6"
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 'var(--font-weight-extrabold)', 
              fontSize: 'clamp(28px, 7vw, 50px)', 
              lineHeight: 'var(--line-height-tight)'
            }}
          >
            dialogue voice
          </h2>
          <div className="space-y-4 mb-6 md:mb-8">
            {voices.map((voice) => (
              <label key={voice.id} className="flex items-center gap-4 cursor-pointer">
                <input
                  type="radio"
                  name="dialogue"
                  value={voice.id}
                  checked={dialogueVoice === voice.id}
                  onChange={(e) => setDialogueVoice(e.target.value)}
                  className="w-6 h-6 border-2 border-white/15"
                />
                <span 
                  className="text-white"
                  style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontWeight: 'var(--font-weight-bold)', 
                    fontSize: 'var(--text-body)', 
                    lineHeight: 'var(--line-height-tight)'
                  }}
                >
                  {voice.label}
                </span>
              </label>
            ))}
          </div>
          <SecondaryButton className="w-full sm:w-auto">preview voice</SecondaryButton>
        </div>

        {/* Mini Mode */}
        <div className="border-b border-white/15 pb-12 md:pb-16 px-4 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
          <h2 
            className="text-white mb-4 md:mb-6"
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 'var(--font-weight-extrabold)', 
              fontSize: 'clamp(28px, 7vw, 50px)', 
              lineHeight: 'var(--line-height-tight)'
            }}
          >
            mini mode
          </h2>
          <p 
            className="text-white mb-6 md:mb-8"
            style={{ 
              fontFamily: 'var(--font-body)', 
              fontWeight: 'var(--font-weight-bold)', 
              fontSize: 'var(--text-body)', 
              lineHeight: 'var(--line-height-tight)'
            }}
          >
            enable 7-minute lessons for low concentration days.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMiniMode(!miniMode)}
              className={`w-16 h-8 border-2 border-white/15 relative transition-all duration-200 ${miniMode ? 'bg-white' : 'bg-transparent'}`}
              style={{ borderRadius: 'var(--radius-pill)' }}
            >
              <div 
                className={`absolute top-0.5 w-7 h-7 transition-all duration-200 ${miniMode ? 'right-0.5 bg-black' : 'left-0.5 bg-white'}`}
                style={{ borderRadius: '50%' }}
              />
            </button>
            <span 
              className="text-white"
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontWeight: 'var(--font-weight-bold)', 
                fontSize: 'var(--text-body)' 
              }}
            >
              {miniMode ? 'on' : 'off'}
            </span>
          </div>
        </div>

        {/* Debug */}
        <div className="pb-12 md:pb-16 px-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 
            className="text-white mb-4 md:mb-6"
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 'var(--font-weight-extrabold)', 
              fontSize: 'clamp(28px, 7vw, 50px)', 
              lineHeight: 'var(--line-height-tight)'
            }}
          >
            debug
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <SecondaryButton className="w-full sm:w-auto">regenerate today's audio</SecondaryButton>
            <SecondaryButton className="w-full sm:w-auto">reset progress</SecondaryButton>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 px-4 animate-fade-in-up" style={{ animationDelay: '240ms' }}>
        <SecondaryButton onClick={() => onNavigate('home')} className="w-full sm:w-auto">
          back to home
        </SecondaryButton>
      </div>
    </div>
  );
}
