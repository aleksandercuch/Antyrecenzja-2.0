import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import './reviews.scss';

class NextToRead extends Component {

  render() {
    let toRead = this.props.nextToRead;
    return (
      <>
        <Paper>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                W kolejce do recenzji
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                <Divider />
              </Typography>
            </Grid>
            {toRead.map(item => {
              return (
                <>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={3}
                    >
                      <Grid item xs={12}>
                        <img className="reviewImage" src={item.photo} alt="error" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      <Divider />
                    </Typography>
                  </Grid>
                </>
              )
            })}
          </Grid>
        </Paper>
      </>
    );
  }
}

export default NextToRead;
