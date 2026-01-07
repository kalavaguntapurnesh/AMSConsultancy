import React from "react";
import { Link } from "react-router-dom";
import "./StepDetails.css";

const StepDetails = ({ stepData }) => {
  if (!stepData) return <div>Step not found</div>;

  return (
    <div className="step-details-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/admission-guide">← Back to Admission Guide</Link>
        </div>
        
        <div className="step-hero">
          <div className="step-number-large">{stepData.id}</div>
          <h1>{stepData.title}</h1>
          <p className="step-description">{stepData.description}</p>
        </div>

        <div className="step-content">
          <section className="overview-section">
            <h2>Overview</h2>
            <p>{stepData.details.overview}</p>
          </section>

          <section className="activities-section">
            <h2>Key Activities</h2>
            <div className="activities-grid">
              {stepData.details.keyActivities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-number">{index + 1}</div>
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="tips-section">
            <h2>Tips & Best Practices</h2>
            <div className="tips-grid">
              {stepData.details.tips.map((tip, index) => (
                <div key={index} className="tip-card">
                  <div className="tip-icon">💡</div>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="timeline-section">
            <h2>Recommended Timeline</h2>
            <div className="timeline-info">
              <p>{stepData.details.timeline || "Plan to spend 2-4 weeks on this step, depending on your preparation level and the complexity of your chosen programs."}</p>
            </div>
          </section>
        </div>

        <div className="navigation-section">
          <div className="nav-buttons">
            {stepData.id > 1 && (
              <Link to={`/admission-guide/step-${stepData.id - 1}`} className="nav-button prev">
                ← Previous Step
              </Link>
            )}
            {stepData.id < 6 && (
              <Link to={`/admission-guide/step-${stepData.id + 1}`} className="nav-button next">
                Next Step →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepDetails;