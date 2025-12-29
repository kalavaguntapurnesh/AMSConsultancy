import SectionHeading from "@/components/ui/SectionHeading";
import globalUniversities from "../../../data/globalUniversities";
import UniversitiesGrid from "../UniversitiesGrid";

const Universities = () => {
  return (
    <UniversitiesGrid
      title="Our Partner Universities"
      description="We collaborate with leading universities across the globe to help students access world-class education and opportunities."
      universities={globalUniversities}
    />
  );
};

export default Universities;
