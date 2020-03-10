import { Component } from "react";
import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import './reusable.scss';
import AntyrecenzjaImage from "../Reusable/AntyrecenzjaImage"
import { Paper, Typography, Divider } from "@material-ui/core";
import firebase from "../../config/firebaseConfig";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
import Comments from './Comments'

class TextTemplate extends Component {

  state = {
    items: [],
    itemReady: false,
    commentsReady: false,
    collection: '',
    comments: []
  }

  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push('/')
    } else {
      const { collection } = this.props.location.state
      const { id } = this.props.location.state
      firebase.firestore().collection(collection).doc(id).get().then(item => {
        if (!item.exists) {
          this.props.history.push('/');
        }
        let items = [];
        let tempItem = item.data();
        tempItem.id = item.id;
        items.push(tempItem)
        this.setState({
          collection: collection,
          items: items,
          itemReady: true
        })
      });
      firebase.firestore().collection(collection).doc(id).collection('comments')
        .orderBy("date", "desc")
        .get().then(items => {
          let comments = [];
          items.forEach(item => {
            let tempItem = item.data();
            tempItem.id = item.id;
            comments.push(tempItem)
          });
          this.setState({
            comments: comments,
            commentsReady: true,
          })
        })

    }
  }
  render() {
    let items = this.state.items;
    return (
      <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={12}>
            {this.state.itemReady ? (
              <Box>
                <>
                  {items.map(item => {
                    return (
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
                        <Grid item xs={9}>
                          <Paper className="padding">
                            <Grid
                              container
                              direction="row"
                              justify="flex-start"
                              alignItems="flex-start"
                              spacing={2}
                            >
                              <Grid item xs={12}>
                                <Grid
                                  container
                                  direction="column"
                                  justify="flex-start"
                                  alignItems="center"
                                >
                                  <Grid item xs={12}>
                                    <Typography variant="h5">
                                      {item.title}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography variant="h5">
                                      {item.author}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <img className="reviewImage" src={item ? item.photo : "https://cdn.pixabay.com/photo/2019/07/21/13/11/portrait-4352745_960_720.jpg"} />
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Link to={{
                                      pathname: `/edycja/${item.id}`,
                                      state: {
                                        collection: `${this.state.collection}`,
                                        id: `${item.id}`,
                                        title: `${item.title}`,
                                        content: `${item.content}`,
                                        intro: `${item.intro}`,
                                        photo: `${item.photo}`,
                                        author: `${item.author}`,
                                      }
                                    }}
                                      style={{ 'textDecoration': 'none' }}
                                    >
                                      <Button variant="contained" color="primary">
                                        Edytuj
                                </Button>
                                    </Link>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={12}>
                                <hr />
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
                                    <Typography variant="h6" align="center">
                                      {item.type} {item.number}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography variant="subtitle1">
                                      <Markup content={item.content} />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                      </Grid>
                    )
                  })}
                </>
              </Box>
            ) : (
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
              )}
          </Grid>
          {this.state.commentsReady ? (
            <Grid item xs={12}>
             {/* <Comments
                comments={this.state.comments}
                user={{ userId: this.props.auth.uid, userNick: this.props.nick }}
                docId={this.props.match.params.id}
                collection={this.state.collection}
              />*/}
            </Grid>
          ) : (
              <Grid item xs={12}>
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
              </Grid>
            )}
        </Grid>


      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    nick: state.firebase.profile.nick,
    profile: state.firebase.profile,
  }
};

export default TextTemplate;
