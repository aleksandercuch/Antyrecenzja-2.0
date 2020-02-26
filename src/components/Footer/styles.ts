import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {grey, indigo} from "@material-ui/core/colors";

const footerBackgroundColor =  indigo;
const linkHoverColor = grey;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      width: '100%',
      position: 'relative',
      bottom: 0
    },
    footerTopSide: {
      paddingTop: '10px',
      paddingBottom: '10px',
      backgroundColor: footerBackgroundColor["600"],
      [theme.breakpoints.only('xs')]: {
        paddingTop: '5px',
        paddingBottom: '5px'
      }
    },
    linksList: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row'
      }
    },
    linksListText: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: 'white',
      fontSize: '0.8rem',
      padding: '10px',
      transition: theme.transitions.create(
        ['background-color', 'border-radius', 'color'],
        {
          duration: theme.transitions.duration.complex,
          easing: theme.transitions.easing.easeInOut
        }
      ),
      '&:hover': {
        color: linkHoverColor["500"],
        backgroundColor: 'rgba(40, 40, 40, 0.5)',
        borderRadius: '10px'
      },
      '&:active': {
        backgroundColor: 'rgba(40, 40, 40, 0.3)'
      },
      [theme.breakpoints.up('sm')]: {
        '&:nth-child(n+2):nth-last-child(n+2)': {
          marginLeft: '20px',
          marginRight: '20px'
        },
        '&:first-child': {
          marginRight: '20px'
        },
        '&:last-child': {
          marginLeft: '20px'
        }
      }
    },
    footerBottomSide: {
      backgroundColor: footerBackgroundColor["700"],
      paddingTop: '10px',
      paddingBottom: '10px',
      display: 'flex',
      justifyContent: 'center'
    },
    copyright: {
      textAlign: 'center',
      color: 'white',
      fontSize: '0.8rem'
    }
  })
);

export default useStyles;
