import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { connect } from 'react-redux';
import { compose } from "redux";
import './home.scss';

import LastNews from "./LastNews"
import Description from "./Description"
import Carousel from "./Carousel"
import Posts from "./Posts"
import CircularProgress from "@material-ui/core/CircularProgress";
import firebase from "../../config/firebaseConfig";


class Home extends Component {

  state = {
    filteredExpoItems: [],
    filteredPosts: [],
    loading: true,
    allPosts: [],
    last: null,
  };

  componentDidMount() {
      firebase.firestore().collection('texts')
      .where("type", "==", "post")
      .orderBy("date", "desc")
      .get().then(posts => {
        let filteredPosts = [];
        posts.forEach(post => {
          let tempPost = post.data();
          tempPost.id = post.id;
          filteredPosts.push(tempPost)
        });
          firebase.firestore().collection('texts')
          .where("newsTable", "==", true)
          .orderBy("date", "desc")
          .limit(2)
          .get().then(items => {
            let filteredItems = [];
            items.forEach(item => {
              let tempItem= item.data();
              tempItem.id = item.id;
              filteredItems.push(tempItem)
            });
                this.setState({
                  filteredExpoItems: filteredItems,
                  filteredPosts: filteredPosts,
                  loading: false,
                  allPosts: this.state.allPosts.concat(filteredPosts),
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
              <Carousel />
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
                    <LastNews
                      items={this.state.filteredExpoItems}
                      admin={this.props.admin}
                    />
                  )}
              </>
            </Grid>
            <Grid item md={3} xs={10}>
              <Description />
            </Grid>
            <Grid item md={9} xs={10}>
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
                    <Posts
                      posts={this.state.allPosts}
                    />
                  )}
              </>
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
)(Home);

