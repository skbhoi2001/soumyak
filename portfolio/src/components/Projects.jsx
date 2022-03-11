import React from "react";
import "../styles/project.css";
const Projects = () => {
  return (
    <div className="project-section">
      <h1> PROJECTS</h1>
      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  className="project-image"
                  src="https://github.com/skbhoi2001/Instagram_clone/raw/main/instagram_clone/images/home.png?raw=true"
                  alt=""
                />
                <div class="card-body">
                  <h3>INSTAGRAM_CLONE</h3>
                  <p class="card-text">Instagram is an photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger.It allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging.
                  </p>
                  <h5>React | Redux | Material UI | JSON</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        href="https://github.com/skbhoi2001/Instagram_clone"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source code
                      </a>{" "}
                      &nbsp;&nbsp;
                      <a
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        href="https://happy-curran-36e035.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                      &nbsp;&nbsp;
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  className="project-image"
                  src="https://user-images.githubusercontent.com/72690740/147086166-535f3590-d10c-4a59-9feb-85f57286516c.PNG"
                  alt=""
                />
                <div class="card-body">
                  <h3>PRACTO_CLONE</h3>
                  <p class="card-text">Practo is revolutionizing healthcare by enabling consumers to find the best doctors, book instant appointments, consultations, and make better, more informed health decisions.
                    <br />
                    <br />
                  </p>
                  <h5>HTML5 | CSS3 | JavaScript | JSON</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        href="https://github.com/skbhoi2001/practo_clone"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source code
                      </a>{" "}
                      &nbsp;&nbsp;
                      <a
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        href="http://proctoclone.atwebpages.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img
                  className="project-image"
                  src="https://github.com/skbhoi2001/Instagram_clone/blob/main/instagram_clone/images/nifty.png?raw=true"
                  alt=""
                />
                <div class="card-body">
                  <h3>NIFTYPM_CLONE</h3>
                  <p class="card-text">Nifty is new-wave project management tool that reduces project development cycles and improves team productivity by combining collaboration, communication, and automation in one place.
                    <br />
                    <br />
                  </p>
                  <h5>HTML5 | CSS3</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        href="https://github.com/TusharTaral/beas_Learndigital/tree/master/final"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source code
                      </a>{" "}
                      &nbsp;&nbsp;
                      <a
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        href="https://google-digital-garage.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
