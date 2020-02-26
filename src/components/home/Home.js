import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { connect } from 'react-redux';
import './home.scss';
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import LastNews from "./LastNews"
import Description from "./Description"
import Carousel from "./Carousel"
import Posts from "./Posts"

class Home extends Component {

  state = {};

  render() {
    return (
      <>
        <Box>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12}>
              <Carousel />
            </Grid>
            <Grid item xs={6}>
              <LastNews
              />
            </Grid>
            <Grid item xs={3}>
              <Description />
            </Grid>
            <Grid item xs={9}>
              <Posts />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.firebase.auth.isEmpty
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([])
)(Home);
