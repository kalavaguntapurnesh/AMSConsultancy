const ContactCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-350 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1681681061635-a64755f982f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Graduation"
              className="rounded-3xl w-full h-130 object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Let Our Team{" "}
              <span className="relative inline-block">
                Reach Out To You
                {/* Scribble underline */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-4"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5 15 Q40 5 80 12 T160 10 Q180 9 195 12"
                    fill="none"
                    stroke="#ffc020"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* FORM */}
            <form className="mt-10 space-y-6">
              {/* ROW 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm mb-1 block">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                  />
                </div>

                <div>
                  <label className="text-sm mb-1 block">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm mb-1 block">Email ID</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                  />
                </div>

                <div>
                  <label className="text-sm mb-1 block">Mobile Number</label>
                  <input
                    type="tel"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                  />
                </div>
              </div>

              {/* ROW 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm mb-1 block">
                    Your preferred study destination
                  </label>
                  <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition">
                    <option>Select Destination</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Netherlands</option>
                    <option>New Zealand</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm mb-1 block">Course</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                  />
                </div>
              </div>

              {/* ROW 4 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm mb-1 block">
                    When do you plan to study?
                  </label>
                  <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition">
                    <option>Select Month</option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm mb-1 block">
                    Your preferred year
                  </label>
                  <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition">
                    <option>Select Year</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                  </select>
                </div>
              </div>

              {/* CONSENT */}
              <div className="flex items-start gap-3 text-sm text-gray-900">
                <input type="checkbox" className="mt-1 accent-brand" />
                <p>
                  I consent to receiving Calls, WhatsApp, Email and Google RCS
                  to assist with this enquiry.
                </p>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-4 border border-brand px-16 py-2 rounded-lg font-medium bg-brand transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
