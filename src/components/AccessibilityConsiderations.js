import React from 'react';

const AccessibilityConsiderations = () => {
  return (
    <div className="containers color">
      <h2>Accessibility considerations</h2>
      <section className="product-overview">
        <div className="col-findings one">
          <p>I used headings with different sized text for clear visual hierarchy .</p>
        </div>

        <div className="col-findings two">
          <p>I designed the site with alt text available on each page for smooth screen reader access</p>
        </div>

        <div className="col-findings three">
          <p>Place icon in app to help user. 
</p>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityConsiderations;
