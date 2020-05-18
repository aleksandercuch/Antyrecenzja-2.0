import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

import './reusable.scss';

import Box from "@material-ui/core/Box";

class Antyrecenzja extends Component {

  render() {
    return (
      <>
        <Box>
          <Link to="">
            <img className="logoImage" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/87851774_197975394895259_2913424394464264192_n.png?_nc_cat=108&_nc_sid=dd9801&_nc_ohc=rsST957pfuIAX_25vHJ&_nc_ht=scontent-waw1-1.xx&oh=a06df2fc2c09aa82786a85a35a6950dc&oe=5EE710B6" alt="logo error" />
          </Link>
        </Box>
      </>
    );
  }
}

export default Antyrecenzja;
