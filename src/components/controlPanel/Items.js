import { Component } from "react";
import React from "react";
import { Link } from 'react-router-dom';

import './control.scss';
import firebase from "../../config/firebaseConfig";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

class Items extends Component {

  checkComments = (event, id) => {
    event.preventDefault();
    firebase.firestore().collection("texts").doc(id).update({
      newComments: false
    }).then(() => {
      this.props.enchanceTexts();
    })
  }

  render() {
    let items = this.props.items;
    return (
      <Box mt={5}>
        <Paper className="padding">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              <Typography style={{ 'color': 'black' }} align="center" variant="h5">Nowe Komentarze </Typography>
            </Grid>
            {items.length === 0 ? (
              <Grid item xs={12}>
                <Typography style={{ 'color': 'black' }} align="center" variant="h6">Brak</Typography>
              </Grid>
            ) : (
                <>
                  {items.map(item => {
                    return (
                      <Grid item xs={6} key={item.id}>
                        <Grid
                          container
                          direction="column"
                          justify="center"
                          alignItems="center"
                          className="padding"
                        >
                          <Grid item xs={12}>
                            <Link to={{
                              pathname: `/tekst/${item.id}`,
                            }}
                            >
                              <img className="postImg" src={item.photo} alt="error" />
                            </Link>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography style={{ 'color': 'black' }} variant="body1">{item.type} - {item.title} </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Button variant="contained" color="secondary" onClick={(event) => this.checkComments(event, item.id)}>
                              Ukryj
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    )
                  })}
                </>
              )}
          </Grid>
        </Paper>
      </Box>
    );
  }
}

export default Items;

