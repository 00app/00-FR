interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, onClick, className = '' }: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-200 ${className}`}
      style={{ 
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--text-body)',
        lineHeight: 'var(--line-height-tight)',
        minHeight: '56px'
      }}
    >
      {children}
    </button>
  );
}
