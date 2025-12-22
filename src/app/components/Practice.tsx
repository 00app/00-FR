'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

type Mode = 'none' | 'roleplay' | 'recall';

export function Practice() {
  const [mode, setMode] = useState<Mode>('none');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([]);
  const [input, setInput] = useState('');

  const handleModeSelect = (selectedMode: Mode) => {
    setMode(selectedMode);
    setMessages([]);
    if (selectedMode === 'roleplay') {
      setMessages([{ sender: 'ai', text: 'bonjour ! ready to practice? let\'s have a conversation in french.' }]);
    } else if (selectedMode === 'recall') {
      setMessages([{ sender: 'ai', text: 'let\'s test your recall! i\'ll give you prompts from your lessons.' }]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { sender: 'user', text: input }]);
    
    setTimeout(() => {
      const responses = [
        'très bien ! continue.',
        'excellent ! tu parles bien.',
        'oui, c\'est ça !',
        'parfait ! next phrase?',
        'bien dit ! keep going.'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { sender: 'ai', text: randomResponse }]);
    }, 500);
    
    setInput('');
  };

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
          guided practice
        </h1>
        <p 
          className="text-white"
          style={{ 
            fontFamily: 'var(--font-body)', 
            fontWeight: 'var(--font-weight-bold)', 
            fontSize: 'var(--text-body)', 
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          roleplay and rapid recall with your ai tutor.
        </p>
      </div>

      {mode === 'none' && (
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16 px-4 animate-fade-in-up" style={{ animationDelay: '40ms' }}>
          <PrimaryButton onClick={() => handleModeSelect('roleplay')} className="flex-1">
            roleplay
          </PrimaryButton>
          <PrimaryButton onClick={() => handleModeSelect('recall')} className="flex-1">
            rapid recall
          </PrimaryButton>
        </div>
      )}

      {mode !== 'none' && (
        <>
          <div className="mb-6 px-4 animate-fade-in-up" style={{ animationDelay: '40ms' }}>
            <SecondaryButton onClick={() => handleModeSelect('none')} className="w-full sm:w-auto">
              change mode
            </SecondaryButton>
          </div>

          <div 
            className="bg-white border-2 border-white p-6 md:p-8 mb-6 overflow-y-auto mx-4 animate-fade-in-up"
            style={{ 
              height: '400px',
              borderRadius: 'var(--radius-card)',
              animationDelay: '80ms'
            }}
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                className={`mb-6 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <span 
                  className="text-black/50 block mb-2"
                  style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontWeight: 'var(--font-weight-bold)', 
                    fontSize: '14px' 
                  }}
                >
                  {msg.sender === 'user' ? 'you' : 'ai tutor'}
                </span>
                <p 
                  className="text-black"
                  style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontWeight: 'var(--font-weight-bold)', 
                    fontSize: 'var(--text-body)', 
                    lineHeight: 'var(--line-height-tight)',
                    textTransform: 'none'
                  }}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          <p 
            className="text-white/50 mb-6 px-4 animate-fade-in-up"
            style={{ 
              fontFamily: 'var(--font-body)', 
              fontWeight: 'var(--font-weight-bold)', 
              fontSize: 'var(--text-body)', 
              lineHeight: 'var(--line-height-tight)',
              animationDelay: '120ms'
            }}
          >
            ai stays on today's phrases. no unrelated topics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 px-4 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="type your response in french..."
              className="flex-1 bg-transparent border-2 border-white/15 text-white px-6 py-4 focus:outline-none focus:border-white/50 transition-all duration-200"
              style={{ 
                fontFamily: 'var(--font-body)', 
                fontWeight: 'var(--font-weight-bold)', 
                fontSize: 'var(--text-body)',
                borderRadius: 'var(--radius-pill)',
                minHeight: '56px',
                textTransform: 'none'
              }}
            />
            <PrimaryButton onClick={handleSend} className="w-full sm:w-auto">
              send
            </PrimaryButton>
          </div>
        </>
      )}

      <div className="mt-12 md:mt-16 px-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <Link href="/">
          <SecondaryButton className="w-full sm:w-auto">
            back to home
          </SecondaryButton>
        </Link>
      </div>
    </div>
  );
}

