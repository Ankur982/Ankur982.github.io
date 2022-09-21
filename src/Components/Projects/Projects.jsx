import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiStyledcomponents,
  SiHtml5,
  SiMaterialui,
  SiJavascript,
  SiChakraui
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        {/* Boatlife Style */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-2000-650_2000x.png?v=1663755002"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>boat-lifestyle.com | Clone</h2>
              <p>
              Individual Project | Duration: 04 Days
              </p>
              <div>
                <span>Tech Stack:</span>
               
                <FaReact />
                <SiJavascript />
                <SiChakraui />
                <SiStyledcomponents />
                <DiCss3 />
                <VscJson />
              </div>
              <div>
              <a
                  href="https://github.com/Ankur982/-madly-milk-3012/tree/main/boat-lifestyle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    Details
                  </span>
                </a>
                <a
                  href="https://630cf204854dd51008b59f2b--monumental-beijinho-8e982c.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Ankur982/-madly-milk-3012/tree/main/boat-lifestyle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SkineStor.com */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-2000-650_2000x.png?v=1663755002"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>SkinStore.com | Clone</h2>
              <p>
              Groups Project: 04 Collaborators | Duration: 04 Days
              </p>
              <div>
                <span>Tech Stack:</span>
                <SiHtml5/>
                <DiCss3 />
                <SiJavascript />
                <VscJson />
              </div>
              <div>
              <a
                  href="https://github.com/Ankur982/-madly-milk-3012/tree/main/boat-lifestyle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    Details
                  </span>
                </a>
                <a
                  href="https://regal-cucurucho-bea6ba.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Ankur982/-profuse-yak-8322/tree/main/Ankur_Singh_fw_19_0272"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* ideakart.com */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-2000-650_2000x.png?v=1663755002"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>ideaKart.com | Clone</h2>
              <p>
              Groups Project: 05 Collaborators | Duration: 04 Days
              </p>
              <div>
                <span>Tech Stack:</span>
                <SiHtml5/>
                <DiCss3 />
                <SiJavascript />
                <VscJson />
              </div>
              <div>
              <a
                  href="https://github.com/Ankur982/-madly-milk-3012/tree/main/boat-lifestyle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    Details
                  </span>
                </a>
                <a
                  href="https://630cf204854dd51008b59f2b--monumental-beijinho-8e982c.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Ankur982/U2-CW-Ideacart_Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
