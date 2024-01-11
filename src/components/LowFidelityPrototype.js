import React from "react";
import LowFiPrototypeImage from '../assets/lo-fi prototype.PNG'; // Adjust the path accordingly

const LowFiPrototypeSection = () => {
  return (
    <section className="prototype" id="low-fi">
      <div className="prototype-info">
        <h3>Low-Fidelity Prototype</h3>
        
        <p> After turning the final wireframes .I created a low-fidelity prototype wireframes to test functionality of movie ticket booking website and ensure accessibility for end-users.</p>
        <a href="https://www.figma.com/proto/jH7VTBZtrhoO8sf7mcw8bK/movie-booking-app-updated-design?type=design&node-id=321-598&t=9PZrnM2utfqZfYJa-1&scaling=contain&page-id=320%3A597&starting-point-node-id=321%3A598&mode=design" target="_blank" rel="noopener noreferrer">View Low-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={LowFiPrototypeImage} alt="Low-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default LowFiPrototypeSection;
