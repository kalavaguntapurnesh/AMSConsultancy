const Universities = () => {
  const universities = [
    {
      name: "Harvard University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/2560px-Harvard_University_logo.svg.png",
    },
    {
      name: "University of Toronto",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/UofT_logo.svg/2560px-UofT_logo.svg.png",
    },
    {
      name: "University of Melbourne",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Stanford_wordmark_%282012%29.svg/2560px-Stanford_wordmark_%282012%29.svg.png",
    },
    {
      name: "University of Florida",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Florida_logo.svg/2560px-University_of_Florida_logo.svg.png",
    },
    {
      name: "University of Exeter",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/79/University_of_Exeter_logo_2022.png",
    },
    {
      name: "National University of Singapore",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/NationalUniversityofSingapore.svg/2560px-NationalUniversityofSingapore.svg.png",
    },
    {
      name: "University of Sydney",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/The_University_of_Sydney_Logo.svg/2560px-The_University_of_Sydney_Logo.svg.png",
    },
    {
      name: "ETH Zurich",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ETH_Z%C3%BCrich_Logo_black.svg/2560px-ETH_Z%C3%BCrich_Logo_black.svg.png",
    },
    {
      name: "University of Georgia",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/University_of_Georgia_logo.svg/2560px-University_of_Georgia_logo.svg.png",
    },
    {
      name: "University Of Berlin",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Freie_Universit%C3%A4t_Berlin_Logo_05.2024.svg/2560px-Freie_Universit%C3%A4t_Berlin_Logo_05.2024.svg.png",
    },
    {
      name: "University of Texas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/University_of_Texas_at_Austin_logo.svg/2560px-University_of_Texas_at_Austin_logo.svg.png",
    },
    {
      name: "University of Houston",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/University_of_Houston_full_logo.svg/2560px-University_of_Houston_full_logo.svg.png",
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="max-w-350 mx-auto px-4">
        <div className="flex items-center justify-center gap-6 mb-14">
          <span className="h-px w-32 bg-brand" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Partner Universities
          </h2>
          <span className="h-px w-32 bg-brand" />
        </div>

        <p className="mt-4 text-center font-light mx-auto text-gray-600 text-lg">
          We collaborate with leading universities across the globe to help
          students access world-class education and opportunities.
        </p>

        {/* Logos Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {universities.map((uni) => (
            <div
              key={uni.name}
              className="flex items-center justify-center bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <img
                src={uni.logo}
                alt={uni.name}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;
