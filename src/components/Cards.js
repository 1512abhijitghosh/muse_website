import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Be a part of this great initiative</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/socialwork.jpg"
              text="Muse Social Work - Development of Rural India, Empowerment of Woman and child"
              label="Social Work"
              path="/socialwork"
            />
            <CardItem
              src="images/college.jpg"
              text="Muse Academy of Art & Crafts"
              label="Art College"
              path="/college"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/bambooproduct.jpg"
              text="Muse Bamboo Mission"
              label="Bamboo production House"
              path="/bamboomission"
            />
            <CardItem
              src="images/ecom.jpg"
              text="Muse E-Commerce"
              label="ECom - Coming Soon..."
              path="/ecom"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Muse Achievement"
              label="Our Achievement"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
