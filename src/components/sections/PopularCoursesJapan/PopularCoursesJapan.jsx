import PopularCoursesSection from "@/components/sections/PopularCoursesSection";

const PopularCoursesJapan = () => {
  const coursesJapan = [
    "Engineering & Technology",
    "Computer Science & AI",
    "Robotics & Automation", 
    "Business & Management",
    "Japanese Language & Culture",
    "Automotive Engineering",
  ];

  return (
    <PopularCoursesSection
      title="Popular Courses in Japan"
      courses={coursesJapan}
      image="https://images.unsplash.com/photo-1532236204992-f5e85c024202?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
};

export default PopularCoursesJapan;