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
              src="images/img-9.jpg"
              text="Muse Social Work - Development of Rural India, Empowerment of Woman and child"
              label="Social Work"
              path="/aboutus"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Muse Art & Crafts College"
              label="Art College"
              path="/college"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Muse Bamboo Mission"
              label="Bamboo production House"
              path="/bamboo"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Muse E-Commerce"
              label="ECom"
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
