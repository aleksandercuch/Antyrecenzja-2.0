import React, { Component } from 'react'
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

import SmallNavbar from "./SmallNavbar";
import SignOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import {grey} from "@material-ui/core/colors";

class Navbar extends Component {
  render() {
    let colour = grey[200];
    return (
      <>
        <Paper square="false" className="navbar" style={{ 'backgroundColor': `${colour}` }}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={3} xs={11}>
                <NavLink to="/" style={{ 'textDecoration': 'none' }}>
                  <Button style={{ 'textTransform': 'none' }}>
                    <Typography variant="h5">
                      Antyrecenzja
                    </Typography>
                    <img src="https://firebasestorage.googleapis.com/v0/b/antyrecenzja-a7320.appspot.com/o/images%2Fminiature.webp?alt=media&token=909a629a-d5f5-466e-81e5-4a7cfa74bdd1" alt="error" height="42" width="42" />
                  </Button>
                </NavLink>
              </Grid>
              <Hidden>
                <Hidden smDown>
                  <Grid item lg={6} md={7} xs={6}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={3}
                    >
                      <Grid item >
                        <NavLink to="/" style={{ 'textDecoration': 'none' }}>
                          <Button style={{ 'textTransform': 'none' }}>
                            <Typography variant="h6">
                              Strona główna
                            </Typography>
                          </Button>
                        </NavLink>
                      </Grid>
                      <Grid item>
                        <NavLink to="/omnie" style={{ 'textDecoration': 'none' }}>
                          <Button style={{ 'textTransform': 'none' }}>
                            <Typography variant="h6">
                              O mnie
                            </Typography>
                          </Button>
                        </NavLink>
                      </Grid>
                      <Grid item>
                        <NavLink to="/teksty" style={{ 'textDecoration': 'none' }}>
                          <Button style={{ 'textTransform': 'none' }}>
                            <Typography variant="h6">
                              Teksty
                            </Typography>
                          </Button>
                        </NavLink>
                      </Grid>
                      <Grid item>
                        <NavLink to="/recenzje" style={{ 'textDecoration': 'none' }}>
                          <Button style={{ 'textTransform': 'none' }}>
                            <Typography variant="h6">
                              Recenzje
                            </Typography>
                          </Button>
                        </NavLink>
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Hidden>
              <Hidden>
                <Hidden smDown>
                  <Grid item lg={3} md={2} sm={3}>
                    {!this.props.auth.uid ?
                      <SignOutLinks />
                      :
                      <SignedInLinks />
                    }
                  </Grid>
                </Hidden>
              </Hidden>
              <Hidden>
                <Hidden mdUp>
                  <Grid item xs={1}>
                    <SmallNavbar 
                      auth={this.props.auth.uid}
                    />
                  </Grid>
                </Hidden>
              </Hidden>
            </Grid>
          </Toolbar>
        </Paper>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
};

export default connect(mapStateToProps, null)(Navbar);
