import { Component } from "react";
import React from "react";

import './home.scss';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';

class LastNews extends Component {

  state = {};

  render() {
    let items = this.props.items;
    let count = 0;
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
                {this.props.admin && (
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item xs={12}>
                        <Link to={{
                          pathname: `/add`,
                        }}
                          style={{ 'textDecoration': 'none' }}
                        >
                          <Button color="primary" variant="contained">Napisz coś nowego!</Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Divider variant="fullWidth" />
                </Grid>
                {items.map(item => {
                  count = count + 1;
                  return (
                    <Grid item xs={6} key={item.id} style={count === 1 ? { borderRight: '0.1em ridge rgba(0, 0, 0, .2)' } : {}}>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item>
                          <>
                            {item.type === "review" && (
                              <Typography align="center" variant="h6">
                                Recenzja
                              </Typography>
                            )}
                          </>
                          <>
                            {item.type === "story" && (
                              <Typography align="center" variant="h6">
                                Opowiadanie - {item.title}
                              </Typography>
                            )}
                          </>
                          <>
                            {item.type === "chapter" && (
                              <Typography align="center" variant="h6">
                                Ostatni Zwiastun - {item.title}
                              </Typography>
                            )}
                          </>
                        </Grid>
                        <Grid item md={8} xs={7}>
                          <Link to={{
                            pathname: `/tekst/${item.id}`,
                          }} >
                            <img src={item.photo} className="lastImages" alt="error" />
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link to={{
                            pathname: `/tekst/${item.id}`,
                          }}
                            style={{ 'textDecoration': 'none' }}
                          >
                            <Button variant="contained">Czytaj</Button>
                          </Link>
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



export default LastNews;
