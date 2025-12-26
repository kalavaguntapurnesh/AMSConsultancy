import Hero from "@/components/sections/Hero";
import StudyDestinations from "@/components/sections/StudyDestinations";
import StudyFields from "@/components/sections/StudyFields";
import ContactCTA from "@/components/sections/ContactCTA/ContactCTA";
import Universities from "@/components/sections/Universities";
import Blogs from "@/components/sections/Blogs";
import FAQ from "@/components/sections/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <StudyDestinations />
      <StudyFields />
      <ContactCTA />
      <Universities />
      <FAQ />
      <Blogs />
    </>
  );
};

export default Home;
