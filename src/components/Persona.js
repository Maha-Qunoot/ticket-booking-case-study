import React from 'react';
import personaImage from '../assets/persona-1.PNG'; 

const Persona = () => {
  return (
    <section className="persona" id="persona">
      <h2>Persona: Maria Adam</h2>
      <img src={personaImage} alt="Persona1" />
      <h4>Problem Statement</h4>
      <p>
       
      Maria Adam is a Busy Boutique Owner who needs intuitive website so she can buy movie ticket in advance  because she does not want to wait in long 
line and waste time .
      </p>
    </section>
  );
};

export default Persona;

