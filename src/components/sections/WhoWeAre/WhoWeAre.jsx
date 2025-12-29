import {
  HiOutlineGlobeAlt,
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineArrowPath,
} from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionText from "@/components/ui/SectionText";

const WhoWeAre = () => {
  return (
    <section className="py-8">
      <div className="max-w-350 mx-auto px-4">
        {/* SECTION HEADER */}
        <div className="text-center mx-auto">
          <SectionHeading title="Who We Are" />

          <SectionText align="center" className="mt-8">
            Alcheminds is a global education consultancy built on trust,
            expertise, and a student-first philosophy. We help learners unlock
            international opportunities through personalized guidance and
            world-class university partnerships.
          </SectionText>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* CARD 1 */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <HiOutlineGlobeAlt className="w-7 h-7 text-brand" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              Global Reach
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              We connect students with leading universities across the USA, UK,
              Canada, Australia, and beyond.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <HiOutlineAcademicCap className="w-7 h-7 text-brand" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              Expert Guidance
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Our experienced counsellors provide tailored advice based on your
              academic background and career goals.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <HiOutlineHeart className="w-7 h-7 text-brand" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              Student-First Approach
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Every decision we make is centered around transparency,
              accessibility, and your long-term success.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <HiOutlineArrowPath className="w-7 h-7 text-brand" />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              End-to-End Support
            </h3>

            <p className="mt-3 text-gray-600 leading-relaxed">
              From course selection and applications to visas and pre-departure
              support, we handle it all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
