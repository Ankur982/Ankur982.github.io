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
    <div className="section" data-aos="fade-right" >
      <h2 className="section__title">
        Github <span className="different">Overview</span>
      </h2>
      <div className="github-overview-container">
        <div className="github-overview-box">
          <img className="github-overview-img" src="https://github-readme-stats.vercel.app/api?username=Ankur982&show_icons=true&locale=en&theme=tokyonight"/>
        </div>
        <div className="github-overview-box">
          <img className="github-overview-img" src="https://github-readme-streak-stats.herokuapp.com/?user=Ankur982&show_icons=true&locale=en&theme=tokyonight
"/>
        </div>
      </div>
    </div>
    <div>
    </div>
    <div className="section" data-aos="fade-right">
      <h2 className="section__title">
      Github <span className="different"> Overview</span>
      </h2>
      <div className="githubcal-overview-box">
      <Githubcalendar username="Ankur982" blockSize={15} blockMargin={5} theme={colourTheme} fontSize={16}/>
      </div>
    </div>
</>
);
};