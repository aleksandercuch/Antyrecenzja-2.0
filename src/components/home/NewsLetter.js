import {Component} from "react";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {connect} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import './home.scss'
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import firebase from "../../config/firebaseConfig";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {translate} from "react-translate";

class NewsLetter extends Component {

    state = {
        email: '',
        isLoading: false,
        showSuccess: false,
        isInvited: false,
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isLoading: true
        }, () => {
            firebase.firestore().collection('emails')
            .where('email', '==', this.state.email)
            .get().then(newEmail => {
                if(!newEmail.docs[0]){
                    firebase.firestore().collection('emails').add({
                        email: this.state.email
                    }).then(() => {
                        this.setState({
                            isLoading: false,
                            showSuccess: true
                        }, () => {
                            setTimeout(() => {
                                this.setState({
                                    showSuccess: false
                                });
                            }, 3000);
                        });
                        return
                    })
                }
                else {
                    this.setState({
                        isLoading: false,
                        isInvited: true
                    })
                }
            })
        })
    }; 

    render() {
        let image = "https://firebasestorage.googleapis.com/v0/b/antyrecenzja-a7320.appspot.com/o/images%2Fsea-749619_960_720.jpg?alt=media&token=a7d86852-9879-4aa7-a3af-a2058c14bc84"
        return (
            <Paper>
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
                                <CheckCircleIcon/>
                                {('Dziękuję za zapisanie się do Newslettera! Opowieść Proces Srebrnego Rzeźnika już czeka w twojej skrzynce odbiorczej!')}
                            </Typography>
                        }
                        action={[
                            <IconButton key="close" aria-label="close" color="inherit" onClick={() => {
                                this.setState({
                                    showSuccess: false
                                });
                            }}>
                                <CloseIcon/>
                            </IconButton>,
                        ]}
                    />
                </Snackbar>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={this.state.isInvited}
                    autoHideDuration={3000}
                >
                    <SnackbarContent
                        message={
                            <Typography>
                                {('Ten email jest już zapisany do newslettera!')}
                            </Typography>
                        }
                        action={[
                            <IconButton key="close" aria-label="close" color="inherit" onClick={() => {
                                this.setState({
                                    isInvited: false
                                });
                            }}>
                                <CloseIcon/>
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
                >
                    <Grid item xs={12} sm={5}>
                        <img className="postImg" src={image} alt="error" />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={1}
                        >
                            <Grid item xs={11}>
                                <Typography variant="h5" align="center">
                                    {('Nie przegap niczego!')}
                                </Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant="subtitle1" align="center">
                                    Zapisz się do newslettera i otrzymuj powiadomienia o nowych tekstach i postach na swojego e-maila.<br></br> 
                                    <b>Dodatkowo </b>wyślę ci moje pdf z moim pierwszym opowiadaniem dektywistycznym, łączącym w sobie elementy kryminału 
                                    i fantasy pt. Proces Srebrnego Rzeźnika!
                                </Typography>
                            </Grid>
                            <Grid item xs={11} sm={7}>
                                {this.state.isLoading ? (
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <Box p={2}>
                                            <CircularProgress/>
                                        </Box>
                                    </Grid>
                                ) : (
                                    <ValidatorForm
                                        onSubmit={this.handleSubmit}
                                        onError={errors => console.log(errors)}
                                    >
                                        <TextValidator
                                            label="Email"
                                            onChange={this.handleChange}
                                            name="email"
                                            id='email'
                                            fullWidth
                                            value={this.state.email}
                                            validators={['required', 'isEmail']}
                                            errorMessages={['To pole jest wymagane.', 'Ten e-mail jest nieprawidłowy.']}
                                        >
                                        </TextValidator>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center"
                                            spacing={1}
                                        >
                                            <Grid item>
                                                <Box p={2}>
                                                    <Button type="submit" variant="contained" color="primary" id='newsletterButton'>
                                                        {('Zapisuje się!')}
                                                    </Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </ValidatorForm>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.firebase.auth.isEmpty
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([]),
  translate("Home")
)(NewsLetter);