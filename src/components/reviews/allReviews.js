import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import './reviews.scss';
import { Link } from 'react-router-dom';

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
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={1}
                      >
                        <Grid item xs={5} >
                          <Link to={{
                            pathname: `/tekst/${review.id}`,
                            state: {
                              collection: "reviews",
                              id: `${review.id}`
                            }
                          }}
                            style={{ 'textDecoration': 'none' }}
                          >
                            <img style={{ borderRight: '0.1em ridge rgba(0, 0, 0, .05)', padding: '2em' }} className="reviewImage" src={review.photo} alt="error" />
                          </Link>
                        </Grid>
                        <Grid item xs={7}>
                          <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-end"
                            spacing={1}
                          >
                            <Grid item xs={12}>
                              <Typography variant="subtitle1">
                                {review.intro}
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <Box mr={10}>
                                <Link to={{
                                  pathname: `/tekst/${review.id}`,
                                  state: {
                                    collection: "reviews",
                                    id: `${review.id}`
                                  }
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
                          <Divider orientation='horizontal' />
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
