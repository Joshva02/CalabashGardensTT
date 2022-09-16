import React from "react"

import { MenuItem } from "../../components"
import { data, } from "../../constants"
import "./SpecialMenu.css"

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Our Services</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">What We Bring!</p>
        <div className="app__specialMenu_menu_items">
          {data.services.map((services, index) => (
            <MenuItem
              key={services.title + index}
              title={services.title}
              price={services.price}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default SpecialMenu
