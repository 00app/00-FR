interface RecapCardProps {
  phrases: string[];
}

export function RecapCard({ phrases }: RecapCardProps) {
  return (
    <div 
      className="bg-white p-8 md:p-12 w-full animate-fade-in-up"
      style={{ 
        borderRadius: 'var(--radius-card)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--font-weight-extrabold)'
      }}
    >
      {phrases.map((phrase, index) => (
        <div 
          key={index}
          className="text-black mb-8 last:mb-0"
          style={{ 
            fontSize: 'clamp(24px, 5vw, 50px)', 
            lineHeight: 'var(--line-height-tight)',
            animationDelay: `${index * 40}ms`
          }}
        >
          {phrase}
        </div>
      ))}
    </div>
  );
}
