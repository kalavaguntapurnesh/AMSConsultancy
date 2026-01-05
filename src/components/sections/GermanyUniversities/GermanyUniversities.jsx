import UniversitiesGrid from "@/components/sections/UniversitiesGrid";
import germanyUniversities from "../../../data/germanyUniversities";

const GermanyUniversities = () => {
  return (
    <UniversitiesGrid
      title="Popular Universities in Germany"
      description="We collaborate with leading universities across Germany to help students access world-class education and innovative research opportunities."
      universities={germanyUniversities}
    />
  );
};

export default GermanyUniversities;