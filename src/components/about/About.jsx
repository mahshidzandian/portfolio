import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/Testimonial";
import Services from "../service/Service";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about" />
                  </div>
                  <Social />
                </div>
                {/* <div className="info">
                  <p>Software Developer</p>
                  <h3>Mahshid Zandian</h3>
                </div> */}
              </div>
            </div>

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I am a Frontend Software Engineer building scalable, performant, and user-focused web applications with JavaScript, TypeScript, React, and Redux. I prioritize clean, maintainable, and well-tested code while delivering dynamic product features.
                    I work on enterprise-scale applications, collaborating closely with product and design teams to create intuitive, accessible, and high-performing user experiences. I also lead and mentor engineers, helping build strong engineering practices and a collaborative team culture.</p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Mahshid Zandian</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>New York</span>
                        </li>
                        <li>
                          <label>Open to Full-Time Roles</label>
                          {/* <span>Available</span> */}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Title: </label>
                          <span>Software Engineer</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>zandian.mahshid@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="separated"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "img/border-dark.png"
                })`,
            }}
          ></div>

          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services />
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "img/border-dark.png"
                })`,
            }}
          ></div>

          <div className="title">
            <h3>Testimonials.</h3>
          </div> */}
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default About;
