import UniversitiesGrid from "@/components/sections/UniversitiesGrid";
import australiaUniversities from "../../../data/australiaUniversities";

const AustraliaUniversities = () => {
  return (
    <UniversitiesGrid
      title="Popular Universities in Australia"
      description="We collaborate with leading universities across Australia to help students access world-class education and opportunities."
      universities={australiaUniversities}
    />
  );
};

export default AustraliaUniversities;