import PopularCoursesSection from "@/components/sections/PopularCoursesSection";

const PopularCoursesIreland = () => {
  const coursesIreland = [
    "Computer Science & IT",
    "Business & Management",
    "Biotechnology",
    "Finance & Banking",
    "Pharmaceutical Sciences",
    "Data Analytics",
  ];

  return (
    <PopularCoursesSection
      title="Popular Courses in Ireland"
      courses={coursesIreland}
      image="https://metro.co.uk/wp-content/uploads/2016/11/537856138.jpg?quality=80&strip=all"
    />
  );
};

export default PopularCoursesIreland;