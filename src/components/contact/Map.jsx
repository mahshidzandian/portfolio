import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            title="location title"
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.369541356814!2d-73.98819864157383!3d40.768957498211556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25858a752eb4d%3A0x7d07dba36dfcb452!2s80%20Columbus%20Cir%2C%20New%20York%2C%20NY%2010023!5e0!3m2!1sen!2sus!4v1768835982202!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
