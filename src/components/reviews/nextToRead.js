import { Component } from "react";
import React from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import firebase from "../../config/firebaseConfig";
import './reviews.scss';

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress";

class NextToRead extends Component {

  state = {
    itemsReady: false,
    enhancementedItems: [],
    url: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      itemsReady: false
    }, () => {
      firebase.firestore().collection("toRead").add({
        photo: this.state.url,
        date: new Date(),
      }).then(() => {
        this.setState({
          url: ''
        }, () => {
          this.enchanceItems();
        })
      })
    })
  }
  enchanceItems = () => {
    firebase.firestore().collection('toRead')
      .orderBy("date")
      .get().then(items => {
        let nextToRead = [];
        items.forEach(item => {
          let tempItem = item.data();
          tempItem.id = item.id;
          nextToRead.push(tempItem)
        });
        this.setState({
          enhancementedItems: nextToRead,
          itemsReady: true,
        })
      })
  }

  deleteItem = (event, id) => {
    event.preventDefault();
    this.setState({
      itemsReady: false
    }, () => {
      firebase.firestore().collection("toRead").doc(id).delete().then(() => {
        this.enchanceItems();
      })
    }
    )
  }

  componentDidMount() {
    this.enchanceItems();
  }

  render() {
    return (
      <>
        <Paper>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                W kolejce do recenzji
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                <hr />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {this.props.admin && (
                <ValidatorForm
                  onSubmit={this.handleSubmit}
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
                        variant="outlined"
                        label="Url"
                        onChange={this.handleChange}
                        name="url"
                        fullWidth
                        value={this.state.url}
                        validators={['required']}
                        errorMessages={['this field is required']}
                      />
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
            {this.state.itemsReady ? (
              <>
                {this.state.enhancementedItems.length === 0 ? (
                  <>
                    <Grid item>
                      <Typography variant="h6">
                        Wkrótce pojawi się tu coś ciekawego ;)
                      </Typography>
                    </Grid>
                  </>
                ) : (
                    <>
                      {this.state.enhancementedItems.map(item => {
                        return (
                          <>
                            <Grid item xs={12} key={item.id}>
                              <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={3}
                              >
                                <Grid item xs={7}>
                                  <img className="reviewImage" src={item.photo} alt="error" />
                                </Grid>
                              </Grid>
                            </Grid>
                            {this.props.admin && (
                              <Grid item>
                                <Button variant="contained" color="secondary" onClick={(event) => this.deleteItem(event, item.id)}>
                                  Usuń
                                </Button>
                              </Grid>
                            )}
                            <Grid item xs={12}>
                              <Typography variant="h5">
                                <hr />
                              </Typography>
                            </Grid>
                          </>
                        )
                      })}
                    </>
                  )}
              </>
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
        </Paper>
      </>
    );
  }
}

export default NextToRead;
