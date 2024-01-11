import React from 'react';
import homepage from '../assets/Homepage.png';
import homepageMobile from '../assets/homepage-1.png';
import cinemaselection from '../assets/cinema-selection.png';
import cinemaselectionMobile from '../assets/cinema selection-1.png';
import seatselection from '../assets/seat-selection.png';
import seatselectionMobile from '../assets/select seat - 1.png';
import payment from '../assets/payment.png';
import paymentMobile from '../assets/payment - 1.png';

const MockupShowcase = () => {
  return (
      <section className="mockup-showcase">
        <div className="mockup1">
          <img src={homepage} alt="homepage" />
          <img src={homepageMobile} alt="homepage mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={cinemaselection} alt="cinemaselection" />
          <img src={cinemaselectionMobile} alt="cinemaselection mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={seatselection} alt="seatselection" />
          <img src={seatselectionMobile} alt="seatselection mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={payment} alt="payment" />
          <img src={paymentMobile} alt="payment mobile version" className="mobile-res" />
        </div>
      </section>
  );
};

export default MockupShowcase;
