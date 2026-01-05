import { Link } from "react-router-dom";
import usaFlag from "@/assets/flags/usa.png";
import ukFlag from "@/assets/flags/uk.png";
import canadaFlag from "@/assets/flags/canada.png";
import irelandFlag from "@/assets/flags/ireland.png";
import australiaFlag from "@/assets/flags/australia.png";
import germanyFlag from "@/assets/flags/germany.png";

const CountrySelection = () => {
  const countries = [
    { name: "USA", flag: usaFlag, link: "/study-in-usa" },
    { name: "UK", flag: ukFlag, link: "/study-in-uk" },
    { name: "Canada", flag: canadaFlag, link: "/study-in-canada" },
    { name: "Ireland", flag: irelandFlag, link: "/study-in-ireland" },
    { 
      name: "France", 
      flag: "https://flagcdn.com/w80/fr.png", 
      link: "/study-in-france" 
    },
    { name: "Australia", flag: australiaFlag, link: "/study-in-australia" },
    { 
      name: "New Zealand", 
      flag: "https://flagcdn.com/w80/nz.png", 
      link: "/study-in-new-zealand" 
    },
    { name: "Germany", flag: germanyFlag, link: "/study-in-germany" },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Which country do you want to study in?
        </h2>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <Link
              key={index}
              to={country.link}
              className="group flex flex-col items-center p-6 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Flag Circle */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback for missing flags
                    e.target.src = `https://flagcdn.com/w80/${country.name.toLowerCase().replace(/\s+/g, '-')}.png`;
                  }}
                />
              </div>
              
              {/* Country Name */}
              <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-purple-600 transition-colors">
                {country.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountrySelection;