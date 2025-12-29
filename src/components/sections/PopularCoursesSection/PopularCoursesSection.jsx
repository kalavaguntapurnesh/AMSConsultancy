const PopularCoursesSection = ({
  title,
  courses,
  image,
  imageAlt = "Students studying",
  accentColor = "#FFE6C7",
}) => {
  return (
    <section className="max-w-350 mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          {/* Accent background */}
          <div
            className="absolute -top-6 -left-6 w-[85%] h-[85%] rounded-2xl"
            style={{ backgroundColor: accentColor }}
          />

          <img
            src={image}
            alt={imageAlt}
            className="relative rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            {title}
          </h2>

          <div className="space-y-5">
            {courses.map((course) => (
              <div
                key={course}
                className="flex items-center gap-4 border border-gray-200 rounded-xl px-6 py-4 hover:border-brand hover:shadow-sm transition"
              >
                <span className="text-[#FFB703] text-xl">★</span>
                <span className="text-gray-800 font-medium">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
