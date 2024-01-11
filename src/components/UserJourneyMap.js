import React from 'react';
import UJmap from '../assets/user journey map.PNG'; // Adjust the path accordingly

const  UserJourneyMap= () => {
  return (
    <section className="persona UJmap" id="UJmap">
        <h2>User Journey Map</h2>
        <p>Mapping Maria's user journey revealed how helpful it would be for users to
            have access to a quick and efficient way of booking a movie ticket.</p>
        <img src={UJmap} alt="User Journey Map" />
    </section>
  );
};

export default UserJourneyMap;

