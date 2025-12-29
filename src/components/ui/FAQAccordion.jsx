import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const FAQAccordion = ({
  items,
  containerClass = "max-w-5xl mx-auto",
  divider = true,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`${containerClass} ${
        divider ? "divide-y divide-gray-200" : ""
      }`}
    >
      {items.map((item, index) => (
        <div key={index} className="py-6">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between text-left gap-4"
          >
            <span className="text-lg font-medium text-gray-900">
              {item.question}
            </span>

            <HiChevronDown
              className={`w-6 h-6 shrink-0 text-gray-600 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="mt-4 text-gray-600 leading-relaxed text-base">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
