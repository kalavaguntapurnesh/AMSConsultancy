import UniversitiesGrid from "@/components/sections/UniversitiesGrid";
import irelandUniversities from "../../../data/irelandUniversities";

const IrelandUniversities = () => {
  return (
    <UniversitiesGrid
      title="Popular Universities in Ireland"
      description="We collaborate with leading universities across Ireland to help students access world-class education and opportunities in the Emerald Isle."
      universities={irelandUniversities}
    />
  );
};

export default IrelandUniversities;