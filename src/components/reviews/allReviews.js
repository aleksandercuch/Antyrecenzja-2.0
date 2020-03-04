import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import './reviews.scss';
import { Link } from 'react-router-dom';

class AllReviews extends Component {

  render() {
    return (
      <>
        <Paper className="padding">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={12}>
              <Typography variant="h4" align="center" >
                Recenzje
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={4}
              >
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Fantastyka
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={1}
                  >
                    <Grid item xs={5} >
                      <Link to="/tekst" style={{ 'textDecoration': 'none' }}>
                        <img style={{ borderRight: '0.1em ridge rgba(0, 0, 0, .05)', padding: '2em' }} className="reviewImage" src="https://ecsmedia.pl/c/komornik-tom-1-w-iext43267429.jpg" alt="error" />
                      </Link>
                    </Grid>
                    <Grid item xs={7}>
                      <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-end"
                        spacing={1}
                      >
                        <Grid item xs={12}>
                          <Typography variant="subtitle1">
                            Biblijna apokalipsa, w dodatku nieudana? Aniołowie mający to wszystko gdzieś? Właściwie te dwa zdania przekonały mnie do zakupu „Komornika” Michała Gołkowskiego. Przyznam, że kilka razy mijałem tytuł w księgarniach, trochę się z niego podśmiewając. „Komornik”? I jeszcze jakiś Rzymianin na okładce? Nie, to musi być żart… Cóż, nic bardziej mylnego.Od dawna interesuje się tematyką biblijną i chrześcijańską, a na „Komorniku” się nie zawiodłem. Gołkowski ukazuje w nim świat po nastaniu Apokalipsy, jednak ostatecznie nie wszystko ...
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Box mr={10}>
                            <Link to="/tekst" style={{ 'textDecoration': 'none' }}>
                              <Button variant="contained">Czytaj</Button>
                            </Link>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider orientation='horizontal' />
                    </Grid>
                    <Grid item xs={5} >
                      <img style={{ borderRight: '0.1em ridge rgba(0, 0, 0, .05)', padding: '2em' }} className="reviewImage" src="https://ecsmedia.pl/c/krolowie-przekleci-tom-1-b-iext43259211.jpg" alt="error" />
                    </Grid>
                    <Grid item xs={7}>
                      <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-end"
                        spacing={1}
                      >
                        <Grid item xs={12}>
                          <Typography variant="subtitle1">
                            I bogatej w detale historyczne książki. Królowie Przeklęci łączą w sobie aż trzy powieści z tejże serii. To złożona, wielowątkowa historia, którą najprędzej porównałbym do sławnej Gry o Tron. Dworskie intrygi, zakazane romanse, klątwy templariuszy i sprawy natury państwowej są tutaj na porządku dziennym, a wszystko to skąpane w otoczce historycznej, nie świecie wymyślonym przez autora.Zaczynamy obserwować historię rodu Kapetyngów, władców Francji, od momentu, w którym Robert de ...
                          </Typography>
                        </Grid>
                        <Grid item xs={8}>
                          <Box mr={10} mb={2}>
                            <Button variant="contained">Czytaj</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider orientation='horizontal' />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

export default AllReviews;
