import React from "react";
import "./Jsprojects.css";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Projects</h2>
            <br />
            <h2>Tempo Research</h2>
            <p className="font-16 mb-0">
              Django, HTML5/CSS3, Javascript ES6, Jquery, Bootstrap, Google Map
              API, MapBox, JsPDF, S3, AWS Athena, Mysql, GMO Payment
            </p>
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://temporesearch.jp/" target="_blank">
                    https://temporesearch.jp/
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <h2>Joilmills</h2>
            <p className="font-16 mb-0">Nuxtjs, FastAPI, Vuetify, Mysql, AWS</p>
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://cam.fryeco.j-oil.com/" target="_blank">
                    https://cam.fryeco.j-oil.com/
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <h2>Admin beesky</h2>
            <p className="font-16 mb-0">Reactjs, Redux, Nextjs, Mongodb</p>
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://beesky-admin.web.app/" target="_blank">
                    https://beesky-admin.web.app/
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <h2>Management Drugstore</h2>
            <p className="font-16 mb-0">
              Reactjs, Redux, Express, Mongodb, Docker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
