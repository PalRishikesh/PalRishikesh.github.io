import LinkedImg from "./../assets/linkedin.png";
import GithubImg from "./../assets/github.png";
import StackoverFlowImg from "./../assets/stackoverflow.png";
import WhatsappImg from "./../assets/whatsapp.png";
import StackoverflowData from "./../assets/stackoverflowData.json";
const FooterComponent = () => {
  const stackoverflowDetail = StackoverflowData.details;
  return (
    <>
      <div className="title-content">Contact Details</div>
      <div>
        <div className="two-column-outer-box">
          <div className="three-column-inner-box">
            <a
              href="https://www.linkedin.com/in/rishikeshpal"
              className="social-media-link"
              target="_self"
            >
              <img src={LinkedImg} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/palrishikesh"
              className="social-media-link"
              target="_self"
            >
              {" "}
              <img src={GithubImg} alt="Github" />
            </a>
            <a
              href="https://stackoverflow.com/users/7166450/rishikesh-pal"
              className="social-media-link"
              target="_self"
            >
              {" "}
              <img src={StackoverFlowImg} alt="Stackoverflow" />
            </a>
            <a
              href="https://wa.me/919702330257"
              className="social-media-link"
              target="_self"
            >
              {" "}
              <img src={WhatsappImg} alt="Whatsapp" />
            </a>
          </div>
          <div className="three-column-inner-box">
            <div className="bold-sub-title ">Stackoverflow Detail</div>
            <div>
              <span className="education-sub-title">Reputation: </span>
              <span className="text-color">
                {stackoverflowDetail.reputation}{" "}
              </span>
              <span className="text-color">|</span>
              <span className="education-sub-title">Answers: </span>
              <span className="text-color">
                {stackoverflowDetail.answer}
              </span>{" "}
              <span className="text-color">|</span>
              <span className="education-sub-title">Reached: </span>
              <span className="text-color">{stackoverflowDetail.reached}</span>
            </div>
          </div>
          <div className="three-column-inner-box">
            <div>
              <span className="education-sub-title">Mobile:</span>
              <a href="tel:+919702330257">
                <span className="text-color">(+91) 97023 30257</span>
              </a>
            </div>
            <div>
              <span className="education-sub-title">Email:</span>
              <a href="mailto:palrishikesh07@gmail.com">
                <span className="text-color"> palrishikesh07@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
