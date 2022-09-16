import React from "react"

import { images } from "../../constants"
import "./AboutUs.css"

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding app__wrapper"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_food flex__center">
        <img src={images.Cg11} alt="about_food" />
      </div>
       <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">The Foodie Experience</h1>

        <p className="p__opensans">
        Our kitchen team is made up of experienced culinary professionals with a knack for 
        cooking and creating with love and attention. 
        Never pretentious, always fun, fresh and mostly local. 
        Join us for brunch, lunch or dinner some time.
        </p>
      </div>
    </div>
  </div>
)

export default AboutUs