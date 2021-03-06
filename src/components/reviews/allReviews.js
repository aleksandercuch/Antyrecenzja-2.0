import { Component } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';

import './reviews.scss';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from '@material-ui/core/Hidden';

class AllReviews extends Component {

  render() {
    let reviews = this.props.reviews;
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
                {reviews.map(review => {
                  return (
                    <Grid item xs={12} key={review.id}>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={1}
                      >
                        <Grid item sm={5} xs={12}>
                          <Link to={{
                            pathname: `/tekst/${review.id}`,
                          }}
                            style={{ 'textDecoration': 'none' }}
                          >
                            <Hidden xsDown>
                              <img style={{ borderRight: '0.1em ridge rgba(0, 0, 0, .09)', padding: '2em' }} className="reviewImage" src={review.photo} alt="error" />
                            </Hidden>
                            <Hidden smUp>
                              <img style={{ padding: '2em' }} className="reviewImageSmall" src={review.photo} alt="error" />
                            </Hidden>
                          </Link>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                          <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-end"
                            spacing={1}
                          >
                            <Grid item xs={12}>
                              <Typography variant="subtitle1">
                                <Markup content={review.intro} />
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <Box mr={10}>
                                <Link to={{
                                  pathname: `/tekst/${review.id}`,
                                }}
                                  style={{ 'textDecoration': 'none' }}
                                >
                                  <Button variant="contained">Czytaj</Button>
                                </Link>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <hr />
                        </Grid>
                      </Grid>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

export default AllReviews;
