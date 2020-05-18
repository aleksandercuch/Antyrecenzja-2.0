import { Component } from "react";
import React from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { compose } from "redux";

import './control.scss';
import firebase from "../../config/firebaseConfig";
import NewUsers from "./NewUsers"
import Items from "./Items"

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

class Control extends Component {

  state = {
    filteredItems: [],
    filteredUsers: [],
    loading: true,
  };

  enchanceTexts = async () => {
    await this.setState({
      filteredItems: [],
      loading: true,
    }); 
    firebase.firestore().collection('texts')
    .where("newComments", "==", true)
    .orderBy("date", "desc")
    .get().then(items => {
      let filteredItems = [];
      items.forEach(item => {
        let tempItem = item.data();
        tempItem.id = item.id;
        filteredItems.push(tempItem)
      });
      this.setState({
        filteredItems: filteredItems,
        loading: false,
      })
    })
  }

  enchanceNewUsers = async () => {
    await this.setState({
      filteredUsers: [],
      loading: true,
    });
    firebase.firestore().collection('users')
    .where("newUser", "==", true)
    .get().then(items => {
      let filteredItems = [];
      items.forEach(item => {
        let tempItem = item.data();
        tempItem.id = item.id;
        filteredItems.push(tempItem)
      });
      this.setState({
        filteredUsers: filteredItems,
        loading: false,
      })
    })
  }

  componentDidMount() {
    this.enchanceTexts();
    this.enchanceNewUsers();
  }

  render() {
    const { admin } = this.props;

    if (!admin) return <Redirect to='/' />;
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
            <Grid item xs={4}>
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
                    <Items
                      items={this.state.filteredItems}
                      enchanceTexts={this.enchanceTexts}
                    />
                  )}
              </>
            </Grid>
            <Grid item xs={3}>
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
                    <NewUsers
                      items={this.state.filteredUsers}
                      enchanceNewUsers={this.enchanceNewUsers}
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
)(Control);

