import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web Design",
    descriptions: `As a web designer, I create visually appealing and user-friendly 
    interfaces by combining my design skills with knowledge of the latest web technologies.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `As a web developer, I design and develop responsive websites and 
    web applications using the latest technologies to create engaging and 
    functional user experiences.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Seo Marketing",
    descriptions: `As an SEO marketer, I develop and implement strategies to increase 
    website traffic, improve search engine rankings, and boost online visibility for 
    businesses and organizations.`,
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
