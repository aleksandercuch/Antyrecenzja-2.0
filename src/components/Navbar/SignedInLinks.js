import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom"

import { signOut } from "../../store/actions/authActions";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';


const SignedInLinks = (props) => {
  return (
    <>
      <Hidden>
        <Hidden smDown>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
            spacing={1}
          >
            <Grid item>
              <Link to='/' onClick={props.signOut} style={{ 'textDecoration': 'none' }}>
                <Button style={{ 'textTransform': 'none' }}>
                  <ExitToAppIcon />
                  <Typography variant="h6">
                    Wyloguj
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item>
            <NavLink to="/logowanie" onClick={props.signOut} style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
              <ListItem button="true">
                <Box fontWeight="fontWeightBold">
                  Wyloguj
                </Box>
              </ListItem>
            </NavLink>
          </Grid>
        </Hidden>
      </Hidden>
    </>
  )
}



const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)