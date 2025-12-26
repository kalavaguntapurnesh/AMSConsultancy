import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
  {
    question: "What is Alcheminds?",
    answer:
      "Alcheminds is a global education consultancy helping students choose the right universities, courses, and countries through personalized guidance and expert counselling.",
  },
  {
    question: "Does Alcheminds provide paid study abroad counselling?",
    answer:
      "Yes, we offer both free and premium counselling services depending on the level of support and personalization required.",
  },
  {
    question: "What services are included in premium counselling?",
    answer:
      "Premium counselling includes profile evaluation, university shortlisting, application assistance, SOP guidance, visa support, and scholarship advisory.",
  },
  {
    question: "Does Alcheminds help with education loans?",
    answer:
      "Yes, we assist students in connecting with trusted banking and NBFC partners to secure education loans at competitive interest rates.",
  },
  {
    question: "Do you help with entrance exams like GRE or IELTS?",
    answer:
      "We provide guidance and referrals for GRE, IELTS, TOEFL, and other standardized test preparations through trusted partners.",
  },
  {
    question: "Do you apply to all universities on behalf of students?",
    answer:
      "We help students apply to a wide range of global universities based on eligibility, intake timelines, and admission criteria.",
  },
  {
    question: "Why does Alcheminds charge for premium counselling?",
    answer:
      "Premium counselling ensures dedicated expert support, deeper personalization, and end-to-end application management, maximizing admission success.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-350 mx-auto px-4">
        {/* HEADER */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <span className="h-px w-32 bg-brand" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <span className="h-px w-32 bg-brand" />
        </div>

        {/* FAQ LIST */}
        <div className="max-w-5xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>

                <HiChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <div className="mt-4 text-gray-600 leading-relaxed text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
