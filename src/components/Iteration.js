import React from 'react';
import lofiPayment from '../assets/lo-fi payment.png';
import hifiPayment from '../assets/payment.png';
import lofiInvoice from '../assets/lo-fi invoice.png';
import hifiInvoice from '../assets/invoice.png';



const Iteration = () => {
  return (
    <section className="iteration" id="usability-findings">
      <h2>Mockups</h2>

      <div className="finding">
        <h3>Finding 1</h3>
        <p>
        Based on the insights from the usability studies, I applied the design changes, including a <b>save button</b> so, user does not have to put credit information everytime they book a movie. 

        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={lofiPayment} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={hifiPayment} alt="" />
          </div>
        </div>
      </div>

      <hr />

      <div className="finding">
        <h3>Finding 2</h3>
        <p>
        Based on the insights from the usability studies, I applied the design changes, including a <b>Download button</b> in invoice.
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={lofiInvoice} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={hifiInvoice} alt="" />
          </div>
        </div>
      </div>

      

      
    </section>
  );
};

export default Iteration;
