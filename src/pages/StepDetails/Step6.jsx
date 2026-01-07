import React from "react";
import StepDetails from "../StepDetails/StepDetails";

const Step6 = () => {
  const stepData = {
    id: 6,
    title: "Prepare To Fly",
    description: "Complete pre-departure preparations and travel arrangements",
    details: {
      overview: "Final preparations ensure a smooth transition to your new country and academic environment.",
      keyActivities: [
        "Book flights and arrange airport pickup or transportation",
        "Secure accommodation (on-campus housing or private rental)",
        "Purchase health insurance and understand healthcare system",
        "Pack appropriately for climate and cultural considerations",
        "Arrange international banking and currency exchange",
        "Attend pre-departure orientations and connect with other students"
      ],
      tips: [
        "Pack important documents in carry-on baggage",
        "Research cultural norms and basic language phrases",
        "Join university social media groups to connect with fellow students",
        "Plan for initial weeks - have some local currency and essentials ready"
      ],
      timeline: "Begin final preparations 6-8 weeks before departure. Complete all arrangements 2 weeks before travel."
    }
  };

  return <StepDetails stepData={stepData} />;
};

export default Step6;