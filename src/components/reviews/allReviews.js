import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import './reviews.scss';

class AllReviews extends Component {

  render() {
    return (
      <>
        <Paper className="padding">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={12}>
              <Typography variant="h4" align="center" >
                Recenzje
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={4}
              >
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Fantastyka
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

export default AllReviews;
