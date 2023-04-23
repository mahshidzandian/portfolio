import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>What’s your story? Get in touch</h4>
        <p>
          Always available for freelancing if the right project comes along,
          Feel free to contact me.
        </p>
        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              Vancouver, BC, Canada
            </span>
          </li>
          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">zandian.mahshid@gmail.com</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
