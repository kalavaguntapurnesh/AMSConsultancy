import React from "react";
import StepDetails from "../StepDetails/StepDetails";

const Step3 = () => {
  const stepData = {
    id: 3,
    title: "Admission", 
    description: "Receive admission offers and choose your preferred university",
    details: {
      overview: "Once applications are submitted, you'll wait for admission decisions and then make the important choice of which offer to accept.",
      keyActivities: [
        "Wait for admission decisions (typically 2-4 months)",
        "Review admission offers and scholarship details",
        "Compare financial aid packages from different universities",
        "Attend admitted student days or virtual information sessions",
        "Make your final decision and accept an offer",
        "Decline other offers politely and promptly"
      ],
      tips: [
        "Don't just choose based on university ranking - consider fit, location, and opportunities",
        "Calculate total cost of attendance including living expenses",
        "Ask current students about their experience at the university",
        "Consider long-term career prospects and alumni networks"
      ],
      timeline: "Admission decisions typically arrive 2-4 months after application submission. Plan 2-3 weeks to make your final decision."
    }
  };

  return <StepDetails stepData={stepData} />;
};

export default Step3;