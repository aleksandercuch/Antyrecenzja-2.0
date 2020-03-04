import { Component } from "react";
import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import './reusable.scss';
import AntyrecenzjaImage from "../Reusable/AntyrecenzjaImage"
import { Paper, Typography, Divider } from "@material-ui/core";

class TextTemplate extends Component {

  render() {
    return (
      <>
        <Box>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <AntyrecenzjaImage />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Paper className="padding">
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item xs={12}>
                        <Typography variant="h5">
                          Komornik
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h5">
                          Michał Gołkowski
                        </Typography>
                      </Grid>
                      <Grid item>
                      <img className="reviewImage" src="https://ecsmedia.pl/c/komornik-tom-1-w-iext43267429.jpg" alt="error" />
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
                      justify="flex-start"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h6" align="center">
                          Recenzja
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">
                        Biblijna apokalipsa, w dodatku nieudana? Aniołowie mający to wszystko gdzieś? Właściwie te dwa zdania przekonały mnie do zakupu „Komornika” Michała Gołkowskiego. Przyznam, że kilka razy mijałem tytuł w księgarniach, trochę się z niego podśmiewając. „Komornik”? I jeszcze jakiś Rzymianin na okładce? Nie, to musi być żart… Cóż, nic bardziej mylnego.
Od dawna interesuje się tematyką biblijną i chrześcijańską, a na „Komorniku” się nie zawiodłem. Gołkowski ukazuje w nim świat po nastaniu Apokalipsy, jednak ostatecznie nie wszystko wyszło tak, jak zaplanowała sobie Góra. Owszem, czas stanął w miejscu, Ziemia przestała się obracać. Słońce zawisło nad zachodnim horyzontem i zastygło tak, zsyłając na Polskę klątwę wiecznego wieczoru(tak, akcja rozgrywa się u nas!). Dzieci przestały się rodzić, rośliny powymierały, a na ziemię zstąpili Wysłannicy Góry, mający na celu eksterminację ludzkości. Generalnie stało się wszystko to, co zapisano w Bibli, tyle tylko, że ktoś na Górze coś źle policzył, bo Apokalipsa wystartowała ze środkami zdolnymi do wymordowania ludzkości w liczbie, jaka stąpała po Ziemi za czasów, gdy święty Jan kończył ją zapisywać na stronach świętej księgi. Ludzi jest trochę więcej, niż Góra przewidziała, więc zostali powołani nowi aniołowie, aby szybciej dokończyć robotę. Im z kolei nie chciało się, więc zrzucili to na ludzi. Tak powstali Komornicy.

Poznajemy historię Ezekiela, legalnie działającego Komornika na usługach Góry, jak zwykł się przedstawiać nasz główny bohater. Autor ciekawie przedstawił wizję Nieba w formie działania wielkiej korporacji – gdy Ezekiel otrzymuje nowe zlecenia od Azraela (tak, samego Anioła Śmierci), skrzydlaty jegomość często wspomina o wyczerpujących się środkach, działających procedurach i rozmaitych raportach, jakie musi napisać(typowa korpo-gadka). Warto by było wspomnieć też, czym w ogóle zajmuje się tytułowy „Komornik”. Otóż jest on człowiekiem z nadprzyrodzonymi mocami otrzymującym zlecenia zabójstwa na innych ludzi, którzy w większy lub mniejszy sposób podpadli Górze. Koniec końców i tak każdego czeka śmierć, a Komornicy mają przyśpieszyć ten stan rzeczy. Obserwujemy Ezekiela podczas wykonywania właśnie takich zadań, lecz nie tylko. Wspólnie z nim spotykamy niesamowite istoty, poznajemy sekrety Nieba i podróżujemy przez umierający świat, który autor opisał w bardzo przekonujący sposób. Cały czas czułem tą beznadziejność i świadomość, że wszystko, co otacza Komornika, zmierza do nieuchronnego końca. Świat jest okrutny i wulgarny, jak na czasy apokalipsy przystało. Każdy robi pod siebie, aby przetrwać jak najdłużej i, nie daj boże, nie zwrócić na siebie uwagi Wysłanników. Wszyscy żyją na pożyczonym czasie, jak wyznaje nam Ezekiel.

Ogólnie rzecz biorąc, książka bardzo mi się podobała i nie żałuję jej zakupu. Potrafi rozbawić i zasmucić, czasem też napawa wręcz obrzydzeniem, a raz nawet zacisnęła mi dłoń na sercu. Jest to historia o osobistej stracie i próbie odnalezienia się w najmroczniejszej erze świata. Na pewno nie poleciłbym jej dzieciom i ludziom, którzy mogliby odebrać połączenie chrześcijaństwa i fantasy jako obrazę dla katolicyzmu. Trzeba się trochę zdystansować. Chociaż fabuła wydawała się prosta, wizja świata przedstawianego mnie porwała i ani przez chwilę się nie nudziłem. Ciągle ciekawiło mnie, kogo następnego spotka Ezekiel, co się wydarzy i jakie kolejne ciekawostki na temat planu Góry poznamy – nasz bohater jako Komornik wie o nim całkiem sporo, a narracja prowadzona w pierwszej osobie pomaga przekazywać czytelnikowi informacje w bardziej naturalny sposób. Opisy same w sobie trzymają poziom, ale to przemyślenia bohatera były najciekawsze. Ezekiel opowiada nam swoją historię w prosty, nietrudny do zrozumienia sposób, a chcę przez to powiedzieć, że książkę czyta się łatwo i przyjemnie. Chociaż humor powieści wiąże się w dużej mierze z sytuacyjnym przeklinaniem, nic nie bawiło mnie tak jak dialogi Azraela z Ezekielem i jeszcze kilku sytuacji, które przez swój absurd sprawiały, że ze śmiechu prawie spadałem z krzesła.

Podsumowując, jeżeli lubisz klimaty post-apo, wątki biblijne i dobrą fantasy, to gorąco polecam do przeczytania „Komornika”. Ja na pewno w najbliższym czasie udam się do księgarni w celu kupna kontynuacji. Tak jako ciekawostkę dodam tylko, że w wizji świata Gołkowskiego, tak jak i w prawdziwym świecie, nie tylko Bóg rości sobie prawo do ludzkich dusz. Może to podsyci twoją ciekawość jeszcze bardziej, czytelniku.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}

export default TextTemplate;
