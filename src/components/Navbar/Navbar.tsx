import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
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
                <Link to="/">
                  <Button style={{ 'textDecoration': 'none', 'textTransform': 'none' }}>
                    <Typography variant="h5">
                      Antyrecenzja
                    </Typography>
                    <img src="https://cdn.pixabay.com/photo/2016/10/18/19/46/vintage-1751222_960_720.png" alt="image error" height="42" width="42" />
                  </Button>
                </Link>
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
                    <Link to="/">
                      <Button style={{ 'textDecoration': 'none' }}>
                        <Typography variant="h6">
                          Strona główna
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/omnie">
                      <Button style={{ 'textDecoration': 'none' }}>
                        <Typography variant="h6">
                          O mnie
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/teksty">
                      <Button style={{ 'textDecoration': 'none' }}>
                        <Typography variant="h6">
                          Teksty
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/recenzje">
                      <Button style={{ 'textDecoration': 'none' }}>
                        <Typography variant="h6">
                          Recenzje
                        </Typography>
                      </Button>
                    </Link>
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
                    <Link to="/rejestracja">
                      <Button style={{ 'textDecoration': 'none', 'textTransform': 'none' }}>
                        <PersonIcon />
                        <Typography variant="h6">
                          Rejestracja
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/logowanie">
                      <Button style={{ 'textDecoration': 'none', 'textTransform': 'none' }}>
                        <ExitToAppIcon />
                        <Typography variant="h6">
                          Logowanie
                        </Typography>
                      </Button>
                    </Link>
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
