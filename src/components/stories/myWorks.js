import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from "@material-ui/core/Divider";
import './stories.scss';
import { Link } from "react-router-dom";
import { Markup } from 'interweave';

class MyWorks extends Component {

  state = {};

  render() {
    let chapters = this.props.chapters;
    let others = this.props.others;
    return (
      <>
        <Paper className="padding">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={12}>
              <Typography variant="h4" align="center" >
                Teksty
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={12}>
                  <Typography variant="h5" >
                    Ostatni Zwiastun - księga pierwsza
								  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" >
                        Błagajcie o litość! Wypatrujcie znaków! Nadchodzi Ostatni Zwiastun, a wraz z nim czas końca i pożogi!
											</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" >
                        Północ trzęsie się w posadach, gdy stary konflikt między królestwami Akseron i Delvaru odżywa na nowo. Dla wojownika z klanu Wilka wojna powinna być powodem do radości, jednak dla Mirande oznacza ucieczkę. Ogłoszona zdrajczynią przez pobratymców, ucieka do nieprzyjaznego Akseron, prosto w ogień wojny. Jako jedyna zna tajemnicę, za poznanie której monarchowie spaliliby własne królestwa, a jedyna droga do jej ocalenia prowadzi przez las nawiedzany przez ludożernego demona.
											</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" >
                        Aksydus Faust am Birighter musi rozwiązać zagadkę nieudanego królobójstwa, w które wmieszały się magiczne istoty zwane Natchnionymi. Jeśli mu sie nie uda, akserońscy sojusznicy odkryją jego sekret i zgotują mu los gorszy od śmierci. Oszust nie spodziewa się jednak, że podczas śledztwa zetknie się z sekretem starszym niż sami bogowie.
											</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" >
                        Jedno z akserońskich miast ginie w gigantycznej kuli ognia. Wśród popiołów znajdują nagiego mężczyznę całkowicie pozbawionego pamięci. Trafia on do delvarskiej armii, gdzie wszyscy zdają sie go znać... i bać się bardziej niż samej śmierci.
											</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle1" >
                        Nadchodzi czas końca i pożogi! Błagajcie o litość niewierni... Chyba że akurat jesteście zajęci masowym wyżynaniem się nawzajem.
											</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <Grid item xs={8}>
                        <ExpansionPanel>
                          <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography variant="h6">Rozdziały</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <Grid
                              container
                              direction="row"
                              justify="flex-start"
                              alignItems="flex-start"
                            >
                              {chapters.map(chapter => {
                                return (
                                  <Grid item xs={12}>
                                    <Grid
                                      container
                                      direction="row"
                                      justify="flex-start"
                                      alignItems="flex-start"
                                      spacing={1}
                                    >
                                      <Grid item xs={12}>
                                        <Divider />
                                      </Grid>
                                      <Grid item xs={9}>
                                        <Typography variant="h6">
                                          Rozdział {chapter.number} - {chapter.title}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={3}>
                                        <Link to={{
                                          pathname: `/tekst/${chapter.id}`,
                                          state: {
                                            collection: "chapters",
                                            id: `${chapter.id}`
                                          }
                                        }}
                                          style={{ 'textDecoration': 'none' }}
                                        >
                                          <Button variant="contained">Czytaj</Button>
                                        </Link>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                )
                              })}
                            </Grid>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={12}>
                  <Typography variant="h5">
                    Inne
								</Typography>
                </Grid>
                {others.map(story => {
                  return (
                    <Grid item xs={12}>
                      <ExpansionPanel>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography variant="h6">{story.title}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                          >
                            <Grid item xs={12}>
                              <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={1}
                              >
                                <Grid item xs={12}>
                                  <Divider />
                                </Grid>
                                <Grid item xs={10}>
                                  <Typography variant="subtitle1">
                                    <Markup content={story.intro} />
                                  </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                  <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                    spacing={1}
                                  >
                                    <Grid item xs={12}>
                                      <Link to={{
                                        pathname: `/tekst/${story.id}`,
                                        state: {
                                          collection: "others",
                                          id: `${story.id}`
                                        }
                                      }}
                                        style={{ 'textDecoration': 'none' }}
                                      >
                                        <Button variant="contained">Czytaj</Button>
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

export default MyWorks;
