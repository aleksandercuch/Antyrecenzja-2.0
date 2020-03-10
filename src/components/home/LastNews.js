import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import './home.scss';
import { Link } from 'react-router-dom'

class Posts extends Component {

  state = {};

  render() {
    let chapters = this.props.chapters;
    let reviews = this.props.reviews;
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
                  {reviews.map(review => {
                    return (
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
                        <Grid item xs={12}>
                          <Link to={{
                            pathname: `/tekst/${review.id}`,
                            state: {
                              collection: "reviews",
                              id: `${review.id}`
                            }
                          }} >
                            <img src={review.photo} className="lastImages" alt="no image" />
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                      </Grid>
                    )
                  })}
                </Grid>
                <Grid item xs={6} style={{ padding: '0.5em' }}>
                  {chapters.map(chapter => {
                    return (
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item>
                          <Typography align="center" variant="h6">
                            Ostatni Zwiastun - rozdział {chapter.number}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Link to={{
                            pathname: `/tekst/${chapter.id}`,
                            state: {
                              collection: "chapters",
                              id: `${chapter.id}`
                            }
                          }}
                          >
                            <img src={chapter.photo} className="lastImages" alt="no image" />
                          </Link>
                        </Grid>
                        <Link to={{
                          pathname: `/tekst/${chapter.id}`,
                          state: {
                            collection: "chapters",
                            id: `${chapter.id}`
                          }
                        }}
                          style={{ 'textDecoration': 'none' }}
                        >
                          <Button variant="contained">Czytaj</Button>
                        </Link>
                      </Grid>
                    )
                  })}
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
