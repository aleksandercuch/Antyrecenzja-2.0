import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TextValidator, ValidatorForm, SelectValidator } from "react-material-ui-form-validator";
import Paper from "@material-ui/core/Paper";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import Button from "@material-ui/core/Button";
import firebase from "../../config/firebaseConfig";


import './uploadCHapter.scss'

class UploadText extends Component {

  state = {
    title: '',
    content: '',
    intro: '',
    url: '',
    author: '',
    type: '',
    showSuccess: false,
    isLoading: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true
    }, () => {
      firebase.firestore().collection("texts").add({
        content: this.state.content,
        type: this.state.type,
        photo: this.state.url,
        title: this.state.title,
        intro: this.state.intro,
        author: this.state.author,
        date: new Date()
      }).then(() => {
        this.setState({
          isLoading: false,
          showSuccess: true
        }, () => {
          setTimeout(() => {
            this.setState({
              showSuccess: false
            });
          }, 3000);
        })
      })
    });
  };

  handleFormError = () => {
    let words = this.state.content.replace(/<[^>]*>/g, " ");
    words = words.replace(/\s+/g, ' ').trim();
    words = words.split(" ").length;

  };

  render() {
    return (
      <Paper>
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
                Dodałeś tekst
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
        <Box pt={2}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography variant='h4' component='p' align='center'>
                Dodaj tekst
              </Typography>
            </Grid>
            <Grid item xs={10} sm={7}>
              {this.state.isLoading ? (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12}>
                    <Typography variant='h5' component='p' align='center'>
                      Dodawanie...
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <Box p={2}>
                          <CircularProgress />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box p={2}>
                      <LinearProgress variant="determinate" value={this.state.progress} />
                    </Box>
                  </Grid>
                </Grid>
              ) : (
                  <ValidatorForm
                    onSubmit={this.handleSubmit}
                    onError={this.handleFormError}
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item xs={12}>
                        <TextValidator
                          label="Tytuł"
                          onChange={this.handleChange}
                          name="title"
                          fullWidth
                          value={this.state.title}
                          validators={['required']}
                          errorMessages={['this field is required']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          label="Url"
                          onChange={this.handleChange}
                          name="url"
                          fullWidth
                          value={this.state.url}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          label="Rodzaj tekstu (post/review/chapter/story)"
                          onChange={this.handleChange}
                          name="type"
                          fullWidth
                          value={this.state.type}
                          validators={['required']}
                          errorMessages={['this field is required']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          label="Autor"
                          onChange={this.handleChange}
                          name="author"
                          fullWidth
                          value={this.state.author}
                          validators={['required']}
                          errorMessages={['this field is required']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          label="Intro"
                          onChange={this.handleChange}
                          name="intro"
                          multiline={true}
                          rows={5}
                          rowsMax={5}
                          fullWidth
                          value={this.state.intro}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box pt={2}>
                          <Typography variant='body2' component='p'>
                            Kontent
                        </Typography>
                          <Paper className={this.state.descriptionContainerClass}>
                            <CKEditor
                              editor={DecoupledEditor}
                              onInit={editor => {
                                editor.ui.getEditableElement().parentElement.insertBefore(
                                  editor.ui.view.toolbar.element,
                                  editor.ui.getEditableElement()
                                );
                              }}
                              config={{
                                'placeholder': 'It started at the inn...'
                              }}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                this.setState({
                                  content: data
                                }, () => {
                                  this.handleFormError();
                                });
                              }}
                            />
                          </Paper>
                          
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
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
                                Dodaj
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ValidatorForm>
                )}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    )
  }
}

export default UploadText;
