import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiChakraui,
  SiPostman,
  SiStyledcomponents
} from "react-icons/si";
import { DiCss3, DiMongodb, DiNpm } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <div>
      <div className="section main">
        <h2 className="section__title different">Skills | Tools</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <SiChakraui />
            <h5>Chakra UI</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div>
            <FaBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <DiNpm />
            <h5>NPM</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>NodeJs</h5>
          </div>
          <div>
            <SiPostman />
            <h5>Post Man</h5>
          </div>
        
        </div>
      </div>
    </div>
  );
};
