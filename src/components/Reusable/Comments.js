import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import firebase from "../../config/firebaseConfig";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from '@material-ui/icons/Close';
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import {Link} from "react-router-dom";

let Filter = require('bad-words');
let filter = new Filter({placeHolder: '*'});

const initialState = {
  text: '',
  isLoading: false,
  showSuccess: false,
  enhancementedComments: []
};

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  state = {
    text: '',
    isLoading: false,
    showSuccess: false,
    enhancementedComments: []
  };

  enhanceComments = () => {
    let enhancementedComments = [];
    let promises = [];
    if (this.props.comments) {
      Object.keys(this.props.comments).forEach((key, index) => {
        let comment = this.props.comments[key];
        let indexOfComment = this.state.enhancementedComments.findIndex(item => {
          return item.id === key
        });
        let avatarOfUser = get(this.state.enhancementedComments[indexOfComment], 'userAvatar');
        if (!avatarOfUser && avatarOfUser !== "") {
          promises.push(firebase.firestore().collection('users').doc(comment.authorId).get().then((user) => {
            let tempComment = cloneDeep(this.props.comments[key]);
            if (tempComment) {
              tempComment.userAvatar = user.data().avatar;
              tempComment.id = key;
              tempComment.text = filter.clean(tempComment.text ? tempComment.text : '');
              tempComment.isLiked = this.checkIsCommentLiked(tempComment.likedBy);
              enhancementedComments.push(tempComment);
            }
          }));
        } else {
          enhancementedComments.push(this.state.enhancementedComments[index]);
        }
      })
    }
    Promise.all(promises).then(() => {
      enhancementedComments = enhancementedComments.sort((a, b) => {
        return b.date.seconds - a.date.seconds
      });
      this.setState({
        enhancementedComments: enhancementedComments
      })
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  likeIt = async (commentId, likedBy, authorId, key) => {
    const newLikedBy = [...likedBy, this.props.user.userId];

    if (this.props.collection === 'books') {
      firebase.firestore().collection("users").doc(authorId).update({
        readPoints: firebase.firestore.FieldValue.increment(2)
      })
    }

    await firebase.firestore().collection(this.props.collection).doc(this.props.docId).collection('comments').doc(commentId).update({
      likedBy: newLikedBy
    });

    let enhancementedComments = this.state.enhancementedComments;
    enhancementedComments[key].isLiked = true;
    enhancementedComments[key].likedBy = newLikedBy;

    await this.setState({
      enhancementedComments: enhancementedComments
    })
  };

  DisLikeIt = async (commentId, likedBy, authorId, key) => {
    let tempLikedBy = likedBy;
    let index = tempLikedBy.findIndex(key => {
      return key === this.props.user.userId;
    });
    tempLikedBy.splice(index, 1);

    if (this.props.collection === 'books') {
      firebase.firestore().collection("users").doc(authorId).update({
        readPoints: firebase.firestore.FieldValue.increment(-2)
      })
    }
    await firebase.firestore().collection(this.props.collection).doc(this.props.docId).collection('comments').doc(commentId).update({
      likedBy: tempLikedBy
    });

    let enhancementedComments = this.state.enhancementedComments;
    enhancementedComments[key].isLiked = false;
    enhancementedComments[key].likedBy = tempLikedBy;

    await this.setState({
      enhancementedComments: enhancementedComments
    })
  };

  checkIsCommentLiked = (likedBy) => {
    let isLiked;
    isLiked = likedBy.find(key => {
      if (key === this.props.user.userId) {
        return true;
      }
    });
    return !!isLiked;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true
    }, () => {
      firebase.firestore().collection(this.props.collection).doc(this.props.docId).collection('comments').add({
        text: this.state.text,
        author: this.props.user.userNick,
        authorId: this.props.user.userId,
        date: new Date(),
        likedBy: []
      }).then(() => {
        if (this.props.collection === 'books') {
          firebase.firestore().collection("users").doc(this.props.book.authorId).update({
            writePoints: firebase.firestore.FieldValue.increment(3)
          });
          firebase.firestore().collection(this.props.collection).doc(this.props.docId).update({
            commentsAmount: firebase.firestore.FieldValue.increment(1)
          }).then(r => this.setState({
            isLoading: false,
            showSuccess: true,
            text: ''
          }, () => {
            setTimeout(() => {
              this.setState({
                showSuccess: false
              });
            }, 3000);
          }));
        } else {
          this.setState({
            isLoading: false,
            showSuccess: true,
            text: ''
          }, () => {
            setTimeout(() => {
              this.setState({
                showSuccess: false
              });
            }, 3000);
          })
        }
      })
    });
  };

  componentDidMount() {
    this.enhanceComments();
  }

  componentDidUpdate(prevState) {
    if (prevState.comments) {
      if (this.state.enhancementedComments.length !== Object.keys(prevState.comments).length) {
        this.enhanceComments();
      }
    } else if (this.props.comments) {
      this.enhanceComments();
    }
  }

  render() {
    let comments = this.state.enhancementedComments;

    return (
      <>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.showSuccess}
          autoHideDuration={3000}
        >
          <SnackbarContent
            message={
              <Typography>
                <CheckCircleIcon/>
                Comment added!
              </Typography>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={() => {
                this.setState({
                  showSuccess: false
                });
              }}>
                <CloseIcon/>
              </IconButton>,
            ]}
          />
        </Snackbar>
        <Card>
          <CardContent>
            <Grid
              container
              direction="row"
              spacing={2}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  Comments:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {this.props.user.userId ? this.state.isLoading ? (
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Box p={2}>
                      <CircularProgress/>
                    </Box>
                  </Grid>
                ) : (
                  <ValidatorForm
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                  >
                    <TextValidator
                      label="Text"
                      onChange={this.handleChange}
                      name="text"
                      fullWidth
                      value={this.state.text}
                      validators={['required', 'minStringLength:5', 'maxStringLength:100']}
                      errorMessages={['this field is required', 'min length is 5', 'max length is 100']}
                    >
                    </TextValidator>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <Box p={2}>
                          <Button type="submit" variant="contained" color="primary">
                            Comment
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </ValidatorForm>
                ) : (
                  <Typography variant='h5'>
                    You need to log in to be able to comment.
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <hr/>
              </Grid>
            </Grid>

            {comments && Object.keys(comments).map(key => {
              let comment = comments[key];
              return (
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  justify="flex-start"
                  alignItems="flex-start"
                  key={comment.id}
                >
                  <Grid item xs={2}>
                    <Link to={'/user/' + comment.authorId} color="inherit">
                      <Avatar alt="avatar error" src={comment.userAvatar ? comment.userAvatar
                        : 'https://firebasestorage.googleapis.com/v0/b/forgeit-100.appspot.com/o/avatars%2Favatar-1577909_640%20(1).png?alt=media&token=8eb9002e-778f-4933-bb16-3ae67ddd9f53'}/>
                    </Link>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h5" gutterBottom align='left'>
                      {comment.author}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      {comment.text}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        {this.props.user.userId && (
                          <>
                            {comment.isLiked ? (
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => this.DisLikeIt(
                                  comment.id,
                                  comment.likedBy,
                                  comment.authorId,
                                  key
                                )}>
                                Dislike
                              </Button>
                            ) : (
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() => this.likeIt(
                                  comment.id,
                                  comment.likedBy,
                                  comment.authorId,
                                  key
                                )}>
                                I like it!
                              </Button>
                            )}
                          </>
                        )}
                      </Grid>
                      <Grid item>
                        {comment.likedBy.length === 1 ? (
                          <Typography variant="body1" gutterBottom>
                            {comment.likedBy.length} like
                          </Typography>
                        ) : (
                          <Typography variant="body1" gutterBottom>
                            {comment.likedBy.length} likes
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <hr/>
                  </Grid>
                </Grid>
              )
            })}
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Button variant="contained" color="primary">
                  <ArrowBackIcon/>
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  1
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  <ArrowForwardIcon/>
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  {this.props.comments ? (<>Showing {Object.keys(this.props.comments).length} comments</>) : null}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </>
    )
  }
}


export default Comments;
