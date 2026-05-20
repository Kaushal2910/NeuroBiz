interface Props {
  text: string;
}

const GradientButton = ({ text }: Props) => {
  return (
    <button
      className="
      px-8 py-4 rounded-2xl
      bg-gradient-to-r from-cyan-500 to-purple-600
      font-semibold
      transition-all duration-300
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]
      "
    >
      {text}
    </button>
  );
};

export default GradientButton;