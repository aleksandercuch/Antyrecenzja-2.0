import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Description from "../home/Description"
import MyWorks from "./myWorks"
import './stories.scss';
import AntyrecenzjaImage from "../Reusable/AntyrecenzjaImage"
import firebase from "../../config/firebaseConfig";
import CircularProgress from "@material-ui/core/CircularProgress";

class Stories extends Component {

  state = {
    filteredChapters: [],
    filteredOthers: [],
    loading: true,
    allPosts: [],
    last: null,
  };

  componentDidMount() {
    firebase.firestore().collection('chapters')
      .orderBy("number")
      .get().then(items => {
        let filteredChapters = [];
        let last = items.docs[items.docs.length - 1];
        items.forEach(item => {
          let tempItem = item.data();
          tempItem.id = item.id;
          filteredChapters.push(tempItem)
        });
        firebase.firestore().collection('others')
          .orderBy("date", "desc")
          .get().then(items => {
            let filteredOthers = [];
            let last = items.docs[items.docs.length - 1];
            items.forEach(item => {
              let tempItem = item.data();
              tempItem.id = item.id;
              filteredOthers.push(tempItem)
            });
            this.setState({
              filteredOthers: filteredOthers,
              filteredChapters: filteredChapters,
              loading: false,
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
                    <MyWorks
                      chapters={this.state.filteredChapters}
                      others={this.state.filteredOthers}
                    />
                  )}
              </>
            </Grid>
            <Grid item xs={3}>
              <Description />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default Stories;
