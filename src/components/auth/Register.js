import {Component} from "react";
import React from "react";
import Paper from "@material-ui/core/Paper";
import {ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {connect} from 'react-redux'
import {signUp} from "../../store/actions/authActions";
import {Redirect} from "react-router-dom";
import './auth.scss'
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";

class Register extends Component {
  state = {
    password: '',
    passwordRepeat: '',
    email: '',
    nick: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUp(this.state);
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('passwordMatch', (value) => {
      return value === this.state.password;
    });
  }

  componentWillUnmount() {
    ValidatorForm.removeValidationRule('passwordMatch');
  }

  createDays() {
    let days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(<MenuItem value={i} key={i}>{i}</MenuItem>)
    }
    return days;
  }

  createMonths() {
    let months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(<MenuItem value={i} key={i}>{i}</MenuItem>)
    }
    return months;
  }

  createYears() {
    let years = [];
    for (let i = new Date().getFullYear(); i >= 1900 ; i--) {
      years.push(<MenuItem value={i} key={i}>{i}</MenuItem>)
    }
    return years;
  }

  render() {

    const {error, auth} = this.props;

    if (auth.uid) return <Redirect to='/'/>;

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
                      spacing={1}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h3" align="center" component="h3">
                          Register
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          label="Nick"
                          onChange={this.handleChange}
                          name="nick"
                          fullWidth
                          value={this.state.nick}
                          validators={['required', 'minStringLength:5', 'maxStringLength:55']}
                          errorMessages={['this field is required', 'min length is 5', 'max length is 55']}
                        >
                        </TextValidator>
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          label="Email"
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
                        <TextValidator
                          label="Password"
                          onChange={this.handleChange}
                          name="password"
                          type="password"
                          fullWidth
                          value={this.state.password}
                          validators={['required', 'matchRegexp:^.*[A-Z].*$', 'matchRegexp:^.*[a-z].*$', 'matchRegexp:^.*[0-9].*$', 'matchRegexp:^.{8,}$']}
                          errorMessages={['this field is required', 'password must contain at least one upper case letter', 'password must contain at least one lower case letter', 'password must contain at least one digit', 'password must be at least 8 long']}
                        >
                        </TextValidator>
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          label="Repeat Password"
                          onChange={this.handleChange}
                          name="passwordRepeat"
                          type="password"
                          fullWidth
                          value={this.state.passwordRepeat}
                          validators={['required', 'passwordMatch', 'matchRegexp:^.*[A-Z].*$', 'matchRegexp:^.*[a-z].*$', 'matchRegexp:^.*[0-9].*$', 'matchRegexp:^.{8,}$']}
                          errorMessages={['this field is required', 'passwords are not the same', 'password must contain at least one upper case letter', 'password must contain at least one lower case letter', 'password must contain at least one digit', 'password must be at least 8 long']}
                        >
                        </TextValidator>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant='body2' component='p'>
                          Gender
                        </Typography>
                        <SelectValidator
                          name="gender"
                          value={this.state.gender}
                          onChange={this.handleChange}
                          validators={['required']}
                          errorMessages={['this field is required']}
                        >
                          <MenuItem value='Male'>Male</MenuItem>
                          <MenuItem value='Female'>Female</MenuItem>
                          <MenuItem value='Other'>Other</MenuItem>
                        </SelectValidator>
                      </Grid>
                      <Grid item xs={12}>
                        <Box pt={2}>
                          <Typography variant='body2' component='p'>
                            Birth Date
                          </Typography>
                          <SelectValidator
                            name="birthDay"
                            value={this.state.birthDay}
                            onChange={this.handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            className='birthDateSelect'
                          >
                            <ListSubheader>Day</ListSubheader>
                            {this.createDays()}
                          </SelectValidator>
                          <SelectValidator
                            name="birthMonth"
                            value={this.state.birthMonth}
                            onChange={this.handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            className='birthDateSelect'
                          >
                            <ListSubheader>Month</ListSubheader>
                            {this.createMonths()}
                          </SelectValidator>
                          <SelectValidator
                            name="birthYear"
                            value={this.state.birthYear}
                            onChange={this.handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            className='birthDateSelect'
                          >
                            <ListSubheader>Year</ListSubheader>
                            {this.createYears()}
                          </SelectValidator>
                        </Box>
                      </Grid>
                      {
                        error && (
                          <Grid item xs={12}>
                            <Typography variant='h6' color='error'>
                              {error}
                            </Typography>
                          </Grid>
                        )
                      }
                      <Box pt={2}>
                        <Button type="submit" variant="contained" color="primary">Register</Button>
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
    signUp: (credentials) => dispatch(signUp(credentials))
  }
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    auth: state.firebase.auth
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
