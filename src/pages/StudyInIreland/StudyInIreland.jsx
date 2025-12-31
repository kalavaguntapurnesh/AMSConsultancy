import whyStudyIrelandFAQs from "../../data/whyStudyIrelandFAQs";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import PopularCoursesIreland from "@/components/sections/PopularCoursesIreland";
import IrelandUniversities from "@/components/sections/IrelandUniversities/IrelandUniversities";
import CountryHero from "@/components/sections/CountryHero";

const StudyInIreland = () => {
  return (
    <>
      <CountryHero
        country="Ireland"
        description="Ireland offers world-class education in a friendly, English-speaking environment. Known for its strong technology sector, rich cultural heritage, and excellent post-study work opportunities, Ireland is an ideal destination for international students."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        underlineColor="#22c55e"
        stats={[
          {
            value: "1-2 Yr",
            label: "Masters Programs",
            position: "top-6 -right-6",
          },
          {
            value: "2 Yr",
            label: "Post Study Work",
            position: "bottom-6 right-0",
          },
        ]}
      />

      <IrelandUniversities />
      <PopularCoursesIreland />

      <section className="bg-white py-20">
        <div className="max-w-350 mx-auto px-4">
          {/* HEADER */}

          <SectionHeading title="Ireland Frequently Asked Questions" />

          {/* FAQ LIST */}
          <div className="max-w-5xl mx-auto divide-y divide-gray-200">
            <FAQAccordion items={whyStudyIrelandFAQs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyInIreland;