import { FaThreads } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FaSackDollar } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { MdSupport } from "react-icons/md";
import { FaIntercom } from "react-icons/fa6";
import logo from "@/assets/logos/logo.png";
import {
  FaCogs,
  FaChartBar,
  FaTools,
  FaMoneyCheckAlt,
  FaIndustry,
  FaLaptopCode,
  FaUniversity,
  FaPuzzlePiece,
  FaLightbulb,
  FaQuestionCircle,
  FaLock,
  FaLifeRing,
} from "react-icons/fa";

import usaFlag from "@/assets/flags/usa.png";
import canadaFlag from "@/assets/flags/canada.png";
import ukFlag from "@/assets/flags/uk.png";
import australiaFlag from "@/assets/flags/australia.png";
import irelandFlag from "@/assets/flags/ireland.png";
import japanFlag from "@/assets/flags/japan.png";
import germanyFlag from "@/assets/flags/germany.png";
import indiaFlag from "@/assets/flags/india.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown));
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out select-none bg-white shadow-sm-md py-6">
      <div
        className={`lg:rounded-full max-w-350 mx-auto flex justify-between items-center px-6 lg:bg-navColor ${
          isScrolled ? "lg:py-0" : "lg:py-0"
        }`}
      >
        <a href="/" className="flex items-center">
          <img src={logo} alt="Company Logo" className="lg:w-48 w-44 h-auto" />
        </a>

        <ul className="hidden lg:flex grow justify-center space-x-8 items-center">
          <Tabs />
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="/contact"
            className="border font-medium relative lg:px-6 md:px-4 py-2 rounded text-sm text-white border-brand bg-brand transition duration-500"
          >
            <span className="relative z-10">Contact Us</span>
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose
                className={`w-5 h-5 ${
                  isScrolled ? "text-[#0A3161]" : "text-[#0A3161]"
                }`}
              />
            ) : (
              <RiMenu3Fill
                className={`w-5 h-5 ${
                  isScrolled ? "text-[#0A3161]" : "text-[#0A3161]"
                }`}
              />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "lg:hidden fixed -left-full h-full ease-in-out duration-1000 "
              : "lg:hidden fixed left-0 top-0 w-full h-full bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-sm-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <a href="/" className="flex items-center flex-row ml-4 pt-4 ">
            {/* <img src={HomeImg} alt="logo" className="md:w-8 md:h-8 h-6 w-6 " /> */}
            <span className="text-2xl ml-1 mt-0.5 transition-all duration-300 ease-in-out text-[#B31942] font-bold">
              Trescor
            </span>
          </a>

          <ul className="p-4 mt-4">
            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("home")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                Our Services
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "home"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "home" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center hover:bg-[#d9d9d9] transition-colors">
                      <FaCogs className="text-[#0a3161]" />
                      <a
                        href="/services-microsoft-dynamics-365-finance"
                        className="block text-sm text-gray-700"
                      >
                        Dynamic F & O
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center hover:bg-[#d9d9d9] transition-colors">
                      <FaChartBar className="text-[#0a3161]" />
                      <a
                        href="/bi-analytics-services"
                        className="block text-sm text-gray-700"
                      >
                        BI Analytics
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center hover:bg-[#d9d9d9] transition-colors">
                      <FaTools className="text-[#0a3161]" />
                      <a
                        href="/services-microsoft-dynamics-365-finance"
                        className="block text-sm text-gray-700"
                      >
                        Support & Managed
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("services")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                Industries we serve
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "services"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "services" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaMoneyCheckAlt className="text-[#0a3161]" />
                      <a
                        href="/industries/financial"
                        className="block text-sm text-gray-700"
                      >
                        Financial
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaIndustry className="text-[#0a3161]" />
                      <a
                        href="/industries/manufacturing"
                        className="block text-sm text-gray-700"
                      >
                        Manufacturing
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLaptopCode className="text-[#0a3161]" />
                      <a
                        href="/industries/financial"
                        className="block text-sm text-gray-700"
                      >
                        Software
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaUniversity className="text-[#0a3161]" />
                      <a
                        href="/industries/financial"
                        className="block text-sm text-gray-700"
                      >
                        Public Sector
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("products")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                Our Solutions
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "products"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "products" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaPuzzlePiece className="text-[#0a3161]" />
                      <a href="/" className="block text-sm text-gray-700">
                        Integration Consulting
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLightbulb className="text-[#0a3161]" />
                      <a href="/" className="block text-sm text-gray-700">
                        Business Needs
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("technologies")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                About Trescor
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "technologies"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "technologies" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaQuestionCircle className="text-[#0a3161]" />
                      <a
                        href="/about-trescor"
                        className="block text-sm text-gray-700"
                      >
                        Why Trescor
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaHandshake className="text-[#0a3161]" />
                      <a
                        href="/collaborate-with-us"
                        className="block text-sm text-gray-700"
                      >
                        Collaborate with us
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLock className="text-[#0a3161]" />
                      <a
                        href="/privacy-policy"
                        className="block text-sm text-gray-700"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="px-4 py-3">
              <div
                onClick={() => toggleMobileDropdown("mobile-app")}
                className="flex items-center justify-between cursor-pointer text-[#0a3161] font-medium"
              >
                Need Support
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "mobile-app"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "mobile-app" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 grid grid-cols-2 gap-4"
                  >
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLifeRing className="text-[#0a3161]" />
                      <a
                        href="/contact-trescor"
                        className="block text-sm text-gray-700"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="text-navGray p-2 rounded bg-[#e6e6e6] text-center font-medium flex items-center gap-2 justify-center">
                      <FaLifeRing className="text-[#0a3161]" />
                      <a
                        href="/dynamics-365-support-services"
                        className="block text-sm text-gray-700"
                      >
                        Find with us
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="px-4 mt-10 w-full flex justify-center items-center">
              <a
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="border relative py-2.5 bg-trumpOne text-white rounded-full border-[#0a3161] text-sm bg-[#0a3161]  flex justify-center items-center font-semibold overflow-hidden text-center w-[100%]"
              >
                <span className="relative z-10">Close</span>
              </a>
            </li>
          </ul>

          <div className="px-4">
            <h5 className="p-4 text-xl text-center text-[#0a3161] font-semibold">
              Follow us on
            </h5>
            <div className="p-4">
              <div className="grid grid-cols-5 ">
                <div className="flex justify-center items-center">
                  <a href="https://www.linkedin.com/in/trescor-software-546012369/">
                    <FaLinkedinIn className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out " />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="https://x.com/Trescor1226">
                    <FaXTwitter className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="https://www.instagram.com/trescorsoftware/">
                    {" "}
                    <FaInstagram className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <a href="https://www.facebook.com/profile.php?id=61576887840484">
                    {" "}
                    <FaFacebook className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>

                <div className="flex justify-center items-center">
                  <a href="https://www.threads.com/@trescorsoftware">
                    {" "}
                    <FaThreads className="w-6 h-6 text-[#0a3161] duration-1000 hover:text-mainColor ease-in-out" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2 "
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full md:text-sm lg:text-base px-3 py-1.5 transition-colors  ${
        isScrolled ? "text-[#0A3161]" : "text-[#0A3161]"
      }  ${selected === tab ? "text-[#0A3161]" : "text-[#0A3161]"}`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-1/2 top-[calc(100%+1px)] w-350 max-w-[90vw] -translate-x-1/2 bg-white rounded-lg shadow overflow-hidden"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden " key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => <div className="absolute -top-6 left-0 right-0 h-6" />;

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-white"
    />
  );
};

const Homebar = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-75">
      {/* LEFT SECTION – 30% (AS REQUESTED) */}
      <div className="w-full md:w-[30%] relative p-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex items-center bg-[#0A3161] overflow-hidden">
        {/* Brand accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand rounded-full opacity-30 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand" />

        <div className="relative text-white">
          <h3 className="text-2xl font-bold mb-2">Our Services</h3>
          <p className="text-white/90 text-sm md:text-lg">
            End-to-end support for your study abroad journey
          </p>
        </div>
      </div>

      {/* RIGHT SECTION – 70% */}
      <div className="w-full md:w-[70%] bg-white p-6 rounded-b-lg md:rounded-r-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {[
            "Counselling",
            "Test Preparation",
            "Country & University Selection",
            "Applications & Admission",
            "Scholarships",
            "Internship",
            "Education Loan",
            "Visa Processing",
            "Allied Services",
          ].map((service) => (
            <a
              key={service}
              href="/services"
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition group"
            >
              {/* Text only – no icons */}
              <span className="font-semibold text-[#0A3161] group-hover:text-brand">
                {service}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const SupportBar = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-75">
      {/* LEFT SECTION – 30% (UNCHANGED) */}
      <div className="w-full md:w-[30%] relative p-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex items-center bg-[#0A3161] overflow-hidden">
        {/* Brand accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand rounded-full opacity-30 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand" />

        <div className="relative text-white">
          <h3 className="text-2xl font-bold mb-2">Need Support</h3>
          <p className="text-white/90 text-sm md:text-lg">
            Get help and assistance from our team
          </p>
        </div>
      </div>

      {/* RIGHT SECTION – 70% */}
      <div className="w-full md:w-[70%] bg-white p-6 rounded-b-lg md:rounded-r-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {[
            { label: "Support", link: "/support" },
            { label: "Contact Us", link: "/contact" },
            { label: "Upcoming Events", link: "/events" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition group"
            >
              <span className="font-semibold text-[#0A3161] group-hover:text-brand">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutBar = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-75">
      {/* LEFT SECTION – 30% */}
      <div className="w-full md:w-[30%] relative p-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex items-center bg-[#0A3161] overflow-hidden">
        {/* Brand accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand rounded-full opacity-30 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand" />

        <div className="relative text-white">
          <h3 className="text-2xl font-bold mb-2">About Alcheminds</h3>
          <p className="text-white/90 text-sm md:text-lg">
            Learn more about who we are and what we stand for
          </p>
        </div>
      </div>

      {/* RIGHT SECTION – 70% */}
      <div className="w-full md:w-[70%] bg-white p-6 rounded-b-lg md:rounded-r-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {[
            { label: "About Alcheminds", link: "/about" },
            { label: "Careers", link: "/careers" },
            { label: "News & Press", link: "/news-press" },
            { label: "Blogs", link: "/blogs" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition group"
            >
              <span className="font-semibold text-[#0A3161] group-hover:text-brand">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const StudyDestinationsBar = () => {
  const destinations = [
    { name: "United States", img: usaFlag, link: "/study-in-usa" },
    { name: "Canada", img: canadaFlag, link: "/study-in-canada" },
    { name: "United Kingdom", img: ukFlag, link: "/study-in-uk" },
    { name: "Australia", img: australiaFlag, link: "/study-in-australia" },
    { name: "Ireland", img: irelandFlag, link: "/study-in-ireland" },
    { name: "Japan", img: japanFlag, link: "/study-in-new-zealand" },
    { name: "Germany", img: germanyFlag, link: "/study-in-europe" },
    { name: "Asia", img: indiaFlag, link: "/study-in-asia" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-75">
      {/* LEFT (30%) */}
      <div className="w-full md:w-[30%] relative p-6 rounded-t-lg md:rounded-l-lg md:rounded-tr-none flex items-center bg-[#0A3161] overflow-hidden">
        {/* Brand accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand rounded-full opacity-30 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand" />

        <div className="relative text-white">
          <h3 className="text-2xl font-bold mb-2">Study Destinations</h3>
          <p className="text-white/90 text-sm md:text-lg">
            Explore top global education destinations
          </p>
        </div>
      </div>

      {/* RIGHT (70%) */}
      <div className="w-full md:w-[70%] bg-white p-6 rounded-b-lg md:rounded-r-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {destinations.map((d) => (
            <a
              key={d.name}
              href={d.link}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition group"
            >
              <img
                src={d.img}
                alt={d.name}
                className="w-10 h-10 object-contain"
              />

              <span className="font-semibold text-[#0A3161] group-hover:text-brand">
                {d.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Study Destinations",
    Component: StudyDestinationsBar,
  },

  { title: "Our Services", Component: Homebar },

  {
    title: "About Us",
    Component: AboutBar,
  },
  {
    title: "Upcoming Events",
    Component: SupportBar,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
