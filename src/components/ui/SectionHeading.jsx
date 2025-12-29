const SectionHeading = ({ title, className = "", lineWidth = "w-32" }) => {
  return (
    <div
      className={`flex items-center justify-center gap-6 mb-8 ${className}`}
    >
      <span className={`h-px ${lineWidth} bg-brand`} />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center">
        {title}
      </h2>

      <span className={`h-px ${lineWidth} bg-brand`} />
    </div>
  );
};

export default SectionHeading;
