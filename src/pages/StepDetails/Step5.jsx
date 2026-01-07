import React from "react";
import StepDetails from "../StepDetails/StepDetails";

const Step5 = () => {
  const stepData = {
    id: 5,
    title: "VISA",
    description: "Apply for student visa and complete immigration requirements",
    details: {
      overview: "The visa application process is crucial and requires careful attention to detail, proper documentation, and timing.",
      keyActivities: [
        "Understand visa requirements for your destination country",
        "Gather required documents (I-20/CAS, financial proof, passport, etc.)",
        "Pay visa application fees and schedule appointments",
        "Attend visa interview at embassy/consulate if required",
        "Provide biometric data and complete background checks",
        "Receive visa approval and understand entry conditions"
      ],
      tips: [
        "Start visa process immediately after accepting admission offer",
        "Be honest and consistent in all visa documentation and interviews",
        "Demonstrate strong ties to home country and clear study intentions",
        "Have backup plans in case of visa delays or complications"
      ],
      timeline: "Begin visa application immediately after admission acceptance. Allow 4-8 weeks for processing, depending on the country."
    }
  };

  return <StepDetails stepData={stepData} />;
};

export default Step5;