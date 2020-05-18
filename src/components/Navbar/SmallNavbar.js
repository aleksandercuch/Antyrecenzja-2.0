import React from 'react';
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <NavLink to="/" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
          <ListItem button="true">
            <Box fontWeight="fontWeightBold">
              Strona Główna
            </Box>
          </ListItem>
        </NavLink>
        <NavLink to="/omnie" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
          <ListItem button="true">
            <Box fontWeight="fontWeightBold">
              O mnie
            </Box>
          </ListItem>
        </NavLink>
        <ListItem button="true">
          <Box fontWeight="fontWeightBold">
            <NavLink to="/teksty" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
              Teksty
            </NavLink>
          </Box>
        </ListItem>
        <NavLink to="/recenzje" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
          <ListItem button="true">
            <Box fontWeight="fontWeightBold">
              Recenzje
            </Box>
          </ListItem>
        </NavLink>
        <hr />
        <NavLink to="/logowanie" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
          <ListItem button="true">
            <Box fontWeight="fontWeightBold">
              Logowanie
            </Box>
          </ListItem>
        </NavLink>
        <NavLink to="/rejestracja" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
          <ListItem button="true">
            <Box fontWeight="fontWeightBold">
              Rejestracja
            </Box>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('top', true)}><MenuIcon /></Button>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
    </div>
  );
}
