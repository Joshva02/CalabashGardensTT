import React from "react"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Header.css"

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Vibes Done Right" />
      <h1 className="app__header-h1">Experience Calabash</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      We’re a garden restaurant & event space in the city of Port of Spain.
          A truly unique experience awaits you either for your special private
          event or at one of our frequent private foodie, music or combination
          events.{" "}
      </p>
      <button type="button" className="custom__button">
        Contact Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.hero} alt="header_img" />
    </div>
  </div>
)

export default Header
