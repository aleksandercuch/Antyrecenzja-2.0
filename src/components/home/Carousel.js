import { Component } from "react";
import React from "react";

import './home.scss';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Hidden from '@material-ui/core/Hidden';

class Carousels extends Component {

  render() {
    let img1 = "https://firebasestorage.googleapis.com/v0/b/antyrecenzja-a7320.appspot.com/o/images%2Fcarousel1.jpg?alt=media&token=de039b1f-336f-4e62-a0b1-6d279789b701";
    let img2 = "https://firebasestorage.googleapis.com/v0/b/antyrecenzja-a7320.appspot.com/o/images%2Fcarousel2.jpg?alt=media&token=6688a431-a327-4469-b154-38c65287e063";
    let img3 = "https://firebasestorage.googleapis.com/v0/b/antyrecenzja-a7320.appspot.com/o/images%2Fcarousel3.jpg?alt=media&token=af209fff-b6e9-484a-9b0c-0c0abb71eb0b";
    return (
      <>
        <Hidden mdDown>
          <Carousel
            centered
            autoPlay={6000}
            animationSpeed={2000}
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
            autoPlay={6000}
            animationSpeed={2000}
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
        <Hidden mdUp xsDown>
          <Carousel
            centered
            autoPlay={6000}
            animationSpeed={2000}
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
        <Hidden smUp>
          <Carousel
            centered
            autoPlay={6000}
            animationSpeed={2000}
            infinite
            slidesPerPage={2}
            dots
            draggable={true}
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

