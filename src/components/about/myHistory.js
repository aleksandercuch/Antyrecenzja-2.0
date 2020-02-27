import { Component } from "react";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import './about.scss';

class MyHistory extends Component {

  state = {};

  render() {
    return (
      <>
        <Paper className="padding">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                Trochę o mnie
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Na początek wypadałoby się przedstawić. Nazywam się Aleksander i niemal od urodzenia mieszkam w Gdańsku, gdzie 
                w 2020 roku skończyłem studia informatyczne na specjalizacji aplikacji webowych. Przeglądaną przez Ciebie strona stanowi
                portfolio moich umiejętności w tej dziedzinie, a także pozwala mi pisać o tym, co w życiu kocham najbardziej, czyli o książkach.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Blog służy między innymi do publikowania mojej twórczości. Jeżeli interesujesz się tematyką fantastyki, to zapraszam do
                działu "Teksty", gdzie będziesz mógł przeczytać kilka rozdziałów powieści, nad którą obecnie pracuję. Będziesz
                miał też okazję wypowiedzieć się na ten temat w komentarzu (niezwykle cenię sobie zasłużoną krytykę).
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Treści na mojej stronie są przeznaczone również dla czytelnika, który szuka rady odnośnie książki do przeczytania
                lub interesują go newsy ze świata literatury. Takich podróżników zapraszam do działu "Recenzje", gdzie
                wypowiadam się na temat przeczytanych przeze mnie książek, i obserwowania strony głównej, gdzie co jakiś czas
                będzie wpadał post na temat literatury i moich osobistych przemyśleń.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                  Tyle ode mnie w tym temacie. Jeśli chcesz się dowiedzieć więcej o mnie i genezie strony, zapraszam do dalszej lektury.
                  W każdym razie życzę ciekawej podróży po witrynie i zapraszam do kontaktu :)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                A więc rozsiądź się wygodnie...
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Jako dziecko nienawidziłem książek! Poważnie. Jedyne, co mnie interesowało, to zabawa Bioniclami lub granie na
                komputerze… No dobra, głównie druga z tych rzeczy. Moi rodzice zawsze byli oczytani i przez jakiś czas naprawdę starali się przekonać mnie do
                książek. Jednym z ich sposobów było zawarcie ze mną układu(nie, nie mogłem negocjować ani odmówić), który
                wyglądał tak: mogłem grać jedną godzinę dziennie, a jeżeli chciałem grać więcej, musiałem czytać. Godzina
                czytania kupowała mi kolejną godzinę grania. Jak się pewnie domyślasz, czytanie to była wtedy dla mnie katorga,
                zło konieczne. Coś jak sesja dla studenta.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                Sport to zdrowie!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Moja podstawówka była połączona z gimnazjum, uczyła tam moja mama (zresztą nadal uczy). Rodzice zdecydowali, że trafię do klasy z
                profilem sportowym, za co do dzisiaj jestem im wdzięczny. Przez sześć lat aż do zakończenia gimnazjum 
                trenowałem piłkę ręczną. W międzyczasie jeden z kolegów pokazał mi, czym jest beatbox, zarażając mnie kolejną 
                zajawką. W weekendy graliśmy mecze ligowe, a w tygodniu czasem miałem okazję "popluć" trochę przez mikrofon,
                gdy chłopaki od sprzętu zbierali swoje zabawki po próbie jakiegoś apelu. Czasem robiłem to przed całą szkołą
                - nigdy nie miałem problemu z wyjściem na scenę (no, może jedynie lekką tremę) i popisania się przed 
                liczną publicznością. Tak samo nie stresowałem się podczas meczu – najgorszy był czas oczekiwania do 
                pierwszego gwizdka. Potem przełączałem się na tryb działania. Trema znikała, a ja dawałem z siebie wszystko.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Parę razy usłyszałem od ludzi, że na boisku jestem innym człowiekiem. Powiem tak: piłka ręczna to sport
                dla twardzieli, a ja poza boiskiem byłem raczej miłym dla wszystkich pacyfistą. Zresztą chyba nadal taki 
                jestem. Sęk w tym, że zmieniałem się na boisku. Nie byłem największym zabijaką na parkiecie, ale pilnujący mnie
                gość musiał się liczyć z tym, że nie będzie miał ze mną łatwo. 
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                Początek drogi
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Miałem może z dwanaście lat, gdy stwierdziłem, że mam dość książek, które wybiera mi tata. Obecnie nie mam 
                nic do „Tomka w Krainie Kangurów” czy „Pana Samochodzika”, jednak wtedy te książki wydawały mi się po prostu
                nudne. Nie pamiętam, jak to się stało, jednak w końcu udaliśmy się do księgarni, gdzie tata kupił mi moją 
                pierwszą oficjalną książkę – „Harrego Pottera i Kamień Filozoficzny”! I tak załapałem bakcyla, który trzyma
                mnie do dzisiaj.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Przeczytałem cała książkę jednym tchem, a potem zająłem się resztą cyklu. Pochłonąłem powieści z uniwersum 
                „Zwiadowców” i „Malowanego Człowieka”, a jeszcze później... Cóż, sporo tego było. W gruncie rzeczy moja przygoda
                z literaturą zaczęła się od kupienia wybranej przeze mnie książki. Nagle magicznym sposobem zdobywanie
                dodatkowego czasu grania stało się łatwe i, co ważniejsze, przyjemne. Tak, nieprzypadkowo napisałem tutaj
                „magicznym”. 
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Ale skąd wziął się pomysł na pisanie?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                Nie musisz zrobić tego lepiej
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                W gimnazjum w ręce wpadł mi „Eragon” Christophera Paoliniego. Ogromnie zdziwiło mnie, gdy dowiedziałem się, że w dniu wydania swej powieści Chris miał zaledwie szesnaście lat! Ja kończyłem bodajże wtedy trzynasty albo czternasty rok życia i pełen entuzjazmu pomyślałem "Jeśli on mógł, to czemu nie ja?" Stwierdziłem nawet, że go pobiję i wydam książkę przed szesnastymi urodzinami. Weź tylko potrzymaj mi piwo… A raczej soczek.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Czytałem dużo poradników pisania. Przytoczę tu słowa jednego z autorów: "W pisaniu książki nie musisz zrobić tego lepiej od profesjonalnego pisarza. Powiedz sobie, że możesz zrobić to równie dobrze". 
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Jak pewnie się domyślasz, do tej pory nie udało się nawet równie dobrze :)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Pomysł miałem, coś też tam pisałem, ale, gdy przeczytałem pierwszy napisany przeze mnie rozdział, mina mi zrzedła. Wtedy nie wiedziałem, jak ważne jest stworzenie szczegółowego planu powieści i przekonujących postaci. Po prostu opisywałem przygody mojego bohatera, który do złudzenia przypominał Willa Treaty ze Zwiadowców. O prawach związanych z plagiatem dowiedziałem się dopiero potem. 
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Napisałem chyba z dziewięć krótkich rozdziałów, po czym wszystko usunąłem. Stwierdziłem po prostu, że to nie to. Skupiłem się na szkole, ręcznej i beatboxsie. Parę miesięcy później podjąłem kolejną próbę, jednak rezultaty ponownie mnie zawiodły. Wiedziałem, że mój warsztat jest słaby. Musiałem zdobyć doświadczenie. Poznać kogoś, kto powie mi, co robić.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                Pbf? Czym to się je?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Niektórzy pisarze mówią, że każda przeczytana przez ciebie książka jest swego rodzajem podręcznikiem pisania - tu mają rację, jednak pisanie, jak każda inna umiejętność, wymaga treningu. Ja miałem swój pomysł, to umiejętności mi brakowało. Tak trafiłem na pbf'y.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                PBF(rozwinięcie skrótu - play by forum) to z pozoru zwykłe forum, jednak jego idea opiera się na tym, że tematy forumowe są odpowiednikiem jakiś lokacji, np. temat nazywa się „Karczma na Rozstajach”. Forumowicz w postach opisuje zachowanie odgrywanej przez siebie postaci, w tym wypadku napisałby, co jego postać wyprawia w owej karczmie, co czuje, jak się tam znalazła itp.
                Gracze nawzajem wymieniają posty, tworząc tym samym wspólną historię. Czasem też towarzyszy im Mistrz Gry, który opisuje zachowania postaci niezależnych, zmiany pogody, nagłe zwroty akcji i tak dalej – o możliwościach wpływania postaci gracza na środowisko bez zgody Mistrza Gry decyduje regulamin poszczególnego forum. Gdzieś tam też administratorzy pchają naprzód jakąś wielką fabułę, żeby gracze mieli, co robić.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Gorąco polecam spróbować!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Tym sposobem zabawy zainteresowałem się w połowie gimnazjum, a z ostatnim pbf'em pożegnałem się na początku 2019 roku. Przez ten czas wcieliłem się w niemal sześć postaci w uniwersum "Złodzieja Pioruna" Ricka Riordana, Marvelowskiego Kapitana Amerykę, wilkołaka w świecie zdominowanym przez wampiry, detektywa w autorskim świecie fantasy, młodą złodziejkę w czasie apokalipsy zombie, awanturniczego krasnoluda podróżującego szlakiem przetartym przez słynnego "Wiedźmina", niewidomego pirata w World of Warcraft, a także starego paladyna zesłanego do Górniczej Doliny, gdzie rozpoczęła się akcja legendarnej gry Gothic. Trochę tych forów było, a na każdym poznawałem innych ludzi, od których się uczyłem - od czytania ich postów, po pisanie własnych, aż po przyjmowanie zasłużonej krytyki. Napracowałem się, ale opłaciło się do tego stopnia, że gdy ostatnio dołączyłem na próbę do kolejnego forum, po pierwszym napisanym przeze mnie poście administratorzy chcieli mi nadać rangę "doświadczonego użytkownika"(czy coś w tym rodzaju). 
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                Więc dlaczego informatyka?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Tym sposobem zabawy zainteresowałem się w połowie gimnazjum, a z ostatnim pbf'em pożegnałem się na początku 2019 roku. Przez ten czas wcieliłem się w niemal sześć postaci w uniwersum "Złodzieja Pioruna" Ricka Riordana, Marvelowskiego Kapitana Amerykę, wilkołaka w świecie zdominowanym przez wampiry, detektywa w autorskim świecie fantasy, młodą złodziejkę w czasie apokalipsy zombie, awanturniczego krasnoluda podróżującego szlakiem przetartym przez słynnego "Wiedźmina", niewidomego pirata w World of Warcraft, a także starego paladyna zesłanego do Górniczej Doliny, gdzie rozpoczęła się akcja legendarnej gry Gothic. Trochę tych forów było, a na każdym poznawałem innych ludzi, od których się uczyłem - od czytania ich postów, po pisanie własnych, aż po przyjmowanie zasłużonej krytyki. Napracowałem się, ale opłaciło się do tego stopnia, że gdy ostatnio dołączyłem na próbę do kolejnego forum, po pierwszym napisanym przeze mnie poście administratorzy chcieli mi nadać rangę "doświadczonego użytkownika"(czy coś w tym rodzaju). 
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Gdy Ojciec zapytał mnie po napisaniu matury, co chcę robić w życiu, powiedziałem, że chcę pisać książki. Kocham pisać i będę pisał. Kropka.  
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                W życiu jednak bywa różnie. Może moje książki nie okażą się bestsellerami, a wtedy musiałbym mieć inne źródło dochodu. U nas w Polsce nie ma czegoś takiego jak studia kreatywnego pisania, więc musiałem wybrać coś innego. Zawsze lubiłem komputery, więc padło na informatykę. Dochodowy kierunek? No pewnie! Przyjemny? Eeee... Na dwoje babka wróżyła. 
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Bez bicia przyznam, że w ciągu studiów zastanawiałem się wiele razy, co ja tu k**** robię. Wiem, że nie tyczy się to tylko mnie jako studenta, aczkolwiek udało mi się w końcu odnaleźć - po prostu znalazłem to, co mnie w informatyce interesuje.  
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Zaczynałem te studia z myślą o zostaniu team menadżerem, czyli kimś, kto odpowiada za pracę zespołu i nie spędza całego dnia na pisaniu kodu. Zawsze byłem otwarty na ludzi i posiadam odpowiednie umiejętności, które lepiej sprawdzą się w interakcji z drugim człowiekiem niż myszką i klawiaturą, jednak nikt na początku kariery nie zwerbuje mnie na stanowisko team menadżera. Będę musiał wspinać się po drabinie kariery szczebel za szczeblem, poczynając od stażysty, a kończąc na… Hmm, ktoś pewnie powiedziałby teraz, że to zależy już tylko ode mnie.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                I może miałby rację.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Pomysł na bloga
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                O własnej stronie myślałem już od ponad roku. Parę miesięcy temu poznałem człowieka z branży IT, który został dla mnie swego rodzaju mentorem – doradza, jak rozwijać karierę w branży, czym się obecnie zająć, żeby być atrakcyjnym dla rekruterów itp. To taki mój mistrz Yoda. Powiedział mi, że fajnie by było, jakbym stworzył stronę o tym, co mnie interesuje, prawdziwy Yoda powiedziałby raczej: „Fajnie byłoby, jakbyś o tym, co cię interesuję, stronę stworzył”.   
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Właśnie tak powstał ten blog – z pasji, lecz iskrą, która rozpaliła płomień, był rozwój mojej kariery informatyka. Książkę pisałbym dalej tak czy siak, ale to właśnie dzięki Tobie, czytelniku, dowiem się, co powinienem jeszcze poprawić we własnym warsztacie. Jak mówił Jan Paweł II: "Wymagajcie od siebie, choćby inni od was nie wymagali". Czy jesteś potencjalnym rekruterem, czy zwykłym czytelnikiem, możesz zauważyć, że nie obca mi systematyczna praca, znam się trochę na technologiach internetowych, znam techniki Jedi(tylko jasna strona mocy), a na podstawie moich tekstów możesz ocenić też, czy można nazwać mnie kreatywnym.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                Zapraszam do kontaktu!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Jeżeli sam piszesz i chciałbyś poznać moją subiektywną opinię, to chętnie przeczytam twój tekst. Profesjonalistą nie jestem, ale trochę już w tym siedzę, więc może podpowiem ci coś sensownego. A może chcesz mnie o coś zapytać? Pisz śmiało! Jeśli dobrnąłeś aż tutaj, czytając moją epopeję, to wiesz, że nie boję się kontaktu z ludźmi. Tak teraz patrzę tylko na mój tekst i myślę „cholera, jak można tak dużo pisać o sobie?!” :)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Mam nadzieję, że nie weźmiesz mnie za jakiegoś Narcyza!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Niech moc będzie z Tobą.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

export default MyHistory;
