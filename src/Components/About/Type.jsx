import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["A Cyber Security Consultant","A Cyber/Information security Analyst","A Security Operations Center Analyst","A Full Stack Developer", "A MERN Stack Developer", "Tech Enthusiast"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
