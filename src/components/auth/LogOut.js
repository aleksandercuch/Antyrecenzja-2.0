import {Component} from "react";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {signOut} from "../../store/actions/authActions";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";
import './auth.scss'

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

class LogOut extends Component {
    componentDidMount() {
        this.props.signOut();
    }

    render() {
        return (
            <div className="imageBackgroundLogin">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    className="gridFormOnly"
                >
                    <Grid item xs={12} sm={8} md={6}>
                        <Box p={5}>
                            <Paper>
                                <Box p={3}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <Typography variant="h4" align="center" component="h3">
                                            You have been logged out succesfully
                                        </Typography>
                                    </Grid>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(LogOut);
