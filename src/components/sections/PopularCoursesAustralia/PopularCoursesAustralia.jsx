import PopularCoursesSection from "@/components/sections/PopularCoursesSection";

const PopularCoursesAustralia = () => {
  const coursesAustralia = [
    "Engineering & Technology",
    "Business & Management", 
    "Information Technology",
    "Health & Medical Sciences",
    "Environmental Science",
    "Mining & Resources",
  ];

  return (
    <PopularCoursesSection
      title="Popular Courses in Australia"
      courses={coursesAustralia}
      image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
    />
  );
};

export default PopularCoursesAustralia;