import React from "react";
import "./Work.css";
import work from "../Data/Work.json";

const Work = () => {
  return (
    <div id="work">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2 data-aos="fade-down">Work</h2>
            <br />
            {work.map((item, i) => (
              <div className="workblock" key={i}>
                <div className="row">
                  <div className="col-sm-5">
                    <h5 data-aos="fade-right">{item.year}</h5>
                  </div>
                  <div className="col-sm-7">
                    <div className="educationright" data-aos="fade-left">
                      <h5>{item.companyname}</h5>
                      <h6 className="position">
                        <i>{item.position}</i>
                      </h6>
                      <p className="font-16">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
