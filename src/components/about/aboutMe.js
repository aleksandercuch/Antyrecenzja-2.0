import { Component } from "react";
import React from "react";

import './about.scss';
import PhotoPanel from "./photoPanel"
import MyHistory from "./myHistory"
import AntyrecenzjaImage from "../Reusable/AntyrecenzjaImage"

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

class AboutMe extends Component {

  render() {
    return (
      <>
        <Box>
          <Grid
            container
            direction="row"
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
            <Grid item md={6} xs={10}>
              <MyHistory />
            </Grid>
            <Grid item md={3} xs={10}>
              <PhotoPanel />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default AboutMe;
