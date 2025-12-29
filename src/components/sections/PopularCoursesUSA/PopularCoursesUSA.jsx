import PopularCoursesSection from "@/components/sections/PopularCoursesSection";

const PopularCoursesUSA = () => {
  const coursesUSA = [
    "Applied Sciences",
    "Business & Management",
    "Computer Science & Information Technology",
    "Engineering & Technology",
    "Public Health & Healthcare Administration",
    "Architecture & Construction Management",
  ];

  return (
    <PopularCoursesSection
      title="Popular Courses in USA"
      courses={coursesUSA}
      image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
    />
  );
};

export default PopularCoursesUSA;
