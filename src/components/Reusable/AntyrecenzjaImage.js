import { Component } from "react";
import React from "react";
import Box from "@material-ui/core/Box";
import './reusable.scss';
import { Link } from "react-router-dom"

class Antyrecenzja extends Component {

  render() {
    return (
      <>
        <Box>
          <Link to="">
            <img className="logoImage" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/87851774_197975394895259_2913424394464264192_n.png?_nc_cat=108&_nc_sid=dd9801&_nc_ohc=jemzy1ynKVAAX9cARCE&_nc_ht=scontent-waw1-1.xx&oh=78d0470e3256f684b7d0c21392a7dcf0&oe=5EBD84CA" alt="logo error" />
          </Link>
        </Box>
      </>
    );
  }
}

export default Antyrecenzja;
