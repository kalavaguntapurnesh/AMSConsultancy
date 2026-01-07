import React from "react";
import StepDetails from "../StepDetails/StepDetails";

const Step4 = () => {
  const stepData = {
    id: 4,
    title: "Finance",
    description: "Secure funding through scholarships, loans or personal funds",
    details: {
      overview: "Financing your education abroad requires careful planning and exploring multiple funding sources to cover tuition and living expenses.",
      keyActivities: [
        "Apply for scholarships and grants from universities and external organizations",
        "Research and apply for education loans with favorable terms",
        "Explore work-study opportunities and graduate assistantships",
        "Plan for living expenses, travel, and emergency funds",
        "Understand currency exchange rates and international banking",
        "Prepare financial documentation for visa applications"
      ],
      tips: [
        "Apply for scholarships early - many have deadlines before admission deadlines",
        "Consider partial funding combinations rather than seeking full funding from one source",
        "Look into country-specific scholarships (Fulbright, Chevening, DAAD, etc.)",
        "Budget for unexpected expenses - aim for 10-20% buffer in your financial plan"
      ],
      timeline: "Start financial planning immediately after admission acceptance. Allow 2-3 months for loan processing and scholarship applications."
    }
  };

  return <StepDetails stepData={stepData} />;
};

export default Step4;