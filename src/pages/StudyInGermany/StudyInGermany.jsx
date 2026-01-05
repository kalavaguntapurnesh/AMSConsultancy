import whyStudyGermanyFAQs from "../../data/whyStudyGermanyFAQs";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import PopularCoursesGermany from "@/components/sections/PopularCoursesGermany";
import GermanyUniversities from "@/components/sections/GermanyUniversities/GermanyUniversities";
import CountryHero from "@/components/sections/CountryHero";

const StudyInGermany = () => {
  return (
    <>
      <CountryHero
        country="Germany"
        description="Germany combines academic excellence with innovation and practical learning. Home to world-renowned universities and leading industries, Germany offers exceptional education opportunities with affordable tuition and strong career prospects."
        image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        underlineColor="#000000"
        stats={[
          {
            value: "€0-350",
            label: "Semester Fees",
            position: "top-6 -right-6",
          },
          {
            value: "18 Months",
            label: "Post Study Work",
            position: "bottom-6 right-0",
          },
        ]}
      />

      <GermanyUniversities />
      <PopularCoursesGermany />

      <section className="bg-white py-20">
        <div className="max-w-350 mx-auto px-4">
          {/* HEADER */}

          <SectionHeading title="Germany Frequently Asked Questions" />

          {/* FAQ LIST */}
          <div className="max-w-5xl mx-auto divide-y divide-gray-200">
            <FAQAccordion items={whyStudyGermanyFAQs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyInGermany;