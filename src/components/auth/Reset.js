import { Component } from "react";
import React from "react";
import Paper from "@material-ui/core/Paper";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { signIn } from "../../store/actions/authActions";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import './auth.scss'
import firebase from "../../config/firebaseConfig";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class Reset extends Component {

  state = {
    email: '',
    showSuccess: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
 
  handleSubmit = (event) => {
    event.preventDefault();
    firebase.resetPassword(this.state.email)
    this.setState({
      showSuccess: true
    });
  };

  render() {
    const { error, auth } = this.props;

    if (auth.uid) return <Redirect to='/' />;

    return (
      <div className="imageBackgroundLogin">
      <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.showSuccess}
          autoHideDuration={3000}
        >
          <SnackbarContent
            message={
              <Typography>
                <CheckCircleIcon />
                Jeśli wpisałeś adres e-mail poprawnie, wkrótce dostaniesz ode mnie wiadomość :)
              </Typography>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={() => {
                this.setState({
                  showSuccess: false
                });
              }}>
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </Snackbar>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
          className="gridFormOnly"
        >
          <Grid item xs={12} sm={8} md={5}>
            <Box p={5}>
              <Paper>
                <Box p={3}>
                  <ValidatorForm
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h4" align="center" component="h3">
                          Resetowanie hasła
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2" align="center" >
                          Wiadomość z możliwością zresetowania hasła otrzymasz na podany przez Ciebie adres e-mail:
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          label="e-mail"
                          onChange={this.handleChange}
                          name="email"
                          fullWidth
                          value={this.state.email}
                          validators={['required', 'isEmail']}
                          errorMessages={['this field is required', 'this email is incorrect']}
                        >
                        </TextValidator>
                      </Grid>
                      <Grid item xs={12}>
                      </Grid>
                      {
                        error && (
                          <Grid item xs={12}>
                            <p> {error} </p>
                          </Grid>
                        )
                      }
                      <Box mb={2} pt={2}>
                        <Button type="submit" variant="contained" color="primary">Wyślij wiadomość</Button>
                      </Box>
                    </Grid>
                  </ValidatorForm>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    auth: state.firebase.auth
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
