import PopularCoursesSection from "@/components/sections/PopularCoursesSection";

const PopularCoursesGermany = () => {
  const coursesGermany = [
    "Engineering & Technology",
    "Computer Science & IT",
    "Automotive Engineering",
    "Business & Economics",
    "Medicine & Life Sciences",
    "Renewable Energy & Sustainability",
  ];

  return (
    <PopularCoursesSection
      title="Popular Courses in Germany"
      courses={coursesGermany}
      image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
};

export default PopularCoursesGermany;