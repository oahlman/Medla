/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - name:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

import hybritImg from './images/hybrit.jpg';
import kolvallenImg from './images/kolvallen.jpg';
import skaftasenImg from './images/placeholder.jpg';
import bjornetjarnsbergetImg from './images/bjornetjarnsberget.jpg';
import hanImg from './images/han.jpg';
import bjornbergetImg from './images/bjornberget.jpg';
import hocksjonImg from './images/hocksjon.jpg';
import stollsaterbergetImg from './images/stollsaterberget.jpg';
import gronhultImg from './images/gronhult.jpg';
import blaklidenfabodbergetImg from './images/blaklidenfabodberget.jpg';
import kabekoImg from './images/kabeko.jpg';

const businessAreas = [
    { key: 'anlaggning', label: 'Anläggning' },
    { key: 'bemanning', label: 'Bemanning' },
    { key: 'betong', label: 'Betong' },
    { key: 'bygg', label: 'Byggentreprenad' },
    { key: 'driftochunderhall', label: 'Drift och underhåll' },
    { key: 'el', label: 'El, larm och fiber' },
    { key: 'fordon', label: 'Fordon och däck' },
    { key: 'itochtelecom', label: 'IT och telecom' },
    { key: 'kostlogi', label: 'Kost och logi' },
    { key: 'maskinreparation', label: 'Maskinreparation' },
    { key: 'media', label: 'Media och PR' },
    { key: 'projektering', label: 'Projektering' },
    { key: 'servicetjanster', label: 'Servicetjänster' },
    { key: 'skogsmaskintjanster', label: 'Skogsmaskintjänster' },
    { key: 'sprangning', label: 'Sprängning' },
    { key: 'svets', label: 'Svets och metall' },
    { key: 'transport', label: 'Transport och taxi' },
    { key: 'tillverkning', label: 'Tillverkning' },
    { key: 'utbildning', label: 'Utbildning' },
    { key: 'ovrigt', label: 'Övrigt' },
  ];

