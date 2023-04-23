import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe 
          title="location title" 
          className="embed-responsive-item" 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10409.376326140426!2d-123.1111209!3d49.2888248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada%20Place!5e0!3m2!1sen!2sca!4v1681494861749!5m2!1sen!2sca"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
