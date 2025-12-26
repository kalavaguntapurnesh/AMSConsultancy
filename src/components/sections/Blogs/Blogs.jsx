const Blogs = () => {
  return (
    <section className="py-8">
      <div className="max-w-350 mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <span className="h-px w-32 bg-brand" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Blogs
          </h2>
          <span className="h-px w-32 bg-brand" />
        </div>

        <p className="mt-2 mb-8 text-center text-gray-500 font-light text-lg">
          Explore our latest blogs and articles to stay updated with the current
          trends and insights in the education sector.
        </p>

        <div className="grid grid-cols-2 gap-8">
          {/* LEFT – FEATURED BLOG */}
          <div className="bg-white col-span-1 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1694475364942-b755ad751a40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Study in USA"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium uppercase">
                Study Abroad
              </span>

              <h3 className="mt-3 text-2xl font-semibold text-gray-900 leading-snug">
                Study in USA: Top Universities, Benefits, Cost, Intakes,
                Admission
              </h3>

              <p className="mt-6 text-sm text-gray-500">Dec 22, 2025</p>
            </div>
          </div>

          {/* RIGHT – SMALL BLOGS */}
          <div className="col-span-1 flex flex-col justify-between gap-2">
            {/* Blog 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
              <img
                src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Student Testimonial"
                className="w-full md:w-48 h-48 object-cover"
              />

              <div className="p-6 flex-1">
                <span className="text-sm text-blue-600 font-medium uppercase">
                  Student Testimonial
                </span>

                <h4 className="mt-2 text-lg font-semibold text-gray-900">
                  How Alcheminds Made My Study Abroad Dream Come True
                </h4>

                <p className="mt-4 text-sm text-gray-500">January 06, 2026</p>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
              <img
                src="https://plus.unsplash.com/premium_photo-1661962726504-fa8f464a1bb8?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="UKVI IELTS"
                className="w-full md:w-48 h-48 object-cover"
              />

              <div className="p-6 flex-1">
                <span className="text-sm text-blue-600 font-medium uppercase">
                  Coaching
                </span>

                <h4 className="mt-2 text-lg font-semibold text-gray-900">
                  Complete Overview for UKVI IELTS – Types, Format, Fees and
                  More
                </h4>

                <p className="mt-4 text-sm text-gray-500">February 15, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