export const projects = [
  {
    id: 'hybrit',
    name: 'Hybrit',
    companyName: 'Hybrit',
    companyId: 'hybrit',
    type: 'medla',
    image: hybritImg,
    location: {
      lat: 67.133798,
      lng: 20.657898,
    },
    bounds: {
        ne: '69.33701906,25.08883256',
        sw: '64.71116182,16.22061112',
    },
    popularBusinessAreas: [
      'anlaggning',
      'bemanning',
      'betong',
      'bygg',
      'driftochunderhall',
      'el',
    ],
    description: {
        title: 'Hybrit',
        summary: 'Projektet är ett samarbete mellan SSAB, LKAB och Vattenfall och kommer innefatta av en demonstrationsanläggning för produktion av vätgas och tillverkning av järnsvamp genom direktreduktion. Anläggningen planeras i Gällivare kommun och planeras vara klar 2026. Bild från pilotanläggningen i Luleå.',
        about: {
          aboutProject: 'I demonstrationsanläggningen tar vi utvecklingen vidare från tester i labbmiljö och pilotskala, till att demonstrera produktion i industriell skala. Den planerade demonstrationsanläggningen omfattar produktion av vätgas och tillverkning av järnsvamp genom direktreduktion av järnmalm med vätgas. Anläggningen planeras i Gällivare kommun. Planen är att anläggningen ska vara klar 2026. Under 2020 påbörjades arbetet med att ta fram underlag för den miljökonsekvensbeskrivning som kommer ligga till grund för tillståndsansökan till Mark- och Miljödomstolen. Hybrit genomförde under 2020 samråd för de två möjliga placeringar som ursprungligen utreddes för demonstrationsanläggningen (i Luleå kommun och Gällivare kommun). Hybrit går nu vidare med fördjupade dialoger och utredningar för etablering i Gällivare kommun för att säkerställa att vi får tillgång till alla synpunkter och all information som kan ha betydelse för den fortsatta utformningen av anläggningen och miljökonsekvensbeskrivningen.',
          aboutCompany: '',
          externalServiceLink: '',
          externalLink: 'https://www.hybritdevelopment.se/samrad/',
          linkText: 'Läs mer'
      },
    },
    stats: {
      currentStatus: 'planning',
      turbines: 42,
      mw: 300,
      constructionPeriod: {
          start: 2022,
          end: 2026,
      },
      region: 'Gällivare kommun',
  },
  },
  {
    id: 'kolvallen',
    name: 'Kölvallen',
    companyName: 'Arise',
    companyId: 'arise',
    type: 'medla',
    image: kolvallenImg,
    location: {
      lat: 61.830080,
      lng: 16.090436,
    },
    bounds: {
        ne: '63.03626025,18.0991935',
        sw: '60.59913922,14.2480015',
    },
    popularBusinessAreas: [
      'anlaggning',
      'bemanning',
      'betong',
      'bygg',
      'driftochunderhall',
      'el',
    ],
    description: {
        title: 'Kölvallen',
        summary: 'Projektet har utvecklats av Arise och kommer bestå av 42 vindkraftverk med en beräknad årsproduktion på ca 815GWH i Kölvallen, Ljusdals kommun.',
        about: {
          aboutProject: 'Arise utvecklar projektet Kölvallen i närheten av Sveg. Kölvallen är ett systerprojekt till projektet Skaftåsen, 35 turbiner, som för närvarande är under byggnation. Kölvallen har 42-43 fullt tillståndsgivna turbiner med en totalhöjd på 220 m. Vi hoppas på att kunna starta bygget under andra halvan av 2022 och avsluta under 2024.',
          aboutCompany: '',
          externalServiceLink: 'https://www.arise.se/',
          externalLink: 'https://www.arise.se/',
          linkText: 'Läs mer'
      },
    },
    stats: {
      currentStatus: 'planning',
      turbines: 42,
      mw: 300,
      constructionPeriod: {
          start: 2022,
          end: 2024,
      },
      region: 'Ljusdals kommun',
  },
  },
  {
    id: 'skaftasen',
    name: 'Skaftåsen',
    companyName: 'Arise',
    companyId: 'arise',
    type: 'medla',
    image: skaftasenImg,
    location: {
      lat: 60.389870,
      lng: 12.142296,
    },
    bounds: {
      ne: '69.0599269995724,24.1933684832876',
      sw: '55.280224001785,10.8383668128319',
    },
    popularBusinessAreas: [
      'anlaggning',
      'bemanning',
      'betong',
      'bygg',
      'driftochunderhall',
      'el',
    ],
    description: {
        title: 'Skaftåsen',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        about: {
          aboutProject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          aboutCompany: '',
          externalServiceLink: 'https://www.arise.se/',
          externalLink: 'https://www.arise.se/',
          linkText: 'Läs mer'
      },
    },
    stats: {
      currentStatus: 'building',
      turbines: 0,
      mw: 0,
      constructionPeriod: {
          start: 0,
          end: 0,
      },
      region: 'Härjedalens kommun',
  },
  },
  {
    id: 'bjornetjarnsberget',
    name: 'Björnetjärnsberget',
    companyName: 'Cloudberry',
    companyId: 'cloudberry',
    type: 'medla',
    image: bjornetjarnsbergetImg,
    location: {
      lat: 59.883856,
      lng: 12.305330,
    },
    bounds: {
        ne: '62.38293114,16.16852564',
        sw: '57.18165757,8.44206036',
    },
    popularBusinessAreas: [
      'anlaggning',
      'bemanning',
      'betong',
      'bygg',
      'driftochunderhall',
      'el',
    ],
    description: {
        title: 'Björnetjärnsberget',
        summary: 'Projektet har utvecklats av Cloudberry och kommer bestå av 18 vindkraftverk med en beräknad årsproduktion på ca 450GWH i Björnetjärnsberget, Eda kommun.',
        about: {
          aboutProject: 'Projektet har utvecklats av Cloudberry och kommer bestå av 18 vindkraftverk med en beräknad årsproduktion på ca 450GWH i Björnetjärnsberget, Eda kommun.',
          aboutCompany: '',
          externalServiceLink: 'https://www.cloudberry.no/',
          externalLink: 'https://www.cloudberry.no/',
          linkText: 'Läs mer'
      },
    },
    stats: {
      currentStatus: 'planning',
      turbines: 18,
      mw: 76.6,
      constructionPeriod: {
          start: 2028,
          end: 2029,
      },
      region: 'Eda kommun',
  },
  },
  {
    id: 'han',
    name: 'Hån',
    companyName: 'Cloudberry',
    companyId: 'cloudberry',
    type: 'medla',
    image: hanImg,
    location: {
      lat: 59.389870,
      lng: 12.132296,
    },
    bounds: {
        ne: '60.6217629,13.97948452',
        sw: '58.14688954,10.35304048',
    },
    popularBusinessAreas: [
      'anlaggning',
      'bemanning',
      'betong',
      'bygg',
      'driftochunderhall',
      'el',
    ],
    description: {
        title: 'Hån',
        summary: 'Projektet har utvecklats av Cloudberry och kommer bestå av 5 vindkraftverk med en beräknad årsproduktion på ca 74GWH i Hån, Årjängs kommun.',
        about: {
          aboutProject: 'Projektet har utvecklats av Cloudberry och kommer bestå av 5 vindkraftverk med en beräknad årsproduktion på ca 74GWH i Hån, Årjängs kommun.',
          aboutCompany: '',
          externalServiceLink: 'https://www.cloudberry.no/sv/project/han-vindpark',
          externalLink: 'https://www.cloudberry.no/sv/project/han-vindpark',
          linkText: 'Läs mer'
      },
    },
    stats: {
      currentStatus: 'building',
      turbines: 5,
      mw: 21,
      constructionPeriod: {
          start: 2021,
          end: 2022,
      },
      region: 'Årjängs kommun',
  },
  },
    {
      id: 'bjornberget',
      name: 'Björnberget',
      companyName: 'RES Group',
      companyId: 'resgroup',
      type: 'external',
      image: bjornbergetImg,
      location: {
        lat: 62.524205,
        lng: 15.65821,
      },
      bounds: {
          ne: '63.96074168,17.70965133',
          sw: '60.28740006,13.58712057',
      },
      popularBusinessAreas: [
        'anlaggning',
        'bemanning',
        'betong',
        'bygg',
        'driftochunderhall',
        'el',
      ],
      description: {
          title: 'Björnberget',
          summary: 'Projektet har utvecklats av RES och kommer bestå av 60 vindkraftverk på 220 m och totalt ca 372MW i Björnberget, Ånge kommun.',
          about: {
            aboutProject: 'RES startar bygget av Björnberget Vindkraftpark i Ånge kommun! Björnberget har utvecklats av RES och kommer bestå av 60 vindkraftverk på 220 m och totalt 372MW. Vindkraftparken ägs av Prime Capital och Enlight Renewable Energy. Björnberget kommer årligen att producera el motsvarande ca 300 000 hushålls elförbrukning samt bidrar till minskade utsläpp av koldioxid motsvarande ca 600 000 CO2 årligen.',
            aboutCompany: 'Över 3000 anställda på RES Group drivs av visionen att skapa en värld där alla ska ha tillgång till prisvärd koldioxidfri energi. RES är världens största oberoende aktör inom förnybar energi. Idag har vi en global portfölj på 19GW varav vi förvaltar över 7GW. Bolaget utvecklar, bygger och förvaltar anläggningar över hela världen. I Norden är vi i dagsläget verksamma i Sverige och Norge. Välkommen att registrera ditt företag här för samarbetsmöjligheter.',
            externalServiceLink: 'https://pilot.umigo.se/company/bjornberget.html',
            externalLink: 'https://res-group.com/sv/',
            linkText: 'Läs mer'
        },
      },
      stats: {
        currentStatus: 'planning',
        turbines: 60,
        mw: 372,
        constructionPeriod: {
            start: 2021,
            end: 2023,
        },
        region: 'Ånge kommun',
    },
    },
    {
        id: 'hocksjon',
        name: 'Hocksjön',
        companyName: 'Jämtkraft',
        companyId: 'jamtkraft',
        type: 'external',
        image: hocksjonImg,
        imageId: '1pU3mZrMsCB6rlwE9z9Hgn2f8vVsLn3Vx',
        location: {
          lat: 63.166695,
          lng: 17.27748,
        },
        bounds: {
            ne: '63.96074168,17.70965133',
            sw: '60.28740006,13.58712057',
        },
        popularBusinessAreas: [
        'anlaggning',
        'bemanning',
        'betong',
        'bygg',
        'driftochunderhall',
        'el',
      ],
        description: {
            title: 'Hocksjön',
            summary: 'Öster om Hocksjön i Sollefteå kommun planerar Jämtkraft och Persson Invest att bygga en vindkraftspark, bygget planeras att påbörjas under 2021.',
            about: {
                aboutProject: 'Sammanlagt finns tillstånd för 45 vindkraftverk. Då tillståndet är ett så kallat BOX-tillstånd har vi möjligheten att använda den senaste tekniken vilket innebär att vi med bibehållen totalhöjd ändå ser en minskning av antal vindkraftverk till 23 vindkraftverk. Vi beräknar att vi i anläggningen kommer producera ca 450 GWh/år förnybar energi, det motsvarar energi till cirka 90 000 hushåll*. 1,6 miljarder Projektet Hocksjön Vind drivs gemensamt av Jämtkraft och Persson Invest. Vindkraftsprojektet förvärvades från Höglandsbolagen i början av 2019. Vindkraftsparken kommer att anslutas mot EON Elnät och vidare mot Svenska Kraftnäts nya stamnätsstation i Storfinnforsen. 16 april 2020 beviljade Mark- och miljööverdomstolen förlängt igångsättningstillstånd för Hocksjöns vindkraftsprojekt. Beslutet innebär att förberedelserna för uppförandet av vindkraftparken kan återupptas. Anläggningen beräknas vara klar under 2022. *Beräknat på en årsförbrukning av hushållsel på 5 000 kWh. ',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/hocksjon.html',
                externalLink: 'https://www.jamtkraft.se/om-jamtkraft/var-fornybara-produktion/vindkraft/planerade-vindkraftsprojekt/hocksjon/',
                linkText: 'Läs mer'
            },
        },
        stats: {
          currentStatus: 'building',
          turbines: 23,
          mw: 131,
          constructionPeriod: {
              start: 2021,
              end: 2023,
          },
          region: 'Sollefteå kommun',
      },
      },
      {
        id: 'stollsaterberget',
        name: 'Stöllsäterberget',
        companyName: 'wpd',
        companyId: 'wpd',
        type: 'external',
        image: stollsaterbergetImg,
        imageId: '1nisD14yYdVLUSCmMw93amTnpDsg6m0a9',
        location: {
          lat: 60.683884,
          lng: 13.71534
        },
        bounds: {
            ne: '63.96074168,17.70965133',
            sw: '60.28740006,13.58712057',
        },
        popularBusinessAreas: [
        'anlaggning',
        'bemanning',
        'betong',
        'bygg',
        'driftochunderhall',
        'el',
      ],
        description: {
            title: 'Stöllsäterberget',
            summary: 'Stöllsäterberget ligger cirka 40 km nordost om Torsby, cirka 25 km sydväst om Malung och cirka 11 km från närmaste samhälle, Stöllet.',
            about: {
                aboutProject: 'wpd arbetar aktivt med att ge regionala företag möjligheter att delta vid byggnation och drift av våra vindparker. Vårt syfte är att öka chanserna för lokala företag att bistå med tjänster, både på lång sikt och mer akuta behov som dyker upp under parkens livstid. Vi kommer att använda affärsplattformen för att snabbt hitta lokala företag som kan leverera tjänster som uppstår. Just nu pågår förberedelser inför avverkning, vilket genomförs av ett lokalt företag. Inom kort görs upphandling av huvudentreprenör. wpd kommer att säkerställa att berörda känner till plattformen och hjälpa till att vid behov skapa förfrågningar. Plattformen är under utveckling och wpd hoppas att den kommer att vara till stor nytta för att öka deltagandet och närvaron av lokala näringslivet under vindparkens livslängd. Läs mer om projektet på www.wpd.se/stollsaterberget wpd tycker det är viktigt att de platser där vi bygger vindparker ges nya möjlighet att utvecklas och att göra lokala satsningar som kanske inte hade kunnat genomföras utan ett extra tillskott i kassan. För att möjliggöra det avsätter vi bygdemedel. Vi brinner för omställningen till en förnybar värld och hållbarhet är ett av våra ledord. Vi bidrar inte bara med grön el i form av vindkraft och solkraft utan vi kompenserar även för de koldioxidutsläpp företaget orsakar. ',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/stollsaterberget.html',
                externalLink: 'https://www.wpd.se/stollsaterberget',
                linkText: 'Läs mer'
            },
        },
        stats: {
          currentStatus: 'building',
          turbines: 15,
          mw: 50,
          constructionPeriod: {
              start: 2021,
              end: 2023,
          },
        region: 'Malung-Sälen och Torsby kommun',
      },
      },
      {
        id: 'gronhult',
        name: 'Grönhult',
        companyName: 'Vattenfall',
        companyId: 'vattenfall',
        type: 'external',
        image: gronhultImg,
        imageId: '1zA_CiE5Cx6VSowrzk1RcCp2pJ-hJ_zdp',
        location: {
          lat: 57.30326,
          lng: 13.53915,
        },
        bounds: {
            ne: '63.96074168,17.70965133',
            sw: '60.28740006,13.58712057',
        },
        popularBusinessAreas: [
        'anlaggning',
        'bemanning',
        'betong',
        'bygg',
        'driftochunderhall',
        'el',
      ],
        description: {
            title: 'Grönhult',
            summary: 'I Gislaved och Tranemo kommuner byggs 12 vindkraftverk med en beräknad total installerad effekt på 67,2 MW. Parken tas i drift i slutet av 2022',
            about: {
                aboutProject: 'I maj påbörjades byggnationen av Grönhult vindkraftspark. Vi börjar med att uppföra vägar och därefter uppställningsplatser, fundament och det interna elnätet för vindkraftsparken som är belägen i Tranemo och Gislaveds kommuner. Vindkraftverken levereras under sommaren 2022 och tas i drift i slutet av samma år. På Vattenfall vill vi göra det möjligt att leva fossilfritt inom en generation. På vägen dit fortsätter vi våra ambitiösa vindkraftsatsningar för att dels ersätta annan energiproduktion som avvecklas och samtidigt ta höjd för ökad elektrifiering av bl a transport- och industrisektorn. För oss är det viktigt med ett lokalt engagemang i de områden där vi driver våra projekt. Det kan man säkerställa på många olika sätt bl a genom tidig dialog och att vara tillgängliga för frågor. Att viss återbäring från vindkraftsproduktionen går tillbaka till bygden är en självklarhet för oss och det sker genom det vi kallar "Stöd till lokal utveckling". Ett annat sätt att medverka till mer lokalt innehåll är att samverka med de lokala och regionala näringslivet för att visa på affärsmöjligheter kopplat till våra projekt. Den här plattformen är ett led i just detta och vi är mycket glada för att vi tillsammans med Vindkraftcentrum får ännu en möjlighet att samverka kring dessa frågor och bidra till mervärden i de regioner där vi är verksamma.',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/gronhult.html',
                externalLink: 'https://group.vattenfall.com/se/var-verksamhet/vindprojekt/gronhult',
                linkText: 'Läs mer'
            },
        },
        stats: {
          currentStatus: 'building',
          turbines: 12,
          mw: 67.2,
          constructionPeriod: {
              start: 2021,
              end: 2022,
          },
        region: 'Gislaved och Tranemo kommun',
      },
      },
      {
        id: 'blaklidenfabodberget',
        name: 'Blakliden och Fäbodberget',
        companyName: 'Vattenfall',
        companyId: 'vattenfall',
        type: 'external',
        image: blaklidenfabodbergetImg,
        imageId: '1P8j71Nbd2JwooYAjxRo9tYv4bIiHdN3u',
        location: {
          lat: 64.16292,
          lng: 17.35407,
        },
        bounds: {
            ne: '63.96074168,17.70965133',
            sw: '60.28740006,13.58712057',
        },
        popularBusinessAreas: [
        'anlaggning',
        'bemanning',
        'betong',
        'bygg',
        'driftochunderhall',
        'el',
      ],
        description: {
            title: 'Blakliden och Fäbodberget',
            summary: 'Områdena för vindkraftsparken är Blakliden med 50 vindkraftverk i Åsele kommun och Fäbodberget med 34 vindkraftverk, norr om Fredrika i Åsele och Lycksele kommuner.',
            about: {
                aboutProject: 'Just nu pågår byggnationen av Vattenfalls hittills största landbaserade vindkraftspark. Områdena för vindkraftsparken är Blakliden med 50 vindkraftverk i Åsele kommun och Fäbodberget med 34 vindkraftverk, norr om Fredrika i Åsele och Lycksele kommuner. Totalt installeras 84 vindkraftverk med en total maxkapacitet på 353 MW. Byggnationen av vindkraftsparken har pågått sedan 2018, med årliga uppehåll under vintermånaderna. I november 2020 väntas anläggningsentreprenaden vara klar för att under sommaren 2021 kunna ta emot och resa de 84 turbinerna. Vindkraftsparken står klar 2022 och kommer då årligen att kunna producera förnybar el till cirka 220 000 svenska hushåll. På Vattenfall vill vi göra det möjligt att leva fossilfritt inom en generation. På vägen dit fortsätter vi våra ambitiösa vindkraftsatsningar för att dels ersätta annan energiproduktion som avvecklas och samtidigt ta höjd för ökad elektrifiering av bl a transport- och industrisektorn. För oss är det viktigt med ett lokalt engagemang i de områden där vi driver våra projekt. Det kan man säkerställa på många olika sätt bl a genom tidig dialog och att vara tillgängliga för frågor. Att viss återbäring från vindkraftsproduktionen går tillbaka till bygden är en självklarhet för oss och det sker genom det vi kallar "Stöd till lokal utveckling". Ett annat sätt att medverka till mer lokalt innehåll är att samverka med de lokala och regionala näringslivet för att visa på affärsmöjligheter kopplat till våra projekt. Den här plattformen är ett led i just detta och vi är mycket glada för att vi tillsammans med Vindkraftcentrum får ännu en möjlighet att samverka kring dessa frågor och bidra till mervärden i de regioner där vi är verksamma.',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/blaklidenochfabodberget.html',
                externalLink: 'https://group.vattenfall.com/se/var-verksamhet/vindprojekt/blakliden-och-fabodberget',
                linkText: 'Läs mer'
            },
        },
        stats: {
          currentStatus: 'building',
          turbines: 84,
          mw: 353,
          constructionPeriod: {
              start: 2018,
              end: 2022,
          },
        region: 'Åsele kommun',
      },
      },
      {
        id: 'kabeko',
        name: 'Kabeko',
        companyName: 'Kabeko',
        companyId: 'kabeko',
        type: 'external',
        image: kabekoImg,
        imageId: '11B3oR6l6LicY3tS6kI5XLB00tz0wmInR',
        location: {
          lat: 62.93068,
          lng: 17.78589
        },
        bounds: {
            ne: '63.96074168,17.70965133',
            sw: '60.28740006,13.58712057',
        },
        popularBusinessAreas: [
        'anlaggning',
        'transport',
        'betong',
        'ovrigt',
        'driftochunderhall',
        'el',
      ],
        description: {
            title: 'Kabeko',
            summary: 'Kabeko Kraft planerar för omkring 85 vindkraftverk inom fyra delområden i Kramfors och Sollefteå kommun med en förväntad installerad effekt omkring 550 MW.',
            about: {
                aboutProject: 'Kabeko Kraft har under 10 års tid arbetat med utvecklingen av Storhöjden, Vitberget, Sörlidberget och Knäsjöberget i Kramfors och Sollefteå kommuner. De fyra vindkraftsparkerna går under samlingsnamnet Project High Coast. Sammanlagt omfattar projektet 80-85 vindkraftverk i storleksordningen 6 MW vardera.  Elkraftproduktionen har beräknats till ca 1,6 TWh per år vilket motsvarar ca 1 % av Sveriges årliga elkraftbehov. Byggstart är planerad till 2022 och driftsättning är planerad under 2024/2025. Under 2021 kommer upphandling av vindkraftverk och totalentreprenad att utföras och därefter kommer anbudsförfrågningar gå ut till mindre företag. Vi har anslutit oss till Vindkraftcentrums affärsplattform med målsättningen att skapa goda förutsättningar för regionala företagare att vara med under upphandlingen. Vår målsättningen är att regionala företagare som lämnar anbud ska kunna prioriteras så långt som det är möjligt. Affärsplattformen kommer även att användas löpande under byggnationen då behov uppstår att snabbt hitta företag som kan leverera materiel och tjänster. Behovet av diverse kringtjänster kopplat till byggnationen kommer att vara stort och det kommer även att behövas tjänster som logi, mat med mera. Därför är det viktigt att fler företagare, oavsett bransch, anmäler sig till affärsplattformen. Ett brett nätverk är en förutsättning för att nya typer synergier och samarbeten ska kunna uppstå och Vindkraftcentrums affärsplattform kan utgöra just det nätverket för dig och ditt företag.',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/kabeko.html',
                externalLink: 'https://www.kabeko.com/',
                linkText: 'Läs mer'
            },
        },
        stats: {
          currentStatus: 'planning',
          turbines: 85,
          mw: 550,
          constructionPeriod: {
              start: 2022,
              end: 2025,
          },
        region: 'Kramfors kommun',
      },
      },
  ];