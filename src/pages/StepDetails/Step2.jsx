import React from "react";
import StepDetails from "../StepDetails/StepDetails";

const Step2 = () => {
  const stepData = {
    id: 2,
    title: "Application",
    description: "Prepare and submit applications with required documents",
    details: {
      overview: "The application phase requires careful preparation of documents and meeting strict deadlines for your chosen universities.",
      keyActivities: [
        "Complete online application forms for each university",
        "Write compelling Statement of Purpose (SOP) essays",
        "Secure strong Letters of Recommendation from professors/employers",
        "Prepare academic transcripts and certificates",
        "Take required standardized tests (TOEFL/IELTS, GRE/GMAT)",
        "Pay application fees and submit before deadlines"
      ],
      tips: [
        "Apply to 6-8 universities with a mix of reach, target, and safety schools",
        "Tailor each SOP to the specific program and university",
        "Give recommenders at least 6-8 weeks notice",
        "Keep track of deadlines with a calendar or spreadsheet"
      ],
      timeline: "Allow 3-4 months for application preparation and submission, starting 8-12 months before your intended start date."
    }
  };

  return <StepDetails stepData={stepData} />;
};

export default Step2;