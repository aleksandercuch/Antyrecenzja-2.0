import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

const footerBackgroundColor =  grey["200"];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      width: '100%',
      position: 'relative',
      backgroundColor: footerBackgroundColor,
    }
  })
);

export default useStyles;
