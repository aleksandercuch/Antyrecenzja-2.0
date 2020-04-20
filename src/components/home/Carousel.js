import { Component } from "react";
import React from "react";
import './home.scss';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Hidden from '@material-ui/core/Hidden';

class Carousels extends Component {

  render() {
    let img1 = "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/68480273_113653856660747_6884534530527461376_o.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_ohc=CHu0XKecStIAX_8cL_P&_nc_ht=scontent-waw1-1.xx&oh=b2b3436433677b7934d772aedf0e6703&oe=5EBC8A71";
    let img2 = "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/68480273_113653856660747_6884534530527461376_o.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_ohc=CHu0XKecStIAX_8cL_P&_nc_ht=scontent-waw1-1.xx&oh=b2b3436433677b7934d772aedf0e6703&oe=5EBC8A71";
    let img3 = "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/68480273_113653856660747_6884534530527461376_o.jpg?_nc_cat=110&_nc_sid=dd9801&_nc_ohc=CHu0XKecStIAX_8cL_P&_nc_ht=scontent-waw1-1.xx&oh=b2b3436433677b7934d772aedf0e6703&oe=5EBC8A71";
    return (
      <>
        <Hidden mdDown>
          <Carousel
            centered
            autoPlay={5000}
            animationSpeed={1500}
            infinite
            slidesPerPage={2}
            dots
            draggable={true}
            itemWidth={1200}
          >
            <img className="carouselImage" src={img1} alt="error" />
            <img className="carouselImage" src={img2} alt="error" />
            <img className="carouselImage" src={img3} alt="error" />
          </Carousel>
        </Hidden>
        <Hidden lgUp smDown>
          <Carousel
            centered
            autoPlay={5000}
            animationSpeed={1500}
            infinite
            slidesPerPage={2}
            dots
            draggable={true}
            itemWidth={900}
          >
            <img className="carouselImage" src={img1} alt="error" />
            <img className="carouselImage" src={img2} alt="error" />
            <img className="carouselImage" src={img3} alt="error" />
          </Carousel>
        </Hidden>
        <Hidden mdUp>
          <Carousel
            centered
            autoPlay={5000}
            animationSpeed={1500}
            infinite
            slidesPerPage={2}
            dots
            draggable={true}
            itemWidth={600}
          >
            <img className="carouselImage" src={img1} alt="error" />
            <img className="carouselImage" src={img2} alt="error" />
            <img className="carouselImage" src={img3} alt="error" />
          </Carousel>
        </Hidden>

      </>
    );
  }
}

export default Carousels;

