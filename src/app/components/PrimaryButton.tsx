interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function PrimaryButton({ children, onClick, className = '', disabled = false, style }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-white text-black px-8 py-4 hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{ 
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--font-weight-bold)',
        fontSize: 'var(--text-body)',
        lineHeight: 'var(--line-height-tight)',
        minHeight: '56px',
        ...style
      }}
    >
      {children}
    </button>
  );
}
