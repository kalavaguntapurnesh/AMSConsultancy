import { FaWhatsapp } from "react-icons/fa";
import SectionText from "@/components/ui/SectionText";

const CountryHero = ({
  country,
  description,
  image,
  stats = [],
  underlineColor = "#ffc020",
}) => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-350 mx-auto px-4 pt-28 md:pt-33.5 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Why Study In The
              <br className="hidden lg:block" />
              <span className="block mt-2">
                <span className="relative inline-block font-bold">
                  <span className="relative z-10">{country}?</span>

                  {/* Scribble underline */}
                  <svg
                    className="absolute left-0 bottom-0 translate-y-2 w-full h-6 rotate-[-2deg]"
                    viewBox="0 0 200 40"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5 20 
                      Q40 10 75 22 
                      Q110 32 150 18 
                      Q175 12 195 20"
                      fill="none"
                      stroke={underlineColor}
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 24 
                      Q35 14 70 26 
                      Q105 30 145 22 
                      Q170 16 195 26"
                      fill="none"
                      stroke={underlineColor}
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <SectionText className="mt-6">{description}</SectionText>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-brand text-black px-6 py-3 rounded-lg font-medium hover:bg-brand-dark transition">
                Book Free Consultation
              </button>

              <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-800 hover:border-brand transition">
                <FaWhatsapp className="text-[#25D366] text-xl" />
                WhatsApp Us Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={image}
                alt={`${country} students`}
                className="w-full max-w-lg rounded"
              />

              {/* Floating Stats */}
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`absolute ${stat.position} bg-white px-4 py-2 rounded-xl shadow text-sm`}
                >
                  <strong className="text-brand">{stat.value}</strong>{" "}
                  {stat.label}
                  {stat.sub && (
                    <div className="text-xs text-gray-500">{stat.sub}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryHero;
