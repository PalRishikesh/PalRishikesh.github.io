import React from "react";

const PersonalComponent = () => {
  return (
    <>
      <div className="title-content">Personal Information</div>
      <div className="two-column-outer-box">
        <div className="two-column-inner-box">
          <div className="information-box">
            <div className="information-box-row">
              <div className="information-box-column-one">Name</div>
              <div className="information-box-column-two bold-title">
                Rishikesh Pal
              </div>
            </div>
            <div className="information-box-row">
              <div className="information-box-column-one">DOB</div>
              <div className="information-box-column-two bold-title">
                24/07/1994
              </div>
            </div>
            <div className="information-box-row">
              <div className="information-box-column-one">Work Exp</div>
              <div className="information-box-column-two bold-title">
                7 Years
              </div>
            </div>
            <div className="information-box-row">
              <div className="information-box-column-one">Education</div>
              <div className="information-box-column-two bold-title">
                Msc. IT
              </div>
            </div>
            <div className="information-box-row">
              <div className="information-box-column-one">Interests</div>
              <div className="information-box-column-two bold-title">
                Table Tennis
              </div>
            </div>
          </div>
        </div>
        <div className="two-column-inner-box">
          <div className="description information-description">
            <p>
              {" "}
              Hi I am Rishikesh Pal with more then 7 Years of Experience in Web
              Development.
            </p>
            <p>
              {" "}
              Curently Working as Sr. Software Enginner/Team Lead in Alpha
              Numero On AWS Serverless Architecure with Lambda Function
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalComponent;
