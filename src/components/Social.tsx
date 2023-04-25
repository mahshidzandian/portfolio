import React from 'react';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaTwitter />, link: "https://twitter.com/" },
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/mahshid.zoodgo/" },
  { Social: <FaLinkedinIn />, link: "http://linkedin.com/in/mahshid-zandian/" },
  { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
