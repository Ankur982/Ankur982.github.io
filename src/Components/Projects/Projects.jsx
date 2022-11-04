import React, { useState } from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiStyledcomponents,
  SiHtml5,
  SiMaterialui,
  SiJavascript,
  SiChakraui,
  SiReduxsaga,
  SiMongodb,
  SiExpress
} from "react-icons/si";
import { DiCss3, DiHeroku } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import Boat from "../../Assets/images/Boat.gif";
import Skinstore from "../../Assets/images/Skinstore.gif";
import Ideakart from "../../Assets/images/Ideakart.gif";
import Getharvest from "../../Assets/images/Getharvest.gif";
export const Projects = () => {
const [project1, setProject1]= useState(true);
const [project2, setProject2]= useState(true);
const [project3, setProject3]= useState(true);
const [project4, setProject4]= useState(true);

const handleClickProject1=()=>{
  if(project1){
    setProject1(false)
  }else{
    setProject1(true)
  }
  
}


const handleClickProject2=()=>{
  if(project2){
    setProject2(false)
  }else{
    setProject2(true)
  }
  
}

  const handleClickProject3=()=>{
    if(project3){
      setProject3(false)
    }else{
      setProject3(true)
    }
    
  }

  const handleClickProject4=()=>{
    if(project4){
      setProject4(false)
    }else{
      setProject4(true)
    }
    
  }
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>

        {/* harvest.com */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={Getharvest}
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>getharvest.com | Clone</h2>
              <p>
              Groups Project: 05 Collaborators | Duration: 04 Days
              </p>
              <div>
                <span>Tech Stack:</span>
                <FaReact />
                <SiJavascript />
                <SiRedux />
                <SiMongodb />
                <SiExpress />
                <SiChakraui />
                <DiHeroku/>
              </div>
              <div>
              <span type="button" className="btn btn--outline" onClick={handleClickProject4}>
                    {project4? "Hide Details" : "Show Details"}
                    
                  </span>
                <a
                  href="https://myharvest2.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shabazalimalik69/afraid-shoe-4639"
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
          <div>
          {project4? <div className="details">
            <div>
            <h2>Description:</h2>
            <p>A web application to track the time, expenses ,budget of projects.</p>

            <h2>Features:</h2>
            <ul className="list-styles pt-1">
            <li>Provided end-to-end flow of the application.</li>
            <li>Logging and Signup functionality using MongoDb server. </li>
            <li>Provided the functionality to Users who can add their projects with details of budgets and duration of projects.</li>
            <li>Provided the functionality to Users who can add expenses and details for any particular project.</li>
            <li>Created MongoDB server to store the data of user's details and projects and their expanses.</li>
            </ul>
          <h2>My Contribution:</h2>
          <ul className="list-styles pt-1">
          <li>I built the navbar, footer, landing, integrations, and pricing pages with responsiveness for different screen sizes and linking of every page.</li>
          <li>I created the functionality of Authentication with Gmail id.</li>
          <li>Designed the database for the application using Express & MongoDB.</li>
          </ul>
            </div>
          </div>:null}
          </div>
        </div>

        {/* Boatlife Style */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={Boat}
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
              <span type="button" className="btn btn--outline" onClick={handleClickProject1}>
                    {project1? "Hide Details" : "Show Details"}
                    
                  </span>
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
          <div>
          {project1? <div className="details">
            <div>
            <h2>Description:</h2>
            <p> A web application to buy all types of audio & wearables products.</p>

            <h2>Features:</h2>
            <ul className="list-styles pt-1">
            <li>Provided end-to-end product purchasing flow from the store.</li>
            <li>Login and Signup functionality by backend API. </li>
            <li>Product item with Modal Effect.</li>
            </ul>
            </div>
           

          </div>:null}
          </div>
        </div>

        {/* SkineStor.com */}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={Skinstore}
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
              <span type="button" className="btn btn--outline" onClick={handleClickProject2}>
                    {project2? "Hide Details" : "Show Details"}
                    
                  </span>
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
          <div>
          {project2? <div className="details">
            <div>
            <h2>Description:</h2>
            <p>A web application to buy all types of Makeup products.</p>

            <h2>Features:</h2>
            <ul className="list-styles pt-1">
            <li>Provided end-to-end product purchasing flow from the store.</li>
            <li>Login and Signup functionality using local storage. </li>
            <li>Discount coupon | Payment |Sorting |Filtering functionality.</li>
            <li>Homepage category slider | Navbar hover category.</li>
            </ul>

          <h2>My Contribution:</h2>
          <ul className="list-styles pt-1">
          <li>I created the landing page, Navbar section with hover subcategory of product, Footer section, Cart page Cart page with fully dynamics, Payment page using local storage.</li>
          <li>Dropdown of user Dashboard with multiple dynamics pages eg: Wishlist, OrderPage, Referral, Order History.</li>
          <li>Cart Page are fully dynamics and I created multiple unique coupons for discount.</li>
          </ul>
            </div>
           

          </div>:null}
          </div>
        </div>


        {/* ideakart.com       website*/}

        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={Ideakart}
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
             
                  <span type="button" className="btn btn--outline" onClick={handleClickProject3}>
                    {project3? "Hide Details" : "Show Details"}
                    
                  </span>
             
                <a
                  href="https://legendary-gecko-c6ccce.netlify.app/"
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
                  <span type="button" className="btn btn--outline" >
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
          {project3? <div className="details">
            <div>
            <h2>Description:</h2>
            <p>A web application to buy all types of Books and It also gives us an random idea about the book to buy, And user can Earn Money Online by adding products.</p>

            <h2>Features:</h2>
            <ul className="list-styles pt-1">
              <li>Sign-in | sign-up | Add to cart | Discount functionality.</li>
              <li>Discount coupon | Payment |Sorting |Filtering functionality.</li>
              <li>Option of adding a product by the user and He can track the status of the uploaded product on Deshboard page and user will get a notification of their product status.</li>
              <li>Admin page with Authority to accept or reject uploaded project.</li>
            </ul>

          <h2>My Contribution:</h2>
          <ul className="list-styles pt-1">
            <li>I created the landing page, Navbar section , Footer section, Cart page with fully dynamics, Payment page using local storage.</li>
            <li>Cart Page are fully dynamics and I created multiple unique coupons for discount.</li>
            <li>User Dashboard page with Dropdown of multiplal dynamics pages.</li>
          </ul>
            </div>
           

          </div>:null}
          </div>
          
        </div>

      </div>
    </>
  );
};
