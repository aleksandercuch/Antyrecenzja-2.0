import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 360,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  bar: {
    margin: theme.spacing(1),
    width: 300,
  },
  month: {
    margin: theme.spacing(1),
    minWidth: 70,
  },
  year: {
    margin: theme.spacing(1),
    minWidth: 90,
  },
  ccv: {
    margin: theme.spacing(1),
    width: 70,
  },
}));

export default useStyles;