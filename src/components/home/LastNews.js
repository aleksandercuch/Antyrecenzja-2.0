import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import './home.scss';

class Posts extends Component {

  state = {};

  render() {
    return (
      <>
        <Paper className="paddingClass">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    Ostatnio wyszły spod pióra:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider variant="fullWidth" />
                </Grid>
                <Grid item xs={6} style={{ borderRight: '0.1em ridge rgba(0, 0, 0, .2)', padding: '0.5em' }}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <Typography align="center" variant="h6">
                        Recenzja
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img src="https://ecsmedia.pl/c/krolowie-przekleci-tom-1-b-iext43259211.jpg" className="lastImages" alt="no image" />
                    </Grid>
                    <Grid item >
                      <Button variant="contained">Czytaj</Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} style={{ padding: '0.5em' }}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <Typography align="center" variant="h6">
                        Ostatni Zwiastun - rozdział 3
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img src="https://cdn.pixabay.com/photo/2019/07/21/13/11/portrait-4352745_960_720.jpg" className="lastImages" alt="no image" />
                    </Grid>
                    <Grid item >
                      <Button variant="contained">Czytaj</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}



export default Posts;
