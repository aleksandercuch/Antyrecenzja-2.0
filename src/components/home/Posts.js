import { Component } from "react";
import React from "react";
import './home.scss';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class Posts extends Component {

  state = {};

  render() {
    return (
      <>
        <Paper className="padding">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={5}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="h3">Każdy zasługuje na szacunek - co o tym sądzę? </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">Sept. 16, 2019, 1:11 p.m.</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5" style={{ color: 'rgb(105,105,105)' }}>Ostatnie przemyślenia na temat naszych realiów doprowadziły mnie do pewnych wniosków i postanowiłem się nimi z Wami podzielić: nie każdy zasługuje na szacunek. Zanim ocenicie mnie jako jakiegoś odszczepieńca i dziwaka, pozwólcie, że rozwinę swoją myśl...</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">by Aleksander</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7}>
              <img className="postImg" src="https://cdn.pixabay.com/photo/2018/01/19/07/58/shaking-hands-3091908_960_720.jpg" alt="image error" />
            </Grid>
          </Grid>
          <Divider variant="fullWidth" />
        </Paper>
      </>
    );
  }
}

export default Posts;

