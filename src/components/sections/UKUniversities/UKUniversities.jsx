import UniversitiesGrid from "@/components/sections/UniversitiesGrid";
import ukUniversities from "../../../data/ukUniversities";

const UKUniversities = () => {
  return (
    <UniversitiesGrid
      title="Popular Universities in UK"
      description="We collaborate with leading universities across the globe to help students access world-class education and opportunities."
      universities={ukUniversities}
    />
  );
};

export default UKUniversities;
