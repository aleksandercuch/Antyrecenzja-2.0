import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { signOut } from "../../store/actions/authActions";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const SignedInLinks = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="flex-end"
      spacing={1}
    >
      <Grid item>
        <Link to= '/' onClick={props.signOut} style={{ 'textDecoration': 'none' }}>
          <Button style={{ 'textTransform': 'none' }}>
            <ExitToAppIcon />
            <Typography variant="h6">
              Wyloguj
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}



const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)