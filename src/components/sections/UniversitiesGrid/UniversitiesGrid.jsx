import SectionHeading from "@/components/ui/SectionHeading";
import SectionText from "@/components/ui/SectionText";

const UniversitiesGrid = ({ title, description, universities }) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-350 mx-auto px-4">
        {/* Heading */}
        <SectionHeading title={title} />

        {/* Description */}
        {description && (
          <SectionText align="center" className="mt-8">
            {description}
          </SectionText>
        )}

        {/* Logos Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {universities.map((uni) => (
            <div
              key={uni.name}
              className="flex items-center justify-center bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <img
                src={uni.logo}
                alt={uni.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitiesGrid;
