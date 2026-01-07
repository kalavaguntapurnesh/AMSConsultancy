import React, { useState } from "react";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Profile Evaluation",
      description: "Comprehensive assessment of your academic background, skills, and career goals to identify the best study abroad opportunities.",
      image: "https://www.whiteslips.com/images/qty-score.png",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      modalContent: {
        heading: "Comprehensive Profile Evaluation",
        details: "As a first step, we analyze your profile so that we can assist you the best. Our expert counselors evaluate your academic background, work experience, extracurricular activities, and career aspirations to create a personalized roadmap for your study abroad journey. We assess your strengths and identify areas for improvement to maximize your chances of admission to top universities worldwide."
      }
    },
    {
      id: 2,
      title: "College and Course Selection Guidance",
      description: "Expert guidance to help you choose the right universities and programs that align with your academic and career aspirations.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-K1Y1zDf-YTN2voRWPpi8ZLruQ6I889T7g&s",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      modalContent: {
        heading: "Expert College and Course Selection",
        details: "Choose the right path for your future with our comprehensive university and course selection guidance. We help you navigate through thousands of programs and institutions worldwide, considering factors like university rankings, course curriculum, faculty expertise, location preferences, and career prospects. Our database includes detailed information about admission requirements, deadlines, and scholarship opportunities."
      }
    },
    {
      id: 3,
      title: "College Application Processing",
      description: "Complete support with application forms, documentation, essays, and submission processes for your chosen universities.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9mpH2gAjzYOBM8_gmMAvkgGItogWz9B9g&s",
      gradient: "linear-gradient(135deg, #ffc020 0%, #e6ac00 100%)",
      modalContent: {
        heading: "Complete Application Processing Support",
        details: "Navigate the complex application process with confidence. Our team provides end-to-end support including application form completion, document preparation and verification, essay writing guidance, recommendation letter coordination, and timely submission to your chosen universities. We ensure your applications meet all requirements and deadlines while highlighting your unique strengths."
      }
    },
    {
      id: 4,
      title: "Visa Interview Guidance",
      description: "Comprehensive visa application support and interview preparation to ensure successful visa approval for your study destination.",
      image: "https://static.wemakescholars.com/images/blog/f1-visa-interview-tips-question-to-expect.webp",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      modalContent: {
        heading: "Comprehensive Visa Interview Guidance",
        details: "Secure your student visa with our expert guidance and preparation. We provide comprehensive support including visa application form completion, document checklist and preparation, mock interview sessions, country-specific visa requirement guidance, and tips for successful visa interviews. Our experienced team has helped thousands of students secure visas for their dream destinations."
      }
    },
    {
      id: 5,
      title: "Pre and Post Departure Guidance",
      description: "Complete support for travel arrangements, accommodation, and settling in your new country with ongoing assistance.",
      image: "https://v2doverseas.com/wp-content/uploads/2024/12/pre-departure-Guidance.jpg",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      modalContent: {
        heading: "Pre and Post Departure Support",
        details: "Smooth transition to your new academic journey with our comprehensive departure guidance. We assist with travel arrangements, accommodation booking, airport pickup coordination, orientation programs, cultural adaptation tips, and ongoing support during your initial months abroad. Our support continues beyond departure to ensure your successful settlement and academic success."
      }
    },
    {
      id: 6,
      title: "Community Connection Support",
      description: "Connect with fellow students, alumni networks, and local communities to build meaningful relationships and support systems.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      modalContent: {
        heading: "Community Connection and Network Support",
        details: "Build lasting connections and support networks for your international education journey. We connect you with fellow students, alumni networks, local communities, and cultural groups to help you integrate seamlessly into your new environment. Our community platform facilitates networking opportunities, mentorship programs, and ongoing support throughout your academic journey."
      }
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="what-we-do">
      <div className="container">
        <div className="section-header">
          <h2>What Alcheminds Do</h2>
          <p>Comprehensive study abroad services to guide you through every step of your international education journey</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card"
              onClick={() => openModal(service)}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <div className="modal-logo">
                  <div className="logo-circle">
                    <span>A</span>
                  </div>
                  <div className="logo-text">
                    <h3>ALCHEMINDS</h3>
                    <p>EDUCATION CONSULTANCY SERVICES</p>
                  </div>
                </div>
              </div>
              
              <div className="modal-body">
                <h4>{selectedService.modalContent.heading}</h4>
                <p>{selectedService.modalContent.details}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatWeDo;