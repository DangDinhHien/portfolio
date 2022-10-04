import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import FacebookIcon from "../assets/img/socialicons/facebook.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="imgsec"></div>
          </div>
          <div className="col-sm-9">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Dang Dinh Hien</h1>
              <h2>Web Developer</h2>
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/hi%E1%BB%83n-%C4%91%E1%BA%B7ng-%C4%91inh-b64abb243/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://github.com/DangDinhHien"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://www.facebook.com/ddhienpy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={FacebookIcon}
                    alt="instagram"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="mailto:ddhien98@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
              </div>

              <br />
              <div className="row">
                <div className="col-sm-12 col-12">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
