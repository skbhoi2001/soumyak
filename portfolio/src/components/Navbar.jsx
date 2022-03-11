import React from 'react'

const Navbar = () => {

  const hadnleScrolling = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop
    console.log(target, location)

    window.scrollTo({
      left: 0,
      top: location - 50
    })
  }
  return (
    <nav style={{position:"fixed",width:"100%"}} className="navbar navbar-expand-lg navbar-light bg-dark navbar-fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#header">Soumyak</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i style={{ color: '#fff' }} class="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" onClick={hadnleScrolling} href="#home">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={hadnleScrolling} href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={hadnleScrolling} href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={hadnleScrolling} href="#contact">contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link resume" href="https://drive.google.com/file/d/1Me0ppnBHdL1_awIlEwKoDD6NGMSu8xEx/view?usp=sharing" target="_blank" rel="noreferrer">resume <span className="donld-icon"><i class="fas fa-download"></i></span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
