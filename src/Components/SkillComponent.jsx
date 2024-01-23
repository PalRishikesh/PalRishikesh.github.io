import { useState } from "react";
import skillData from "./../assets/skillData.json";

const SkillComponent = () => {
  console.log("skillData: ", skillData.working_skill);
  const [workingSkill] = useState(skillData.working_skill);
  const [knowledgeSkill] = useState(
    skillData.knowledge_skill
  );
  return (
    <>
      <div className="title-content">Skill</div>
      <div className="two-column-outer-box extra-padding-bottom ">
        <div className="two-column-inner-box">
          <div className="bold-title profile-outer-box">Working Skill</div>
          {workingSkill.map(( skill, index) => {
            return (
              <div key={index} className="skill-section">
                <div className="skill-name">
                  <p className="text-color">{skill.name}</p>
                  <p className="text-color">{skill.level}%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow= {skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skill.level+"%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="two-column-inner-box">
          <div className="bold-title profile-outer-box">Knowledge Skill</div>
          {knowledgeSkill.map(( skill) => {
            return (
              <div key={skill} className="skill-section">
                <div className="skill-name">
                  <p className="text-color">{skill.name}</p>
                  <p className="text-color">{skill.level}%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow= {skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: skill.level+"%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillComponent;
