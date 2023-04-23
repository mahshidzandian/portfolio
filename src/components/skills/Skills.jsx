import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "JavaScript",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "React JS",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "APIs",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "HTML5/CSS",
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
                duration={1}
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
