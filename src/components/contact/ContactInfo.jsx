import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>What’s your story? Get in touch</h4>
        <p>
          Frontend Software Engineer currently at Intuit. Open to full-time opportunities with greater impact and growth.
        </p>
        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              New York, NY, USA
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
