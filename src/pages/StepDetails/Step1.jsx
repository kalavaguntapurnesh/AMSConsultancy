import React from "react";
import StepDetails from "../StepDetails/StepDetails";

const Step1 = () => {
  const stepData = {
    id: 1,
    title: "Exploration",
    description: "Research courses, colleges, funding and more to make informed decisions",
    details: {
      overview: "The exploration phase is your foundation for studying abroad. This is where you discover what's possible and what aligns with your goals.",
      keyActivities: [
        "Research universities and their ranking in your field of interest",
        "Compare course curricula and specializations offered",
        "Understand admission requirements and deadlines",
        "Explore scholarship opportunities and funding options",
        "Learn about living costs and lifestyle in different countries",
        "Connect with current students or alumni for insights"
      ],
      tips: [
        "Start early - give yourself at least 12-18 months before intended start date",
        "Create a comparison spreadsheet of universities and programs",
        "Attend education fairs and university webinars",
        "Use university ranking websites like QS World Rankings, Times Higher Education"
      ],
      timeline: "Plan to spend 2-3 months on thorough exploration, starting 12-18 months before your intended start date."
    }
  };

  return <StepDetails stepData={stepData} />;
};

export default Step1;