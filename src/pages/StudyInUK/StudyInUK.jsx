import whyStudyUKFAQs from "../../data/whyStudyUKFAQs";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import PopularCoursesUK from "@/components/sections/PopularCoursesUK";
import UKUniversities from "@/components/sections/UKUniversities/UKUniversities";
import CountryHero from "@/components/sections/CountryHero";

const StudyInUK = () => {
  return (
    <>
      <CountryHero
        country="UK"
        description="The United Kingdom has a rich academic heritage and is home to some of the world's most prestigious universities. With a diverse range of courses and a vibrant cultural scene, the UK offers an unparalleled study experience."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        underlineColor="#3b82f6"
        stats={[
          {
            value: "1 Yr",
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

      <UKUniversities />
      <PopularCoursesUK />

      <section className="bg-white py-20">
        <div className="max-w-350 mx-auto px-4">
          {/* HEADER */}

          <SectionHeading title="UK Frequently Asked Questions" />

          {/* FAQ LIST */}
          <div className="max-w-5xl mx-auto divide-y divide-gray-200">
            <FAQAccordion items={whyStudyUKFAQs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyInUK;
