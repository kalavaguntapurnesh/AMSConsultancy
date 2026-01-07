import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdmissionGuide.css";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionText from "@/components/ui/SectionText";

const AdmissionGuide = () => {
  const navigate = useNavigate();

  const handleStepClick = (stepId) => {
    navigate(`/admission-guide/step-${stepId}`);
  };

  const studySteps = [
    {
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
        ]
      }
    },
    {
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
        ]
      }
    },
    {
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
        ]
      }
    },
    {
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
        ]
      }
    },
    {
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
        ]
      }
    },
    {
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
        ]
      }
    }
  ];

  const countryData = [
    {
      country: "USA",
      universities: "MIT, Stanford, Harvard",
      courses: "Business, Technology, Engineering"
    },
    {
      country: "UK", 
      universities: "Oxford, Cambridge, Imperial College London",
      courses: "Humanities, Law, Business"
    },
    {
      country: "Canada",
      universities: "University of Toronto, McGill University", 
      courses: "Environmental Science, Engineering"
    },
    {
      country: "Australia",
      universities: "University of Melbourne, Australian National University",
      courses: "Medicine, Environmental Sciences"
    },
    {
      country: "Germany",
      universities: "Technical University of Munich, University of Heidelberg",
      courses: "Engineering, Physics, Informatics"
    },
    {
      country: "Ireland",
      universities: "Trinity College Dublin, University College Dublin",
      courses: "Literature, Technology, Medicine"
    }
  ];

  const applicationRequirements = [
    {
      title: "Statement of Purpose (SOP)",
      description: "A personal essay sharing your dreams, goals, and reasons for choosing a program"
    },
    {
      title: "Letters of Recommendation (LOR)", 
      description: "Endorsements from teachers or employers highlighting your skills and character"
    },
    {
      title: "Academic Transcripts",
      description: "Your academic grades showing your educational performance"
    },
    {
      title: "Standardized Tests",
      description: "TOEFL, IELTS, GRE, GMAT or other required examinations"
    },
    {
      title: "Work Experience",
      description: "Professional background especially important for graduate programs"
    },
    {
      title: "Resume/CV",
      description: "Document highlighting your educational and professional journey"
    }
  ];

  const fundingOptions = [
    {
      title: "Scholarships & Grants",
      description: "Merit-based financial aid that doesn't need to be repaid"
    },
    {
      title: "Student Loans", 
      description: "Financial assistance that needs to be repaid with interest"
    },
    {
      title: "Self-Funding",
      description: "Using personal or family savings to cover education expenses"
    }
  ];

  return (
    <div className="admission-guide">
      {/* Hero Section */}
      <section className="admission-hero">
        <div className="container">
          <SectionHeading>Study Abroad Admission Guide</SectionHeading>
          <SectionText>A Complete Guide on How to Study Abroad</SectionText>
        </div>
      </section>

      {/* 6 Simple Steps */}
      <section className="study-steps">
        <div className="container">
          <h2>6 Simple Steps</h2>
          <div className="steps-grid">
            {studySteps.map((step) => (
              <div 
                key={step.id} 
                className="step-card"
                onClick={() => handleStepClick(step.id)}
              >
                <div className="step-number">{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-learn-more">Learn More →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things to Know */}
      <section className="things-to-know">
        <div className="container">
          <h2>Things To Know Before You Embark!</h2>
          <div className="content-grid">
            <div className="content-section">
              <h3>Why Study Abroad?</h3>
              <p>Studying abroad offers personal and professional growth opportunities, exposing you to new cultures and global perspectives. It enhances career opportunities and provides access to world-class education.</p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <h4>Academic Excellence</h4>
                  <p>Access to top-tier faculties and innovative research opportunities</p>
                </div>
                <div className="benefit-item">
                  <h4>Global Network</h4>
                  <p>Connect with peers and professionals worldwide</p>
                </div>
                <div className="benefit-item">
                  <h4>Cultural Immersion</h4>
                  <p>Experience diverse cultures and improve language skills</p>
                </div>
                <div className="benefit-item">
                  <h4>Career Advancement</h4>
                  <p>Boost employability with international experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Countries */}
      <section className="top-countries">
        <div className="container">
          <h2>Top Countries to Study Abroad</h2>
          <p>Choosing your study destination is crucial. Here are popular destinations with world-class universities:</p>
          
          <div className="countries-table">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Renowned Universities</th>
                  <th>Popular Courses</th>
                </tr>
              </thead>
              <tbody>
                {countryData.map((country, index) => (
                  <tr key={index}>
                    <td className="country-name">{country.country}</td>
                    <td>{country.universities}</td>
                    <td>{country.courses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="application-requirements">
        <div className="container">
          <h2>Things You Will Need for Your Application!</h2>
          <p>Prepare these essential documents and requirements for your study abroad application:</p>
          
          <div className="requirements-grid">
            {applicationRequirements.map((req, index) => (
              <div key={index} className="requirement-card">
                <h3>{req.title}</h3>
                <p>{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="funding-section">
        <div className="container">
          <h2>Ways to Fund Your Study Abroad Journey!</h2>
          <p>Finding the right financial support is crucial. Here are common funding options:</p>
          
          <div className="funding-options">
            {fundingOptions.map((option, index) => (
              <div key={index} className="funding-card">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="admission-cta">
        <div className="container">
          <h2>Need Expert Help with Your Admission?</h2>
          <p>Get personalized guidance from our experienced consultants</p>
          <button className="cta-button">Find a Consultant</button>
        </div>
      </section>
    </div>
  );
};

export default AdmissionGuide;