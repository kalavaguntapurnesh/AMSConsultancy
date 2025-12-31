import UniversitiesGrid from "@/components/sections/UniversitiesGrid";
import canadaUniversities from "../../../data/canadaUniversities";

const CanadaUniversities = () => {
  return (
    <UniversitiesGrid
      title="Popular Universities in Canada"
      description="We collaborate with leading universities across the globe to help students access world-class education and opportunities."
      universities={canadaUniversities}
    />
  );
};

export default CanadaUniversities;