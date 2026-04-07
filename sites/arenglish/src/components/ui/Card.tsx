interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm border border-brand-grey/50 ${className}`}
    >
      {children}
    </div>
  );
}
