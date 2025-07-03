import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Profile from "../../Assets/images/profile-pic (1).png"
export const Introduction = () => {
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className="introduction">
            <div className="introduction_logocontainer">
              <img
                src={Profile}
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Ankur Singh </span> from{" "}
                <span className="different">Gorakhpur, Uttar Pradesh</span>.  I’m currently pursuing an Executive Post Graduate Certification in Cyber Security and Ethical Hacking from iHub DivyaSampark – IIT Roorkee. I also hold a B.Tech in Mechanical Engineering from Galgotias University, Greater Noida.

                
              </h4>
              <h4>
                
I’m passionate about cybersecurity, with hands-on experience in incident response, threat hunting, and security operations. Beyond cybersecurity and coding, I enjoy:
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Teaching{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Solving challenging problems{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Exploring new technologies and techniques{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveling and discovering new places{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
