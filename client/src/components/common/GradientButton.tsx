import type { ReactNode } from "react";

interface Props {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
}

const GradientButton = ({
  text,
  icon,
  onClick,
}: Props) => {
  return (
    <button onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};

export default GradientButton;