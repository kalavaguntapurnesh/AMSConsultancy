import SectionHeading from "@/components/ui/SectionHeading";
import SectionText from "@/components/ui/SectionText";

const AboutHero = () => {
  return (
    <section className="bg-white pt-24">
      <div className="max-w-350 mx-auto px-4 py-8">
        {/* HEADING */}

        <SectionHeading title="About Us" />

        <SectionText align="center" className="mt-8">
          Welcome to Alcheminds, your gateway to affordable, high-quality
          education and global opportunities. We are committed to making
          international education accessible without compromising excellence.
          Our expert-crafted programs and personalized counselling ensure
          students gain real-world exposure, practical guidance, and career
          clarity. With a strong global university network, end-to-end support,
          and a student-first approach, Alcheminds empowers learners to thrive
          in an ever-evolving academic landscape. Whether you are a beginner or
          a professional looking to upskill, we stand beside you at every step
          of your global education journey.
        </SectionText>

        {/* TEAM IMAGE */}
        <div className="mt-8">
          <img
            src="https://ineuron.ai/_next/image?url=%2Fimages%2FaboutUs%2FaboutUs.jpg&w=3840&q=75"
            alt="Alcheminds Team"
            className="lg:h-115 object-cover h-auto w-full rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
