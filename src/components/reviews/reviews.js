import { Component } from "react";
import React from "react";
import { connect } from 'react-redux';
import { compose } from "redux";

import AllReviews from "./allReviews"
import NextToRead from "./nextToRead"
import './reviews.scss';
import AntyrecenzjaImage from "../Reusable/AntyrecenzjaImage"
import firebase from "../../config/firebaseConfig";

import Hidden from '@material-ui/core/Hidden';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Description from "../home/Description"
import CircularProgress from "@material-ui/core/CircularProgress";

class Reviews extends Component {

  state = {
    filteredItems: [],
    loading: true,
    allItems: [],
    last: null,
  };

  componentDidMount() {
    firebase.firestore().collection('texts')
      .where("type", "==", "review")
      .orderBy("date", "desc")
      .get().then(items => {
        let filteredItems = [];
        let last = items.docs[items.docs.length - 1];
        items.forEach(item => {
          let tempItem = item.data();
          tempItem.id = item.id;
          filteredItems.push(tempItem)
        });
        this.setState({
          filteredItems: filteredItems,
          loading: false,
          allItems: this.state.allItems.concat(filteredItems),
          last: last
        })
      })
  }

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
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <AntyrecenzjaImage />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={10}>
              <>
                {this.state.loading ? (
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Box p={2}>
                      <CircularProgress />
                    </Box>
                  </Grid>
                ) : (
                    <AllReviews
                      reviews={this.state.allItems}
                    />
                  )}
              </>
            </Grid>
            <Grid item md={3} xs={10}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={8}
              >
                <Hidden xsDown>
                  <Grid item xs={12}>
                    <Description />
                  </Grid>
                </Hidden>
                <Grid item xs={12}>
                  <>
                    {this.state.loading ? (
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                      >
                        <Box p={2}>
                          <CircularProgress />
                        </Box>
                      </Grid>
                    ) : (
                        <NextToRead
                          admin={this.props.admin}
                        />
                      )}
                  </>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    admin: state.firebase.profile.admin,
    profile: state.firebase.profile,
  }
};


export default compose(
  connect(mapStateToProps)
)(Reviews);
