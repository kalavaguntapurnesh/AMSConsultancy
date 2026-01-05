import whyStudyJapanFAQs from "../../data/whyStudyJapanFAQs";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import PopularCoursesJapan from "@/components/sections/PopularCoursesJapan";
import JapanUniversities from "@/components/sections/JapanUniversities/JapanUniversities";
import CountryHero from "@/components/sections/CountryHero";

const StudyInJapan = () => {
  return (
    <>
      <CountryHero
        country="Japan"
        description="Japan offers a unique blend of cutting-edge technology and rich cultural heritage. With world-renowned universities, innovative research opportunities, and a thriving economy, Japan provides an exceptional educational experience in the heart of Asia."
        image="https://images.unsplash.com/photo-1532236204992-f5e85c024202?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        underlineColor="#dc2626"
        stats={[
          {
            value: "2 Yr",
            label: "Masters Programs",
            position: "top-6 -right-6",
          },
          {
            value: "1 Yr",
            label: "Job Hunting Visa",
            position: "bottom-6 right-0",
          },
        ]}
      />

      <JapanUniversities />
      <PopularCoursesJapan />

      <section className="bg-white py-20">
        <div className="max-w-350 mx-auto px-4">
          {/* HEADER */}

          <SectionHeading title="Japan Frequently Asked Questions" />

          {/* FAQ LIST */}
          <div className="max-w-5xl mx-auto divide-y divide-gray-200">
            <FAQAccordion items={whyStudyJapanFAQs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyInJapan;