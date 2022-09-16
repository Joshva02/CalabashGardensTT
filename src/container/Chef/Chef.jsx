import React from "react"

import { images } from "../../constants"
import "./Chef.css"

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.checkyes} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant">What People Say</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
          On finding this hidden gem you’re going to enjoy all that it has to
          </p>
        </div>
        <p className="p__opensans">
        offer, from a friendly ping pong match a cocktail with a friend or a meal that hits the spot to a cocktail that compliments the mood. You won’t want to leave.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Melissa D.</p>
   
      </div>
    </div>
  </div>
)

export default Chef
