import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  y?: number;
  duration?: number;
}

const FloatingElement = ({
  children,
}: Props) => {
  return <>{children}</>;
};

export default FloatingElement;