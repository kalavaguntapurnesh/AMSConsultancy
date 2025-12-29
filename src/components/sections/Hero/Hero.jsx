import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineAcademicCap,
  HiOutlineBanknotes,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import SectionText from "@/components/ui/SectionText";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-white">
      {/* MAIN HERO */}
      <div className="max-w-350 mx-auto px-4 pt-28 md:pt-33.5 pb-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800">
              Your Journey to Global Education starts with{" "}
              <br className="hidden lg:block" />
              <span className="block mt-2">
                <span className="relative inline-block font-extrabold">
                  <span className="relative z-10">Alcheminds</span>

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

            <SectionText align="start" className="mt-6" width="xl">
              Ready to start your overseas education journey? Reach out to one
              of Alcheminds expert country counsellors today!
            </SectionText>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-brand text-black px-6 py-3 rounded-lg font-medium hover:bg-brand-dark transition"
              >
                Book Free Consultation
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-800 hover:border-brand transition"
              >
                <FaWhatsapp className="text-[#25D366] text-xl" />
                WhatsApp Us Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://www.edwiseinternational.com/img/homepage/study-abroad-consultants.webp"
                alt="Students"
                className="w-full max-w-lg"
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

      {/* STATS STRIP */}
      {/* <div className="max-w-350 mx-auto px-4 pt-8 pb-16">
        <div className="bg-[#f1f6fb] rounded-2xl py-10 px-6 grid md:grid-cols-4 grid-cols-2 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-brand">5 Years</h3>
            <p className="text-gray-700 mt-1">Of Excellence</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-brand">2000</h3>
            <p className="text-gray-700 mt-1">Success Stories</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-brand">$100,000</h3>
            <p className="text-gray-700 mt-1">In Scholarships</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-brand">99.8%</h3>
            <p className="text-gray-700 mt-1">Visa Success Rate</p>
          </div>
        </div>
      </div> */}

      {/* HERO FEATURES */}
      <div className="max-w-350 mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center">
                <HiOutlineBanknotes className="text-3xl text-sky-500" />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Education Loan
                </h4>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Find the best education loan in the shortest time. Compare 18+
                  banks with rates starting at just 7.1%.
                </p>

                <a
                  href="#"
                  className="mt-4 inline-block text-brand font-medium underline underline-offset-4"
                >
                  Check Your Eligibility
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                <HiOutlineAcademicCap className="text-3xl text-pink-500" />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Admission Guidance
                </h4>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Choose the right admission consultant for your profile. Get
                  free 30-minute counselling from our experts.
                </p>

                <a
                  href="#"
                  className="mt-4 inline-block text-brand font-medium underline underline-offset-4"
                >
                  Find Consultant Now
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center">
                <HiOutlineUsers className="text-3xl text-cyan-500" />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Community Support
                </h4>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Join a strong network of 10,000+ students, alumni, and experts
                  sharing real insights and experiences.
                </p>

                <a
                  href="#"
                  className="mt-4 inline-block text-brand font-medium underline underline-offset-4"
                >
                  Join Your Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
