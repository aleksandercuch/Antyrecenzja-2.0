import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Description from "../home/Description"
import AllReviews from "./allReviews"
import NextToRead from "./nextToRead"
import './reviews.scss';
import AntyrecenzjaImage from "../Reusable/AntyrecenzjaImage"
import { connect } from 'react-redux';
import { compose } from "redux";
import firebase from "../../config/firebaseConfig";
import CircularProgress from "@material-ui/core/CircularProgress";

class Reviews extends Component {

  state = {
    nextToRead: [],
    filteredItems: [],
    loading: true,
    allItems: [],
    last: null,
  };

  componentDidMount() {
    firebase.firestore().collection('reviews')
      .orderBy("date", "desc")
      .get().then(items => {
        let filteredItems = [];
        let last = items.docs[items.docs.length - 1];
        items.forEach(item => {
          let tempItem = item.data();
          tempItem.id = item.id;
          filteredItems.push(tempItem)
        });
        firebase.firestore().collection('nextToRead')
          .orderBy("date", "desc")
          .get().then(items => {
            let nextToRead = [];
            let last = items.docs[items.docs.length - 1];
            items.forEach(item => {
              let tempItem = item.data();
              tempItem.id = item.id;
              nextToRead.push(tempItem)
            });
            this.setState({
              nextToRead: nextToRead,
              filteredItems: filteredItems,
              loading: false,
              allItems: this.state.allItems.concat(filteredItems),
              last: last
            })
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
            <Grid item xs={6}>
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
            <Grid item xs={3}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={8}
              >
                <Grid item xs={12}>
                  <Description />
                </Grid>
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
                          nextToRead={this.state.nextToRead}
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
    auth: state.firebase.auth
  }
};


export default compose(
  connect(mapStateToProps)
)(Reviews);
