import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Navbar.scss';
import { connect } from "react-redux";
import SignOutLinks from "./SignedOutLinks"
import SignedInLinks from "./SignedInLinks"
import { NavLink } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import SmallNavbar from "./SmallNavbar"

class Navbar extends Component {
  render() {
    return (
      <>
        <AppBar className="navbar" position="static" color="default">
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
                    <img src="https://cdn.pixabay.com/photo/2016/10/18/19/46/vintage-1751222_960_720.png" alt="image error" height="42" width="42" />
                  </Button>
                </NavLink>
              </Grid>

              <Hidden>
                <Hidden smDown>
                  <Grid item xs={6}>
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
                  <Grid item xs={3}>
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
                    <SmallNavbar />
                  </Grid>
                </Hidden>
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
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
