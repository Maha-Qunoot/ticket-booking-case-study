import React from 'react';

const ProductOverview = () => {
  return (
    <div>
        
       {/* Product Description */}
      <section className="the-product">
        <h1>Movie ticket booking website</h1>
        <p>
        We’re creating a movie ticket booking app, 
so we can help users who want to book movie tickets without 
standing in line for hours. We need to find out if the main user 
experience, searching for movies,seeing reviews, and booking 
movie tickets and ordering snacks in an app is easy for users to 
complete. 

        </p>
      </section>

      {/* Tool & Technologies */}
      <section className="row">
          <div className="col">
            <h5>Timeline</h5>
            <p> october 2023 to November 2023</p>
          </div>

          <div className="col">
            <h5>Tools</h5>
            <p>Figma</p>
          </div>

          <div className="col">
            <h5>Platform</h5>
            <p>Desktop</p>
          </div>
    </section>

    {/* Product Overview */}
    <div className="containers">
        <h2>Product Overview</h2>
        <section className="product-overview">
            <div className="col">
              <h5>My Role</h5>
              <p>UX designer designing a website for movie ticket booking from Ideation to Implementation.</p>
            </div>
    
            <div className="col">
              <h5>The Problem</h5>
              <p>Busy workers and users who lack the time to buy tickets.</p>
            </div>
            
            <div className="col">
              <h5>The Goal</h5>
              <p>Design an app for users who wants to buy movie ticket and snacks without standing in long lines.</p>
            </div>
      </section>
    </div>

    {/* responsibilty */}
    <section className="responsibilty">
        <h2>My Responsibilities</h2>
        <p>Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.
</p>
    </section>
    
    {/* user research pain points */}
    <section className="responsibilty">
        <h2>User Research: Summary</h2>
        <p>I conducted interviews and created empathy maps to understand the users I’m
 designing for and their needs. A primary user group identified through research
 was working adults who doesn’t have time to stand in line for movie ticket’s. 
However, our research has unveiled that time constraints are not the sole challenge. Users also 
encounter other difficulties such as commitments, interests, or obstacles to getting movie ticket . 
This insight has guided us in shaping our movie ticket booking app to provide a seamless and 
hassle-free experience in booking movie in app.</p>
    </section>
    
    {/* User Research: Pain Points */}
    <div class="containers color">
        <h2>User Research: Pain Points</h2>
        <section class="product-overview">
            <div class="col-findings one">
              <h5>Time</h5>
              <p>Working adults are too busy to spend time on long line for movie ticket purchase.
</p>
            </div>
    
            <div class="col-findings two">
              <h5>Accessibility</h5>
              <p>Movie ticket booking website does not have any kind accessibility option.</p>
            </div>
            
            <div class="col-findings three">
              <h5>Experience</h5>
              <p>Online Movie ticket booking websites don’t provide an engaging browsing experience</p>
            </div>
      </section>
    </div>
    </div>
  );
};

export default ProductOverview;
