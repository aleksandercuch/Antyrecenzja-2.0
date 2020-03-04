import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { connect } from 'react-redux';
import './home.scss';
import { compose } from "redux";
import LastNews from "./LastNews"
import Description from "./Description"
import Carousel from "./Carousel"
import Posts from "./Posts"
import CircularProgress from "@material-ui/core/CircularProgress";
import firebase from "../../config/firebaseConfig";


class Home extends Component {

  state = {
    filteredPosts: [],
    loading: true,
    allPosts: [],
    last: null,
  };

  componentDidMount() {
    firebase.firestore().collection('posts')
      .orderBy("date", "desc")
      .get().then(posts => {
        let filteredPosts = [];
        let last = posts.docs[posts.docs.length - 1];
        posts.forEach(post => {
          let tempPost = post.data();
          tempPost.id = post.id;
          filteredPosts.push(tempPost)
        });
        this.setState({
          filteredPosts: filteredPosts,
          loading: false,
          allPosts: this.state.allPosts.concat(filteredPosts),
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
                      posts={this.props.posts}
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
    auth: state.firebase.auth
  }
};


export default compose(
  connect(mapStateToProps)
)(Home);

