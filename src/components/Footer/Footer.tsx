import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Footer extends Component {
  render() {
    return (
      <>
        <Box mt={5}>
          <AppBar className="navbar" position="static" color="default">
            <Toolbar>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12}>
                  <Box mt={3}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={10}
                    >
                      <Grid item>
                        <Link href="https://www.facebook.com/Antyrecenzja/?modal=admin_todo_tour" style={{ 'textDecoration': 'none' }}>
                          <Button style={{ 'textTransform': 'none' }}>
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
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="https://www.instagram.com/aleksandercuch/" style={{ 'textDecoration': 'none' }}>
                          <Button style={{ 'textTransform': 'none' }}>
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
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="https://www.linkedin.com/in/aleksander-cuch-161118180/" style={{ 'textDecoration': 'none' }}>
                          <Button style={{ 'textTransform': 'none' }}>
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
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <hr />
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Box mb={4}>
                        <Typography variant="body1">Copyright© 2019. All rights reserved.</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    )
  }
}

export default Footer;
