import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({
  children,
  className = "",
}: Props) => {
  return (
    <div
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500 hover:border-cyan-500/20 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;