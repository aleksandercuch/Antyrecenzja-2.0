import { Component } from "react";
import React from "react";

import './control.scss';
import firebase from "../../config/firebaseConfig";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';

class NewUsers extends Component {

  hideUser = (event, id) => {
    event.preventDefault();
    firebase.firestore().collection("users").doc(id).update({
      newUser: false
    }).then(() => {
      this.props.enchanceNewUsers();
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
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography style={{ 'color': 'black' }} align="center" variant="h5">Nowi Użytkownicy </Typography>
            </Grid>
            {items.length === 0 ? (
              <Grid item xs={12}>
                <Typography style={{ 'color': 'black' }} align="center" variant="h6">Brak</Typography>
              </Grid>
            ) : (
                <>
                  {items.map(item => {
                    return (
                      <Grid item xs={12} key={item.id} >
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="center"
                        >
                          <Grid item xs={1}>
                            <Avatar alt="avatar error" src='https://cdn.pixabay.com/photo/2017/01/26/14/52/alphabet-2010751_960_720.png' />
                          </Grid>
                          <Grid item xs={8}>
                            <Typography style={{ 'color': 'black' }} align="center" variant="body1">{item.nick}</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Button variant="contained" color="secondary"  onClick={(event) => this.hideUser(event, item.id)}>
                              Ukryj
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    )
                  })}
                </>
              )
            }
          </Grid>
        </Paper>
      </Box >
    );
  }
}

export default NewUsers;

