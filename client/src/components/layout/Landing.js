// start with rcc then tab
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { TimelineMax, Power2, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all"; 

import landingVid from "./landingImgAndVid/meetingVideo.mp4";
import logo from "./landingImgAndVid/whiteLogo.png";


import "./landing.css";


class Landing extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.animate = null;
    // reference to the animation
    this.myTween = new TimelineMax({paused: true});
  }


  componentDidMount() {
    this.myTween.from(".animate", 5, { backgroundColor: "#fff", width: "0%", top: "600px", ease: Power2.easeInOut }).play();

    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="full-screen-video-container">
          <video autoPlay loop muted>
            <source className="landingVid" src={landingVid} type="video/mp4" />
          </video>
          <div className="animate" ref={div => this.animate = div}/>
          <div className="header-overlay">
            <div className="header-content p-4">
              <div className="position-relative col-lg-6 col-sm-12">
                <br />
                <br />
                <img
                  className="logo"
                  src={logo}
                  width="350"
                  alt="logo"
                />
                <hr />
                <p className="text-justify text-light">
                Quicks is a business-oriented web-service that allows job-seekers to add an interactive work portfolio section to thier profile. It is mainly used for professionals who require to exhibit their work portfolio along with their CV for quicker networking and job application.
                </p>
                <br />

                <div className="d-flex justify-content-between">
                  <Link
                    to="/register"
                    className="btn btn-outline-light p-2 border-0 shadow w-50 mr-2 mb-5 my-btn"
                  >
                    <h3>Sign-Up</h3>
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-outline-light border-0 shadow p-2 w-50 mb-5 my-btn "
                  >
                    <h3>Log-In</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">PROHUB</h1>
                <p className="lead">
                  {" "}
                  Create professional profile, portfolio, CV and Business Card,
                  in one click and share posts and get help from other users
                </p>
                <hr />
                <Link className="btn btn-lg btn-info mr-2" to="/register">
                  Sign Up
                </Link>
                <Link className="btn btn-lg btn-light" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
