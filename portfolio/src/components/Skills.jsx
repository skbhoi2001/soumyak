import React from 'react'
import "../styles/skills.css"

const Skills = () => {
    return (
        <div className="skill-section">
            <h1 className='skill-head' >MY PROFICIENCY</h1>
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="skills-logo">
                                    <img className="skills-image" src="https://img.icons8.com/ios/2x/react-native.png" alt="" />
                                </div>
                                <div className="card-body">
                                    <h1 className="skills-headings">FRONT END</h1>

                                    <h3 className="skill-topics">HTML, CSS, Javascript, React, Redux, Material UI.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="skills-logo">
                                    <img className="skills-image" src="https://cdn1.iconfinder.com/data/icons/web-mobile-development-1/100/Server_side-512.png" alt="" />
                                </div>
                                <div className="card-body">
                                    <h1 className="skills-headings">BACK END</h1>
                                    <h3 className="skill-topics">Node, Express, MongoDB.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="skills-logo">
                                    <img className="skills-image" src="https://static.thenounproject.com/png/1871524-200.png" alt="" />
                                </div>
                                <div className="card-body">
                                    <h1 className="skills-headings">DATA STRUCTURES & ALGORITHMS</h1>
                                    <h3 className="skill-topics">Arrays,Stacks and Queues,Sorting Algorithms.</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="tech_stack_div">
                <h2 className="t-s-heading">TECH STACK</h2>
                <div class="container marketing conatct-div">
                    <div class="row">
                        <div class="col-lg-4 contact-info">
                            <img class="tech_image" src="https://cdn.worldvectorlogo.com/logos/html5.svg" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img class="tech_image" src="https://cdn.worldvectorlogo.com/logos/css3-1.svg" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img class="tech_image" src="https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img class="tech_image" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img class="tech_image" src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img class="tech_image" src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img class="tech_image" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img class="tech_image" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png" alt="" width="100" height="100" />
                        </div>
                        <div class="col-lg-4 contact-info">
                            <img class="tech_image_last" src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="" width="100" height="40" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Skills
