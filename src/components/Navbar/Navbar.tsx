import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

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
              <Grid item>
                <NavLink to="/" style={{ 'textDecoration': 'none' }}>
                  <Button style={{ 'textTransform': 'none' }}>
                    <Typography variant="h5">
                      Antyrecenzja
                    </Typography>
                    <img src="https://cdn.pixabay.com/photo/2016/10/18/19/46/vintage-1751222_960_720.png" alt="image error" height="42" width="42" />
                  </Button>
                </NavLink>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
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
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <NavLink to="/rejestracja" style={{ 'textDecoration': 'none' }}>
                      <Button style={{ 'textTransform': 'none' }}>
                        <PersonIcon />
                        <Typography variant="h6">
                          Rejestracja
                        </Typography>
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/logowanie" style={{ 'textDecoration': 'none' }}>
                      <Button style={{ 'textTransform': 'none' }}>
                        <ExitToAppIcon />
                        <Typography variant="h6">
                          Logowanie
                        </Typography>
                      </Button>
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
    )
  }
}

export default Navbar;
