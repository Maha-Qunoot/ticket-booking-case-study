import React from 'react';
import HighFiPrototypeImage from '../assets/hi-fi prototype.PNG'; // Adjust the path accordingly

const HighFiPrototype = () => {
  return (
    <section className="prototype" id="high-fi">
      <div className="prototype-info">
        <h3>High-Fidelity Prototype</h3>
        
        <p>My hi-fi prototype followed the same user flow as the lo-fi prototype, and included the design changes made after the usability study.</p>
        <a href="https://www.figma.com/proto/jH7VTBZtrhoO8sf7mcw8bK/movie-booking-app-updated-design?type=design&node-id=397-41&t=7Kvr5OewZFmRA7z6-1&scaling=contain&page-id=397%3A40&starting-point-node-id=397%3A41&mode=design" target="_blank" rel="noopener noreferrer">View High-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={HighFiPrototypeImage} alt="High-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default HighFiPrototype;
