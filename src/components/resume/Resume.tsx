import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Software Developer`,
    jobType: `Remote`,
    jobDuration: `2020-2023`,
    timeDuraton: `Full Time`,
    compnayName: "Bon Software Ltd",
    jobDescription: `As a software developer, I developed intuitive web pages by leveraging 
    React.js and AntDesign. Throughout my career, I championed the development and debugging 
    of various web applications, ensuring exceptional user experiences. 
    I also refactored JQuery code to React.js components, implemented HTML, CSS, 
    and Bootstrap 5 to design responsive and visually appealing web pages, 
    employed Git, Bitbucket, and Docker to manage code versioning, collaborated with 
    team members, and streamlined the deployment process, and utilized Jira to get 
    and manage the next set of stories.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Frontend Developer`,
    jobType: `On-site`,
    jobDuration: `2017-1019`,
    timeDuraton: `Full Time`,
    compnayName: "Aroco",
    jobDescription: `As a front-end developer, I built UI components using the latest 
    web technologies, such as React.js, Next.js, and Vue.js, and designed them with 
    CSS and SCSS. I also created npm packages using JavaScript and React, worked with 
    REST APIs and web-based APIs, and became proficient in SQL. Additionally, 
    I utilized Git, Bitbucket, and Docker to manage code versioning, collaborated 
    with team members, and streamlined the deployment process, while utilizing my 
    problem-solving skills to debug and troubleshoot code in JavaScript and React.js, 
    ensuring a smooth user experience.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `UI/UX Designer`,
    jobType: `On-site`,
    jobDuration: `2016-2017`,
    timeDuraton: `Full Time`,
    compnayName: "Aroco",
    jobDescription: `As a UI/UX Designer, I communicated project vision by researching, 
    conceiving, wireframing, sketching, prototyping, and mocking up user experiences using 
    Adobe XD, Sketch, and Figma. Distinctive graphic designs were developed with the help of 
    Illustrator and one-of-a-kind visual concepts crafted. I also utilized Adobe InDesign 
    to adhere to font, color, and image style guidelines and streamlined the design handoff 
    process using Zeplin, improving collaboration with developers.`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "2019-2021",
    degreeTitle: "Diploma in Web Design",
    instituteName: "CDI College in Montreal",
  },
  {
    passingYear: "2011-2015",
    degreeTitle: "Bsc. in Software Engineering",
    instituteName: "Azad University in Tehran",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          >
          </div>
          <div className="title">
            <h3>Education & Skills</h3>{" "}
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
