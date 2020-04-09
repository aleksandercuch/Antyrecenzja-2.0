import React, { Component } from 'react'
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
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import moment from 'moment';

let Filter = require('bad-words');
let filter = new Filter({ placeHolder: '*' });

const initialState = {
  text: '',
  isLoading: false,
  showSuccess: false,
  enhancementedComments: [],
  username: ''
};

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  state = {
    text: '',
    showSuccess: false,
    enhancementedComments: [],
    commentsReady: false,
  };

  enhanceComments = () => {
    if (this.props.collection) {
      firebase.firestore().collection(this.props.collection).doc(this.props.docId).collection('comments')
        .orderBy("date", "desc")
        .get().then(items => {
          let comments = [];
          items.forEach(item => {
            let tempItem = item.data();
            tempItem.id = item.id;
            comments.push(tempItem)
          });
          this.setState({
            enhancementedComments: comments,
            commentsReady: true,
          })
        })
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.user.userId) {
      this.setState({
        isLoading: true
      }, () => {
        firebase.firestore().collection(this.props.collection).doc(this.props.docId).collection('comments').add({
          text: this.state.text,
          author: "Bogdan",
          date: new Date(),
        }).then(() => {
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
            this.enhanceComments();
          })

        })
      });
    } else {
      this.setState({
        isLoading: true
      }, () => {
        firebase.firestore().collection(this.props.collection).doc(this.props.docId).collection('comments').add({
          text: this.state.text,
          author: this.state.username,
          date: new Date(),
        }).then(() => {
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
            this.enhanceComments();
          })
        })
      });
    }
  };

  DeleteComment = async (commentId) => {
    firebase.firestore().collection(this.props.collection).doc(this.props.docId).collection('comments').doc(commentId).delete();
    this.enhanceComments();
  };

  componentDidMount() {
    this.enhanceComments();
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
                <CheckCircleIcon />
                Dodałeś komentarz!
              </Typography>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={() => {
                this.setState({
                  showSuccess: false
                });
              }}>
                <CloseIcon />
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
                  Komentarze:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {this.props.user.userId ? (
                  <ValidatorForm
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                  >
                    <TextValidator
                      label="Tekst"
                      onChange={this.handleChange}
                      name="text"
                      fullWidth
                      value={this.state.text}
                      validators={['required']}
                      errorMessages={['this field is required']}
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
                            Wyślij
                            </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </ValidatorForm>
                ) : (
                    <ValidatorForm
                      onSubmit={this.handleSubmit}
                      onError={errors => console.log(errors)}
                    >
                      <TextValidator
                        label="Nazwa użytkownika"
                        onChange={this.handleChange}
                        name="username"
                        fullWidth
                        value={this.state.username}
                        validators={['required']}
                        errorMessages={['this field is required']}
                      >
                      </TextValidator>
                      <TextValidator
                        label="Tekst"
                        onChange={this.handleChange}
                        name="text"
                        multiline={true}
                        rows={5}
                        rowsMax={5}
                        fullWidth
                        value={this.state.text}
                        validators={['required']}
                        errorMessages={['this field is required']}
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
                              Wyślij
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </ValidatorForm>
                  )}
              </Grid>
              <Grid item xs={12}>
                <hr />
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
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="flex-start"
                    >
                      <Grid item >
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="center"
                          spacing={2}
                        >
                          <Grid item>
                            <Avatar alt="avatar error" src={comment.userAvatar ? comment.userAvatar
                              : 'https://firebasestorage.googleapis.com/v0/b/forgeit-100.appspot.com/o/avatars%2Favatar-1577909_640%20(1).png?alt=media&token=8eb9002e-778f-4933-bb16-3ae67ddd9f53'} />
                          </Grid>
                          <Grid item>
                            {comment.author}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item >
                        <Typography style={{ 'color': 'black' }} variant="caption">
                          {moment(comment.date.toMillis()).format('LL')}
                        </Typography>
                        <Button
                        onClick={() => this.DeleteComment(
                          comment.id,
                        )}>
                          <CloseIcon />
                        </Button>
                      </Grid>
                    </Grid>
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
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <hr />
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
                  <ArrowBackIcon />
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  1
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  <ArrowForwardIcon />
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  {comments ? (<>Showing {Object.keys(comments).length} comments</>) : null}
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
