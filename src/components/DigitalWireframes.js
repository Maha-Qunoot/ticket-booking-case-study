import React from "react";
import lofiHomepage from '../assets/lo-fi homepage.png'
import lofiHomepageMobile from '../assets/lo-fi homepage mobile.png'
import digitalMenu from '../assets/lo-fi menu mobile.png'


const DigitalWireframes = () =>{
    return (
       <div>
  <section className="persona digital-wireframe">
    <h2>Digital Wireframes</h2>
    <p>During the initial design phase, I incorporated user feedback and insights into the screen designs.</p>
    <img src={lofiHomepage} alt="Digital wireframe" />
  </section>

  {/* Digital Wireframes Mobile responsive */}
  <section className="persona digital-wireframe-mobile">
    <h2>Digital Wireframes For Mobile Screen</h2>
    <p>Spending time on paper wireframes for the smaller screen version was essential in ensuring that the digital wireframes effectively addressed user concerns.</p>
    <div className="images">
    <img src={lofiHomepageMobile } alt="" />
    <img src={digitalMenu} alt="" className="img-menu" />
    </div>
  </section>
       </div>
    );
};
export default DigitalWireframes;