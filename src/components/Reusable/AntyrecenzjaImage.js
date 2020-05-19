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
            <img className="logoImage" src="https://firebasestorage.googleapis.com/v0/b/antyrecenzja-a7320.appspot.com/o/images%2Fimage.png?alt=media&token=bbadb6f6-8a7c-4a04-8c0d-9249894ce59e" alt="logo error" />
          </Link>
        </Box>
      </>
    );
  }
}

export default Antyrecenzja;
