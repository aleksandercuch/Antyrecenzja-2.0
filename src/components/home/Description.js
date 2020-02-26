import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import './home.scss';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Description extends Component {

  state = {};

  render() {
    return (
      <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12}>
            <Paper className="paddingClass">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Krótko o mnie
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" align="center">
                    Cześć, mam na imię Aleksander.
                    Z wykształcenia jestem inżynierem oprogramowania, a w wolnym czasie oddaję się pasji, jaką jest pisanie.
                    Tworzę opowiadania i powieść w klimatach fantastycznych, więc jeżeli lubisz ten gatunek, to gorąco zapraszam do zapoznania się z moją twórczością. Najbardziej cenię sobie szczerą, zasłużoną krytykę ;)
                    Jeśli chcesz dowiedzieć się więcej o mnie i o forum, zapraszam <Link to="/" style={{ textDecoration: 'none', color: "blue" }}>tutaj</Link>.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={10}
                  >
                    <Grid item>
                      <a href="https://www.facebook.com/Antyrecenzja/?modal=admin_todo_tour">
                        <Button style={{ 'textDecoration': 'none', 'textTransform': 'none' }}>
                          <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item>
                              <FacebookIcon />
                            </Grid>
                            <Grid item>
                              <Typography variant="body1">
                                Facebook
                              </Typography>
                            </Grid>
                          </Grid>
                        </Button>
                      </a>
                    </Grid>
                    <Grid item>
                      <a href="https://www.instagram.com/aleksandercuch/">
                        <Button style={{ 'textDecoration': 'none', 'textTransform': 'none' }}>
                          <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item>
                              <InstagramIcon />
                            </Grid>
                            <Grid item>
                              <Typography variant="body1">
                                Instagram
                              </Typography>
                            </Grid>
                          </Grid>
                        </Button>
                      </a>
                    </Grid>
                    <Grid item>
                      <a href="https://www.linkedin.com/in/aleksander-cuch-161118180/">
                        <Button style={{ 'textDecoration': 'none', 'textTransform': 'none' }}>
                          <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                          >
                            <Grid item>
                              <LinkedInIcon />
                            </Grid>
                            <Grid item>
                              <Typography variant="body1">
                                LinkedIn
                              </Typography>
                            </Grid>
                          </Grid>
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Description;
