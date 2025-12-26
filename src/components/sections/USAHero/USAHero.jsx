import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineUsers,
} from "react-icons/hi2";

const USAHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* MAIN HERO */}
      <div className="max-w-350 mx-auto px-4 pt-28 md:pt-33.5 pb-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Why Study In The
              <br className="hidden lg:block" />
              <span className="block mt-2">
                <span className="relative inline-block font-bold">
                  <span className="relative z-10">USA?</span>

                  {/* Scribble cross-out underline (below text) */}
                  <svg
                    className="absolute left-0 bottom-0 translate-y-2 w-full h-6 rotate-[-2deg]"
                    viewBox="0 0 200 40"
                    preserveAspectRatio="none"
                  >
                    {/* Main scribble */}
                    <path
                      d="M5 20 
             Q40 10 75 22 
             Q110 32 150 18 
             Q175 12 195 20"
                      fill="none"
                      stroke="#ffc020"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Second rough pass */}
                    <path
                      d="M5 24 
             Q35 14 70 26 
             Q105 30 145 22 
             Q170 16 195 26"
                      fill="none"
                      stroke="#ffc020"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-500 font-light text-lg">
              The United States of America has been a global leader in the field
              of education and boasts of a lion’s share of top ranked
              universities according to all major international rankings. Few
              countries offer as many high ranked universities and noble
              laureate academia, as USA does.
            </p>

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
                src="https://images.unsplash.com/photo-1688417486375-3508bc17b941?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Students"
                className="w-full max-w-lg rounded"
              />

              {/* Floating Badges */}
              <div className="absolute top-6 -right-6 bg-white px-4 py-2 rounded-xl shadow text-sm">
                <strong className="text-brand">99%</strong> Visa Success Rate
              </div>

              <div className="absolute bottom-24 -left-6 bg-white px-4 py-2 rounded-xl shadow text-sm">
                <strong className="text-brand">950+</strong> Universities
                <div className="text-xs text-gray-500">
                  5 Years of Experience
                </div>
              </div>

              <div className="absolute bottom-6 right-0 bg-white px-4 py-2 rounded-xl shadow text-sm">
                <strong className="text-brand">2000+</strong> Students
                <div className="text-xs text-gray-500">Part of Alumni</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HERO FEATURES */}
    </section>
  );
};

export default USAHero;
