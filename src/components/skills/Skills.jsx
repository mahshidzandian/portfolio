import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "React JS",
    numberPercent: "99",
    startCount: "0",
    endCount: "99",
  },
  {
    name: "TypeScript",
    numberPercent: "98",
    startCount: "0",
    endCount: "98",
  },
  {
    name: "APIs (REST / GraphQL)",
    numberPercent: "98",
    startCount: "0",
    endCount: "98",
  },
  {
    name: "Testing (Jest, React Testing Library)",
    numberPercent: "99",
    startCount: "0",
    endCount: "99",
  },
  {
    name: "Performance Optimization",
    numberPercent: "98",
    startCount: "0",
    endCount: "98",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={2}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
