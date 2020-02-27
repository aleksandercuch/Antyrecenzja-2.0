import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import './about.scss';
import EmailIcon from '@material-ui/icons/Email';
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
              <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14141633_1111643665597304_5943056743569652872_n.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=m9YfqsAHSyIAX_xMFBV&_nc_ht=scontent-waw1-1.xx&oh=8c47f7e3602b9a2bfefe9484035a2025&oe=5EF46B3C" alt="image error" />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Znajdziesz mnie na:</Typography>
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
                spacing={2}
              >
                <Grid item xs={2}>
                  <EmailIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1">
                    cuch.aleksander@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
            <Link href="https://www.facebook.com/Antyrecenzja/?modal=admin_todo_tour">
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={2}>
                  <FacebookIcon />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body1">
                    facebook.com
                  </Typography>
                </Grid>
              </Grid>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link href="https://www.instagram.com/aleksandercuch/">
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item xs={2}>
                    <InstagramIcon />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1">
                      instagram.com
                  </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link href="https://www.linkedin.com/in/aleksander-cuch-161118180/">
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item xs={2}>
                    <LinkedInIcon />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1">
                      linkedin.com
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <img className="photoPanelImage" src="https://cdn.pixabay.com/photo/2017/06/19/02/00/embroidery-2417899_960_720.png" alt="image error" />
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

export default PhotoPanel;
