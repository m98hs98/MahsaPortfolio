import React from "react";
import "./Resume.css";


const Resume = () => {
  
  const resumeLink = "";

  const handleShowResume = () => {
    window.open(resumeLink, "_blank");
  };

  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>WORK EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>
        </div>
      </section>
      <div className="resume-button">
        <button className="btn_shadow" onClick={handleShowResume}>
          View Resume (PDF)
        </button>
      </div>
    </>
  );
};

export default Resume;
