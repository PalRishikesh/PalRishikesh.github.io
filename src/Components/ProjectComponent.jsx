import { useState } from "react";
import ProjectData from "./../assets/projectData.json";

const ProjectComponent = () => {
  console.log("ProjectData: ",ProjectData);
  const [projects] = useState(ProjectData.projects);

  return (
    <>
      <div className="project extra-padding">
        {
          projects.map((project,index)=>{
              return (
                <div key={index} className="extra-padding-bottom extra-maring-bottom">
                <div className="bold-title">{project.name}</div>
                <div className="education-sub-title">{project.duration}</div>
                <div className="education-sub-title">
                  <span className="bold-sub-title">Technologies: </span> {project.technology}
                </div>
                <div>
                  <ul>
                    {
                      project.role_responsibility.map((role,index)=>{
                        return (
                          <li key={index} className="text-color">
                            {role}
                        </li>
                        )
                      })
                    }
                    
                  </ul>
                </div>
              </div>
              )
          })
        }
      
      </div>
    </>
  );
};

export default ProjectComponent;
