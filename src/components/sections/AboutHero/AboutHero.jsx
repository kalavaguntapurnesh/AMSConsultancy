const AboutHero = () => {
  return (
    <section className="bg-white pt-24">
      <div className="max-w-350 mx-auto px-4 py-8">
        {/* HEADING */}

        <div className="flex items-center justify-center gap-6 mb-14">
          <span className="h-px w-32 bg-brand" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h2>
          <span className="h-px w-32 bg-brand" />
        </div>

        {/* DESCRIPTION */}
        <p className="mt-8 mx-auto text-center text-lg text-gray-600 font-light">
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
        </p>

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
