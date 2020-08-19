import { Component } from "react";
import React from "react";

import './about.scss';
import PhotoPanel from "./photoPanel"
import MyHistory from "./myHistory"
import AntyrecenzjaImage from "../Reusable/AntyrecenzjaImage"

import Grid from "@material-ui/core/Grid";

class AboutMe extends Component {

  render() {
    return (
      <Grid
        container
        direction="row-reverse"
        justify="center"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <AntyrecenzjaImage />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} xs={10}>
          <PhotoPanel />
        </Grid>
        <Grid item md={6} xs={10}>
          <MyHistory />
        </Grid>
      </Grid>
    );
  }
}

export default AboutMe;
