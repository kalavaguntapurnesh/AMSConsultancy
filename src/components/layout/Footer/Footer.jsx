import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1a2a] text-white overflow-hidden">
      {/* CURVED TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,20 480,20 720,40 960,60 1200,60 1440,40 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* NEWSLETTER */}
      <div className="relative z-10 max-w-350 mx-auto px-4 pt-24 pb-16">
        <h3 className="text-center text-2xl font-semibold mb-8">
          Stay updated with Alcheminds
        </h3>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Email ID"
            className="w-full md:w-64 px-4 py-3 bg-white rounded-lg text-gray-900 outline-none"
          />

          <select className="w-full md:w-64 px-4 py-3 bg-white rounded-lg text-gray-900 outline-none">
            <option>I&apos;m Interested in</option>
            <option>Study Abroad</option>
            <option>Test Preparation</option>
            <option>Scholarships</option>
          </select>

          <button className="bg-brand px-8 py-3 rounded-lg text-white hover:opacity-90 transition">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="border-t border-white/10">
        <div className="max-w-350 mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ABOUT */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Alcheminds</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              We are a fast-growing education consultancy helping students
              achieve global education dreams by connecting them with top
              universities worldwide.
            </p>
          </div>

          {/* STUDY DESTINATIONS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/study-in-usa" className="hover:text-white transition-colors">
                  United States
                </Link>
              </li>
              <li>
                <Link to="/study-in-canada" className="hover:text-white transition-colors">
                  Canada
                </Link>
              </li>
              <li>
                <Link to="/study-in-uk" className="hover:text-white transition-colors">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link to="/study-in-ireland" className="hover:text-white transition-colors">
                  Ireland
                </Link>
              </li>
              <li>
                <Link to="/study-in-australia" className="hover:text-white transition-colors">
                  Australia
                </Link>
              </li>
              <li>New Zealand</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Services for Students
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Counselling</li>
              <li>Test Preparation</li>
              <li>University Selection</li>
              <li>Applications & Admission</li>
              <li>Scholarships</li>
              <li>Visa Processing</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>About Us</li>
              <li className="flex items-center gap-2">
                Careers
                <span className="bg-brand text-xs px-2 py-0.5 rounded">
                  We Hire
                </span>
              </li>
              <li>News & Events</li>
              <li>CSR Policy</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-350 mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div className="flex gap-4">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </div>

          <p>© {new Date().getFullYear()} Alcheminds. All rights reserved.</p>

          <div className="flex gap-4">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
