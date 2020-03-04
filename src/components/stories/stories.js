import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Description from "../home/Description"
import MyWorks from "./myWorks"
import './stories.scss';
import AntyrecenzjaImage from "../Reusable/AntyrecenzjaImage"

class Stories extends Component {

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
              <MyWorks />
            </Grid>
            <Grid item xs={3}>
              <Description />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default Stories;
