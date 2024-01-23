import React, { useState } from "react";
import ExperienceData from "./../assets/experienceData.json";

const ExperienceComponent = () => {
  const [experiences, setExperiences] = useState(ExperienceData.experiences);
  console.log("experiences: ", experiences);
  return (
    <>
      <div className="title-content">Work Experience</div>
      <div className="work-experience extra-padding">
        {experiences.map((experience, index) => {
          return (
            <>
              <div key={index} className="extra-padding-bottom">
                <div className="bold-title">{experience.job_profile}</div>
                <div className="education-sub-title">{experience.company_name}</div>
                <div className="text-color">{experience.duration}</div>
                <div className="text-color">{experience.location}</div>
              </div>
            </>
          );
        })}
      </div>
      <div className="title-content">Projects</div>
    </>
  );
};

export default ExperienceComponent;
