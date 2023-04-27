import React from "react";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import About from "../components/about/About";
import Resume from "../components/resume/Resume";
import Portfolio from "../components/portfolio/Portfolio"
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import ContactInfo from "../components/contact/ContactInfo";
import Map from "../components/contact/Map";
import Footer from "../components/footer/Footer";
import useDocumentTitle from "../components/useDocumentTitle";

const Home = () => {
  useDocumentTitle(
    "Mahshid Zandian"
  );
  document.body.classList.add("theme-light");
  return (
    <div className="main-left">
      <Header />
      <Slider />
      <About />
      <Resume />
      <Portfolio />

      <section id="blog" className="section">
        <div className="container">
          <div className="title">
            <h3>Latest Blog.</h3>
          </div>
          <Blog />
        </div>
      </section>

      <section id="contactus" className="section theme-light dark-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-xl-4 m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form">
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>

            <div
              className="col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <Map />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Home;
