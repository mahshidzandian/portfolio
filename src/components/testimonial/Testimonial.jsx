import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `I had the pleasure of working with Mahshid, a talented Frontend Developer, 
      who brought creativity, attention to detail, and a positive attitude to every project. 
      Her contributions and ability to deliver high-quality work on time and within budget 
      were invaluable to our team's success. Endorse Mahshid as a proficient 
      and committed developer.`,
      reviewerName: "Mostafa",
      designation: "Full-Stack Developer",
      delayAnimation: "200",
    },
    {
      imageName: "team-2",
      desc: `Mahshid is an exceptional web developer with a passion for creating elegant, 
      high-performing websites. Her expertise in Frontend development, 
      coupled with her ability to seamlessly integrate with Backend systems, 
      made her an invaluable member of our team. 
      I recommend Mahshid as a skilled and dedicated web developer.`,
      reviewerName: "Parsa",
      designation: "Back-End Developer",
      delayAnimation: "400",
    },
    {
      imageName: "team-4",
      desc: `Working with Mahshid, a Frontend Developer, was an absolute pleasure. 
      Her excellent communication skills and expertise in developing responsive and 
      interactive user interfaces made my job as a UI Designer much easier. 
      Her ability to turn designs into functional websites with precision and 
      efficiency was truly impressive.`,
      reviewerName: "Sofia",
      designation: "Visual Designer",
      delayAnimation: "400",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
