import USAUniversities from "@/components/sections/USAUniversities";
import PopularCoursesUSA from "@/components/sections/PopularCoursesUSA";
import USAFAQ from "@/components/sections/USAFAQ";
import CountryHero from "@/components/sections/CountryHero";

const StudyInUsa = () => {
  return (
    <>
      <CountryHero
        country="USA"
        description="The United States of America has been a global leader in the field of education and boasts of a lion’s share of top ranked universities according to all major international rankings. Few countries offer as many high ranked universities and noble laureate academia, as USA does."
        image="https://images.unsplash.com/photo-1688417486375-3508bc17b941"
        stats={[
          {
            value: "99%",
            label: "Visa Success Rate",
            position: "top-6 -right-6",
          },
          {
            value: "950+",
            label: "Universities",
            sub: "5 Years of Experience",
            position: "bottom-24 -left-6",
          },
          {
            value: "2000+",
            label: "Students",
            sub: "Part of Alumni",
            position: "bottom-6 right-0",
          },
        ]}
      />

      <USAUniversities />
      <PopularCoursesUSA />
      <USAFAQ />
    </>
  );
};

export default StudyInUsa;
