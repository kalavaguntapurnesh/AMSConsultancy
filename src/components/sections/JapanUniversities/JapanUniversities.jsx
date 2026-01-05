import UniversitiesGrid from "@/components/sections/UniversitiesGrid";
import japanUniversities from "../../../data/japanUniversities";

const JapanUniversities = () => {
  return (
    <UniversitiesGrid
      title="Popular Universities in Japan"
      description="We collaborate with leading universities across Japan to help students access world-class education and cutting-edge research opportunities in technology, innovation, and traditional Japanese culture."
      universities={japanUniversities}
    />
  );
};

export default JapanUniversities;