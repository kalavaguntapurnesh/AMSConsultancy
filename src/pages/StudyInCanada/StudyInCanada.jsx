import whyStudyCanadaFAQs from "../../data/whyStudyCanadaFAQs";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import PopularCoursesCanada from "@/components/sections/PopularCoursesCanada";
import CanadaUniversities from "@/components/sections/CanadaUniversities";
import CountryHero from "@/components/sections/CountryHero";

const StudyInCanada = () => {
  return (
    <>
      <CountryHero
        country="Canada"
        description="Canada is known for its high-quality education system and diverse cultural environment. It offers a wide range of programs and opportunities for international students to thrive academically and personally."
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

      <CanadaUniversities />
      <PopularCoursesCanada />

      <section className="bg-white py-20">
        <div className="max-w-350 mx-auto px-4">
          {/* HEADER */}

          <SectionHeading title="Canada Frequently Asked Questions" />

          {/* FAQ LIST */}
          <div className="max-w-5xl mx-auto divide-y divide-gray-200">
            <FAQAccordion items={whyStudyCanadaFAQs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default StudyInCanada;
