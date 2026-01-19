import React from "react";

const ServiceContent = [
  {
    icon: "icon-browser",
    title: "Frontend Engineering",
    descriptions: `I build scalable and high-performance frontend applications using React, TypeScript, and modern JavaScript frameworks. I focus on clean architecture, reusable components, and delivering reliable, user-centered interfaces.`,
    delayAnimation: "",
  },
  {
    icon: "icon-bargraph",
    title: "Enterprise UI & Performance",
    descriptions: `I work on enterprise-scale applications, designing and shipping dynamic product features while prioritizing performance optimization, accessibility, reliability, and maintainability across large codebases serving millions`,
    delayAnimation: "200",
  },
  {
    icon: "icon-chat",
    title: "Collaboration & Leadership",
    descriptions: `I collaborate closely with product, design, and engineering teams to translate complex requirements into intuitive, accessible user experiences. I mentor engineers and strengthen quality and collaboration teamwide today!!`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
