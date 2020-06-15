import { Component } from "react";
import React from "react";

import './about.scss';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class PhotoPanel extends Component {

  state = {};

  render() {
    return (
      <>
        <Paper className="padding">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12}>
                  <img className="photoPanelImage" src="https://firebasestorage.googleapis.com/v0/b/antyrecenzja-a7320.appspot.com/o/images%2Favatar.jpg?alt=media&token=e3344d0b-9c4f-4ae7-a867-4941b89d6746" alt="error" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <hr />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="h5">Znajdziesz mnie na:</Typography>
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
            <Grid item xs={12}>
              <hr />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12}>
                  <img className="photoPanelImage" src="https://cdn.pixabay.com/photo/2017/06/19/02/00/embroidery-2417899_960_720.png" alt="error" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

export default PhotoPanel;
