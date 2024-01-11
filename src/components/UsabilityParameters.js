import React from 'react';
import StudyTypeImage from '../assets/study-type.png';
import LocationImage from '../assets/location.png';
import ParticipantsImage from '../assets/participants.png';
import LengthImage from '../assets/length.png';

const UsabilityParameters = () => {
  return (
    <div>
    
    {/* Usability Study: parameters */}
    <section className="usability">
      <h2>Usability Study: parameters</h2>
      <div className="parameter">
        <div className="group">
          <img src={StudyTypeImage} alt="Study Type" />
          <h4>Study Type</h4>
          <p>Unmoderated usability study</p>
        </div>
        <div className="group">
          <img src={LocationImage} alt="Location" />
          <h4>Location</h4>
          <p>Pakistan, Remote</p>
        </div>
        <div className="group">
          <img src={ParticipantsImage} alt="Participants" />
          <h4>Participants</h4>
          <p>5 participants</p>
        </div>
        <div className="group">
          <img src={LengthImage} alt="Length" />
          <h4>Length</h4>
          <p>10-15 minutes</p>
        </div>
      </div>
    </section>
    
    {/* Usability Study: Findings */}
    <div className="containers color" id="usabilty-findings">
        <h2>Usability Study: Findings</h2>
        <section className="product-overview">
          <div className="col-findings one">
            <h5>Ticket Download</h5>
            <p>Once at the user pay for movie there was no follow up about the about the ticket.
</p>
          </div>

          <div className="col-findings two">
            <h5>Accessibility</h5>
            <p>Users with visual impairment have difficulty navigation because there was no label written with picture or icon. 
</p>
          </div>

          <div className="col-findings three">
            <h5>Account</h5>
            <p>During the checkout process, there wasn’t any way to save previously written information.
</p>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default UsabilityParameters;
