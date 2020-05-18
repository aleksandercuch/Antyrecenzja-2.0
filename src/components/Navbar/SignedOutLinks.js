import React from 'react'
import { NavLink } from 'react-router-dom'

import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const SignedOutLinks = () => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="flex-end"
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
  )
}

export default SignedOutLinks