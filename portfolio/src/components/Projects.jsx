import React from "react";
import "../styles/project.css";
const Projects = () => {
  return (
    <div className="project-section">
      <h1> PROJECTS</h1>
      <div class="album py-5">
        <div class="container">
          <div class="row proj">
            <div class="col-md-4">
              <div class=" mb-4 box-shadow">
                <img
                  className="project-image"
                  src="https://github.com/skbhoi2001/Instagram_clone/raw/main/instagram_clone/images/home.png?raw=true"
                  alt=""
                />
                <div class="card-body">
                  <h3>INSTAGRAM_CLONE</h3>
                  <p class="card-text">Instagram a social help network comprises of start to finish stream having substance like Login/Register, User Profile view and alter, password change, post images search and view users.Team Of 3.
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
                        href="https://instaclonesrc.netlify.app/"
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
              <div class=" mb-4 box-shadow">
                <img
                  className="project-image"
                  src="https://user-images.githubusercontent.com/72690740/147086166-535f3590-d10c-4a59-9feb-85f57286516c.PNG"
                  alt=""
                />
                <div class="card-body">
                  <h3>PRACTO_CLONE</h3>
                  <p class="card-text">An  E-Commerse Website Was Built With All Features, Like, Searching For The Product, Adding To Cart, Login-Sign Up , Making Purchase And Payment. Team Of 3.
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
              <div class=" mb-4 box-shadow">
                <img
                  className="project-image"
                  src="https://github.com/skbhoi2001/Amazon-clone/blob/development/images/landing.png?raw=true"
                  alt=""
                />
                <div class="card-body">
                  <h3>Amazon_Clone</h3>
                  <p class="card-text">End to end E-commerce website with having functionality like Login/Register, View Home Page, Prducts with channel, search,view,add item to truck, address page, installment page and checkout page.Team of 3.
                    <br />
                    <br />
                  </p>
                  <h5>React | Redux | Style Components | JSON</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        href="https://github.com/skbhoi2001/Amazon-clone"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source code
                      </a>{" "}
                      &nbsp;&nbsp;
                      <a
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        href="https://amazonclonerass.netlify.app/"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
