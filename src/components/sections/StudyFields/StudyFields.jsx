import { useRef } from "react";
import {
  FaBalanceScale,
  FaChartPie,
  FaHardHat,
  FaMoneyBillWave,
  FaMicrochip,
  FaLanguage,
  FaChevronLeft,
  FaChevronRight,
  FaUserNurse,
} from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import SectionText from "@/components/ui/SectionText";
import SectionHeading from "@/components/ui/SectionHeading";

const StudyFields = () => {
  const fields = [
    {
      title: "Law",
      icon: <FaBalanceScale />,
      bg: "bg-emerald-100",
      text: "text-emerald-500",
    },
    {
      title: "Finance",
      icon: <FaChartPie />,
      bg: "bg-cyan-100",
      text: "text-cyan-500",
    },
    {
      title: "Engineering",
      icon: <FaHardHat />,
      bg: "bg-pink-100",
      text: "text-pink-500",
    },
    {
      title: "Economics",
      icon: <FaMoneyBillWave />,
      bg: "bg-blue-100",
      text: "text-blue-500",
    },
    {
      title: "Computer Engineering",
      icon: <FaMicrochip />,
      bg: "bg-orange-100",
      text: "text-orange-500",
    },
    {
      title: "Chinese",
      icon: <FaLanguage />,
      bg: "bg-red-100",
      text: "text-red-500",
    },

    {
      title: "Medicine",
      icon: <AiFillMedicineBox />,
      bg: "bg-sky-100",
      text: "text-sky-500",
    },

    {
      title: "Nursing",
      icon: <FaUserNurse />,
      bg: "bg-teal-100",
      text: "text-teal-500",
    },
  ];

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (!current) return;

    const scrollAmount = 260;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-350 mx-auto px-4">
        <SectionHeading title="What Would You Like To Study?" />

        <SectionText align="center" className="mt-2 mb-8">
          Explore popular fields of study and find the program that aligns with
          your goals, interests, and future career plans.
        </SectionText>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 items-center justify-center text-gray-600 hover:border-brand hover:text-brand transition z-10"
          >
            <FaChevronLeft />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2"
          >
            {fields.map((field) => (
              <div
                key={field.title}
                className="min-w-60 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${field.bg}`}
                >
                  <span className={`text-3xl ${field.text}`}>{field.icon}</span>
                </div>

                <h3 className="mt-4 text-lg font-light text-gray-600">
                  {field.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 items-center justify-center text-gray-600 hover:border-brand hover:text-brand transition z-10"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudyFields;
