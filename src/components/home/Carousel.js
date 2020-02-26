import { Component } from "react";
import React from "react";
import './home.scss';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class Carousels extends Component {

  state = {};

  render() {
    return (
      <>
        <Carousel
          centered
          autoPlay={5000}
          animationSpeed={1000}
          infinite
          slidesPerPage={2}
          dots
          draggable={true}
          itemWidth={1600}
          offset={5}
        >
          <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/68480273_113653856660747_6884534530527461376_o.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_ohc=CHu0XKecStIAX_8cL_P&_nc_ht=scontent-waw1-1.xx&oh=b2b3436433677b7934d772aedf0e6703&oe=5EBC8A71" alt="no image" />
          <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/68480273_113653856660747_6884534530527461376_o.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_ohc=CHu0XKecStIAX_8cL_P&_nc_ht=scontent-waw1-1.xx&oh=b2b3436433677b7934d772aedf0e6703&oe=5EBC8A71" alt="no image" />
          <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/68480273_113653856660747_6884534530527461376_o.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_ohc=CHu0XKecStIAX_8cL_P&_nc_ht=scontent-waw1-1.xx&oh=b2b3436433677b7934d772aedf0e6703&oe=5EBC8A71" alt="no image" />
        </Carousel>
      </>
    );
  }
}

export default Carousels;

