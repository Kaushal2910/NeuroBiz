interface Props {
  title: string;
  subtitle: string;
}

const SectionHeading = ({
  title,
  subtitle,
}: Props) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      <p className="mt-5 text-gray-400 text-lg">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;