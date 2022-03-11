import React from 'react'
import "../styles/contact.css"
import ScrollToTop from './ScrollToTop'
const Contact = () => {
    return (
        <div>
            <div className="conatct-section">
                <i class="fa fa-paper-plane fa-3x" aria-hidden="true" style={{ color: '#03203c' }}></i>
                <h1 className="contact_head">GET IN TOUCH!</h1>
                <div class="container marketing conatct-div">
                    <div style={{textDecoration:"none"}} class="row">
                        <div class="col-lg-3 contact-info">
                            <a target="_blanks" href="mailto:soumyak.bhoi.2001@gmail.com"><i  class="fas fa-envelope-open-text fa-3x rounded-circle"></i></a>
                            <h2 className="contact_h2_headings">Mail Me</h2>
                            <a target="_blanks" style={{textDecoration:"none",color:"black"}} href="mailto:soumyak.bhoi.2001@gmail.com" className="contact_h3_headings">soumyak.bhoi.2001@gmail.com</a>
                        </div>
                        <div class="col-lg-3 contact-info">
                            <a target="_blanks" href="tel:+91 9937062128"><i class="fas fa-phone-volume fa-3x rounded-circle"></i></a>
                            <h2 className="contact_h2_headings">Mobile</h2>
                            <a target="_blanks" style={{textDecoration:"none",color:"black"}} href="tel:+91 9937062128" className="contact_h3_headings">9937062128</a>
                        </div>
                        <div class="col-lg-3 contact-info">
                            <a target="_blanks" href="https://www.linkedin.com/in/soumyak-kumar-bhoi-3b73a4184/"><i class="fab fa-linkedin-in fa-3x rounded-circle"></i></a>
                            <h2 className="contact_h2_headings">Linkedin</h2>
                            <a target="_blanks" style={{textDecoration:"none",color:"black"}} href="https://www.linkedin.com/in/soumyak-kumar-bhoi-3b73a4184/" rel="noreferrer"  >Connect Me</a>
                        </div>
                        <div class="col-lg-3 contact-info">
                            <a target="_blanks" href="https://github.com/skbhoi2001"><i class="fab fa-github fa-3x rounded-circle"></i></a>
                            <h2 className="contact_h2_headings">GitHub</h2>
                            <a target="_blanks" style={{textDecoration:"none",color:"black"}} href="https://github.com/skbhoi2001" rel="noreferrer">Review Me</a>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Contact
