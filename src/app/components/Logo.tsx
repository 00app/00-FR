export function Logo() {
  return (
    <div 
      className="text-white text-center mb-16 animate-fade-in-up"
      style={{ 
        fontFamily: 'var(--font-heading)', 
        fontWeight: 'var(--font-weight-extrabold)', 
        fontSize: 'clamp(40px, 10vw, 60px)', 
        lineHeight: 'var(--line-height-tight)',
        textTransform: 'none'
      }}
    >
      00 → fr
    </div>
  );
}
