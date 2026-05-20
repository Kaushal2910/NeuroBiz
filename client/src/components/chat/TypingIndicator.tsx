const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-2 px-6 py-5 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl w-fit">

      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-bounce" />

      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-bounce delay-150" />

      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-bounce delay-300" />

    </div>
  );
};

export default TypingIndicator;