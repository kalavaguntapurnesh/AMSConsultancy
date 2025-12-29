const SectionText = ({
  children,
  align = "left",
  size = "lg",
  color = "gray",
  maxWidth = "auto",
  className = "",
}) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const sizeClass = size === "lg" ? "text-lg" : "text-base";
  const colorClass = color === "dark" ? "text-gray-600" : "text-gray-600";

  const widthClass =
    maxWidth === "xl" ? "max-w-xl" : maxWidth === "full" ? "max-w-full" : "";

  return (
    <p
      className={`font-light ${alignClass} ${sizeClass} ${colorClass} ${widthClass} ${className}`}
    >
      {children}
    </p>
  );
};

export default SectionText;
