import PopularCoursesSection from "@/components/sections/PopularCoursesSection";

const PopularCoursesUK = () => {
  const coursesUK = [
    "Business & Management",
    "Engineering",
    "Data Science & AI",
    "Finance & Accounting",
    "Healthcare Management",
    "Architecture & Design",
  ];

  return (
    <PopularCoursesSection
      title="Popular Courses in UK"
      courses={coursesUK}
      image="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    />
  );
};

export default PopularCoursesUK;
