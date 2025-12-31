import PopularCoursesSection from "@/components/sections/PopularCoursesSection";

const PopularCoursesCanada = () => {
  const coursesCanada = [
    "Business & Management",
    "Engineering",
    "Data Science & AI",
    "Finance & Accounting",
    "Healthcare Management",
    "Architecture & Design",
  ];

  return (
    <PopularCoursesSection
      title="Popular Courses in Canada"
      courses={coursesCanada}
      image="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    />
  );
};

export default PopularCoursesCanada;
