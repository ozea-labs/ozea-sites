import { MessageCircle } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "yellow" | "teal" | "outline";
  size?: "md" | "lg";
  withWhatsappIcon?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "yellow",
  size = "md",
  withWhatsappIcon = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-all duration-200 cursor-pointer";

  const variants = {
    yellow:
      "bg-brand-yellow text-brand-blue hover:bg-brand-yellow-dark shadow-lg hover:shadow-xl",
    teal: "bg-brand-teal text-white hover:bg-brand-teal-dark shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-white text-white hover:bg-white/10",
  };

  const sizes = {
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {withWhatsappIcon && <MessageCircle className="h-5 w-5" />}
      {children}
    </a>
  );
}
