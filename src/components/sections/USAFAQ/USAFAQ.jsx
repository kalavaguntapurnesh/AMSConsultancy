import SectionHeading from "../../ui/SectionHeading";
import FAQAccordion from "../../ui/FAQAccordion";
import whyStudyUSAFAQs from "../../../data/whyStudyUSAFAQs";

const FAQ = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-350 mx-auto px-4">
        {/* HEADER */}

        <SectionHeading title="USA Frequently Asked Questions" />

        {/* FAQ LIST */}
        <div className="max-w-5xl mx-auto divide-y divide-gray-200">
          <FAQAccordion items={whyStudyUSAFAQs} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
