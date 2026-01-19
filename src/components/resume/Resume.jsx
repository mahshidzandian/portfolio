import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Software Engineer`,
    jobType: `Hybrid`,
    jobDuration: `Jan 2025 - Present`,
    timeDuraton: `Contractor`,
    compnayName: "Intuit",
    jobDescription: `Migrated legacy systems to QuickBooks Flow Orchestration Platform, improving scalability, maintainability, and development efficiency. Developed features on AppFabric (React-based internal platform), supporting TaskList, Fusion, and Entry Point Migration projects. Contributed to Fusion, Intuit's multi-product platform, including building the Mailchimp homepage experience for QuickBooks users to improve onboarding and UX. Collaborated cross-functionally on shared platform and infrastructure initiatives; improved performance, monitoring, and developer experience. Refactored legacy code, removed deprecated feature flags, and performed large-scale housekeeping across repositories; worked across React (frontend) and PHP, REST, GraphQL (backend).`,
    delayAnimation: "",
  },
  {
    jobPosition: `Software Engineer Freelancer`,
    jobType: `Remote`,
    jobDuration: `Oct 2021 - Jan 2025`,
    timeDuraton: `Freelancer`,
    compnayName: "Self-Employed",
    jobDescription: `Designed and developed responsive websites for individuals and small businesses, handling both front-end and back-end tasks. Worked directly with clients to understand their goals and translated them into functional, visually appealing websites. Built reusable UI components, implemented modern UX patterns, and optimized sites for speed and SEO. Delivered full-cycle development: wireframes → development → deployment → client training and support. Selected projects include tahayazdaniniaki.com (personal branding site) and sarabeautylounge.com (beauty salon with custom CMS and appointment features).`,
    delayAnimation: "50",
  },
  {
    jobPosition: `Software Engineer`,
    jobType: `Hybrid`,
    jobDuration: `Jan 2021 - Jan 2025`,
    timeDuraton: `Full Time`,
    compnayName: "BonSoftware LTD.",
    jobDescription: `Developed multiple scalable web applications using React.js, TypeScript, and modern front-end architectures for automation of customer onboarding and internal workflow tools for a SaaS startup. Architected component-based systems with a strong focus on code reusability, performance optimization, and maintainability. Worked with n8n as a workflow automation to create AI flows working with LLM to evaluate customer applications automatically. Owned the full front-end development cycle from planning to deployment, including unit/integration testing, CI/CD automation, and code reviews. Mentored junior developers and conducted regular code walkthroughs and best practice sessions. Integrated intelligent, rule-based logic into UI components by partnering with AI/ML teams to enhance user personalization and automation. Developed APIs on the backend using PHP and Laravel Framework.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Software Engineer`,
    jobType: `Remote`,
    jobDuration: `Jan 2020 - Dec 2020`,
    timeDuraton: `Contractor`,
    compnayName: "The Foundry by Monster",
    jobDescription: `Developed and maintained websites based on client requirements and usability goals. Built simple content management tools for non-technical users. Implemented backend features to handle user input, data processing, and content display. Created APIs for smooth data exchange between modules and external systems. Collaborated with designers and QA to turn mockups into functional pages. Supported multiple projects through planning, testing, and optimization phases.`,
    delayAnimation: "150",
  },
  {
    jobPosition: `Software Developer`,
    jobType: `On-site`,
    jobDuration: `Feb 2017 - Dec 2019`,
    timeDuraton: `Full Time`,
    compnayName: "Unitech",
    jobDescription: `Worked on 4Win (sports prediction app) and Unitech Platform (education management system). Developed modular and reusable UI components using React and Redux. Integrated front-end with backend APIs to display real-time data such as scores, rankings, and predictions. Implemented push notifications and live updates using Pusher and WebSocket protocols. Translated UI/UX designs into responsive, cross-browser compatible layouts with HTML, CSS, and Bootstrap. Delivered high-quality, testable web application code with ~90% hands-on development; maintained stability through peer code reviews and unit/integration testing. Contributed to front-end architecture and component design following best practices in modular coding, CI/CD workflows, and scalability. Provided technical guidance to junior developers and participated in pair programming.`,
    delayAnimation: "200",
  },
  {
    jobPosition: `User Interface Designer`,
    jobType: `On-site`,
    jobDuration: `Feb 2016 - Feb 2017`,
    timeDuraton: `Full Time`,
    compnayName: "Unitech",
    jobDescription: `Collaborated with product managers and developers to create high-fidelity wireframes and user-centered designs that laid the foundation for future front-end development. Designed responsive, user-friendly interfaces using tools like Figma and Adobe XD. Worked closely with front-end developers to ensure consistent design implementation. Applied UX principles to optimize user flows and reduce friction in key tasks.`,
    delayAnimation: "250",
  },
  {
    jobPosition: `User Interface Designer`,
    jobType: `On-site`,
    jobDuration: `Jan 2015 - Feb 2016`,
    timeDuraton: `Full Time`,
    compnayName: "Aroco",
    jobDescription: `Designed and implemented user-centered interfaces for company websites and internal dashboards. Developed interactive front-end components and enhanced UI responsiveness across desktop and mobile platforms. Collaborated with back-end developers to build dynamic web applications focusing on performance and maintainability. Consumed and integrated RESTful APIs into web pages for real-time data rendering and improved user experience. Conducted usability testing and translated feedback into design iterations that improved overall task completion rates. Created wireframes, mockups, and functional prototypes in collaboration with product stakeholders. Ensured cross-browser compatibility and optimized website load times to improve SEO and performance metrics.`,
    delayAnimation: "300",
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
              backgroundImage: `url(${process.env.PUBLIC_URL + "img/border-dark.png"
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
