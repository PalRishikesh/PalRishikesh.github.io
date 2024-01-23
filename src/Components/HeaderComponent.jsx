import profileImage from "./../assets/profile.jpg";

import Resume from "./../../public/Rishikesh_Pal.pdf"
const HeaderComponent = () => {
  const fileName = "Rishikesh_Pal";
  return (
    <div className="two-column-outer-box header-content">
      <div className="two-column-inner-box one">
        <div className="intro-box">
          <p className="subtitle">HELLO</p>
          <h1 className="title">
            I'm{" "}
            <span>
              Rishikesh Pal
              <br />a
            </span>{" "}
            Web Developer
          </h1>
          <p className="description">
            Welcome to my web developer portfolio! I'm Rishikesh Pal, a skilled
            and creative web developer with a passion for creating beautiful,
            responsive, and user-friendly websites. I've worked on a variety of
            web projects, ranging from personal blogs to e-commerce platforms.
          </p>

          <div className="action__btns">
           <a href={Resume}
           download={fileName}
           >
            <button className="custom-button">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="two-column-inner-box profile-outer-box two">
        <div className="custom-card">
          <img className="profile-image" src={profileImage} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
