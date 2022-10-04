import React from "react";
import "./Education.css";
import services from "../Data/Education.json";

const Education = () => {
  return (
    <div id="educationn">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <ul className="nav nav-tabs" data-aos="fade-down">
              <li className="nav-item">
                <h2 data-aos="fade-down">Education</h2>
                {/* <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#education"
                >
                  Education
                </a> */}
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="education">
                {services.map((item, i) => (
                  <div className="educationblock" key={i}>
                    <div className="row" key={i}>
                      <div className="col-sm-4">
                        <h5 data-aos="fade-right">{item.courseyear}</h5>
                      </div>
                      <div className="col-sm-8">
                        <div className="educationright">
                          <h5 data-aos="fade-left">{item.institute} </h5>
                          <h6 data-aos="fade-right">{item.coursename}</h6>
                          <h6 data-aos="fade-left"> {item.grade}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;