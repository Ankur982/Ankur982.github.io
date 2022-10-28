import React from "react";
import Githubcalendar from "react-github-calendar";
import "./Github.css";
export const Github = () => {
const colourTheme = {
background: "transparent",
text: "#ffffff",
grade4: "#8400b8",
grade3: "#b22ff4",
grade2: "#b265f6",
grade1: "#c084f5",
grade0: "#ecd9fc"
};
return (
<> 
    <div className="section" data-aos="fade-right">
      <h2 className="section__title">
        Github <span className="different">Overview</span>
      </h2>
      <div className="github-overview-container">
        <div className="github-overview-box">
          <img className="github-overview-img" src="https://camo.githubusercontent.com/9a8c42716209792bc4bea2ab1242e0c5155af5e9e5678ce80a9af17989c6e69f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e6b75723938322673686f775f69636f6e733d74727565266c6f63616c653d656e"/>
        </div>
        <div className="github-overview-box">
          <img className="github-overview-img" src="https://camo.githubusercontent.com/359e16dc6576a409a246376038c2d4be08739612dc001cd1807bb15bea0fff68/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d616e6b757239383226"/>
        </div>
      </div>
    </div>
    <div>
    </div>
    <div className="section" data-aos="fade-right">
      <h2 className="section__title">
        Days I <span className="different"> Code on Github</span>
      </h2>
      <Githubcalendar username="Ankur982" blockSize={15} blockMargin={5} theme={colourTheme} fontSize={16} />
    </div>
</>
);
};