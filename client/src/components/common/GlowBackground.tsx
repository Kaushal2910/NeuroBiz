const GlowBackground = () => {
  return (
    <>
      <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />
    </>
  );
};

export default GlowBackground;