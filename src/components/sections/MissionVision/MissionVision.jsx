import { HiOutlineFlag, HiOutlineLightBulb } from "react-icons/hi2";

const MissionVision = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-350 mx-auto px-4">
        {/* SECTION HEADER */}
        <div className="text-center mx-auto">
          <div className="flex items-center justify-center gap-6 mb-6">
            <span className="h-px w-32 bg-brand" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission & Vision
            </h2>
            <span className="h-px w-32 bg-brand" />
          </div>

          <p className="mt-6 text-lg text-gray-600 font-light">
            What drives us every day and where we are headed as a global
            education partner.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MISSION */}
          <div className="group relative bg-[#f9fbff] rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition">
            {/* ICON */}
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-8 group-hover:scale-110 transition">
              <HiOutlineFlag className="w-8 h-8 text-brand" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>

            <p className="mt-5 text-gray-600 font-light text-lg">
              Our mission is to empower students with transparent guidance,
              personalized counselling, and access to world-class universities.
              We strive to simplify the journey of international education while
              ensuring informed decisions and long-term career success.
            </p>
          </div>

          {/* VISION */}
          <div className="group relative bg-[#f9fbff] rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition">
            {/* ICON */}
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-8 group-hover:scale-110 transition">
              <HiOutlineLightBulb className="w-8 h-8 text-brand" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>

            <p className="mt-5 text-gray-600 font-light text-lg">
              Our vision is to become a globally trusted education consultancy
              that bridges students and institutions worldwide. We aim to build
              a future where international education is accessible, inclusive,
              and aligned with evolving global career opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
