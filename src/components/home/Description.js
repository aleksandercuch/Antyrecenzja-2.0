import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import './home.scss';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Description extends Component {

  render() {
    return (
      <>
        <Paper className="padding">
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
                spacing={3}
              >
                <Grid item xs={12}>
                  <Typography variant="h5" align="center">
                    Krótko o mnie
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" align="center" gutterBottom>
                    Cześć, mam na imię Aleksander.
                    Z wykształcenia jestem inżynierem oprogramowania, a w wolnym czasie oddaję się pasji, jaką jest pisanie.
                    Tworzę opowiadania i powieść w klimatach fantastycznych, więc jeżeli lubisz ten gatunek, to gorąco zapraszam do zapoznania się z moją twórczością. Najbardziej cenię sobie szczerą, zasłużoną krytykę ;)
                    Jeśli chcesz dowiedzieć się więcej o mnie i o forum, zapraszam <Link to="/omnie" style={{ textDecoration: 'none', color: "blue" }}>tutaj</Link>.
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
                  >
                    <Grid item xs={4}>
                      <Link href="https://www.facebook.com/Antyrecenzja/?modal=admin_todo_tour" style={{ 'textDecoration': 'none' }}>
                        <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item xs={12}>
                            <FacebookIcon />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1">
                              Facebook
                              </Typography>
                          </Grid>
                        </Grid>
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Link href="https://www.instagram.com/aleksandercuch/" style={{ 'textDecoration': 'none' }}>
                        <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item xs={12}>
                            <InstagramIcon />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1">
                              Instagram
                            </Typography>
                          </Grid>
                        </Grid>
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Link href="https://www.linkedin.com/in/aleksander-cuch-161118180/" style={{ 'textDecoration': 'none' }}>
                        <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item xs={12}>
                            <LinkedInIcon />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1">
                              LinkedIn
                              </Typography>
                          </Grid>
                        </Grid>
                      </Link>
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

export default Description;
