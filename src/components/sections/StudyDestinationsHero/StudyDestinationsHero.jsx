const StudyDestinationsHero = () => {
  const navigationItems = [
    { label: "Universities", icon: "📚" },
    { label: "Scholarships", icon: "🎓" },
    { label: "Cost of Living", icon: "💰" },
    { label: "Visa", icon: "📄" },
    { label: "Deadlines", icon: "📅" },
    { label: "Part-time Work", icon: "💼" },
  ];

  return (
    <section className="py-16 px-4 mt-20 lg:mt-24" style={{ background: 'linear-gradient(135deg, #ffc020 0%, #e6ac00 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Breadcrumb */}
            <div className="flex items-center text-white/80 mb-6">
              <span className="text-sm">🏠</span>
              <span className="mx-2 text-sm">›</span>
              <span className="text-sm">Popular Countries to Study Abroad</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Popular Countries to{" "}
              <span className="text-green-300">Study Abroad</span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed">
              Make informed choices. Explore all about popular destinations for studying abroad.
            </p>
          </div>

          {/* Right side - Navigation items */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="grid grid-cols-2 gap-4">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-white font-medium">{item.label}</span>
                  <span className="text-white/70 ml-auto">›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyDestinationsHero;