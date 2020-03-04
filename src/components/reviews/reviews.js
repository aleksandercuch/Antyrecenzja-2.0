import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Description from "../home/Description"
import AllReviews from "./allReviews"
import NextToRead from "./nextToRead"
import './reviews.scss';
import AntyrecenzjaImage from "../Reusable/AntyrecenzjaImage"

class Reviews extends Component {

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
            <Grid item xs={6}>
              <AllReviews />
            </Grid>
            <Grid item xs={3}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={8}
              >
                <Grid item xs={12}>
                  <Description />
                </Grid>
                <Grid item xs={12}>
                  <NextToRead />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default Reviews;
