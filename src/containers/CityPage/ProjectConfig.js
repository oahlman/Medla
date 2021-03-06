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
import stormossenImg from './images/stormossen.jpg';
import blekaImg from './images/bleka.jpg';
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
import exampleImg from './images/example.jpg';

const businessAreas = [
    { key: 'anlaggning', label: 'Anl??ggning' },
    { key: 'bemanning', label: 'Bemanning' },
    { key: 'betong', label: 'Betong' },
    { key: 'bygg', label: 'Byggentreprenad' },
    { key: 'driftochunderhall', label: 'Drift och underh??ll' },
    { key: 'el', label: 'El, larm och fiber' },
    { key: 'fordon', label: 'Fordon och d??ck' },
    { key: 'itochtelecom', label: 'IT och telecom' },
    { key: 'kostlogi', label: 'Kost och logi' },
    { key: 'maskinreparation', label: 'Maskinreparation' },
    { key: 'media', label: 'Media och PR' },
    { key: 'projektering', label: 'Projektering' },
    { key: 'servicetjanster', label: 'Servicetj??nster' },
    { key: 'skogsmaskintjanster', label: 'Skogsmaskintj??nster' },
    { key: 'sprangning', label: 'Spr??ngning' },
    { key: 'svets', label: 'Svets och metall' },
    { key: 'transport', label: 'Transport' },
    { key: 'tillverkning', label: 'Tillverkning' },
    { key: 'utbildning', label: 'Utbildning' },
    { key: 'ovrigt', label: '??vrigt' },
  ];

export const projects = [
  {
    id: 'lillmossen',
    name: 'Lillmossen',
    companyName: 'Medla',
    companyId: 'medla',
    type: 'medla',
    image: exampleImg,
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
        title: 'Vindpark Lillmossen',
        summary: 'Medlas exempel med 32 vindkraftverk med en totalh??jd om h??gst 290 m. Projektomr??det ??r bel??get ca 25 km s??der om Ume??, ca 20 km norr om Normaling och ca 8 km nordv??st om H??rnefors.',
        about: {
          aboutProject: 'Medlas exempel med 32 vindkraftverk med en totalh??jd om h??gst 290 m. Projektomr??det ??r bel??get ca 25 km s??der om Ume??, ca 20 km norr om Normaling och ca 8 km nordv??st om H??rnefors.',
          aboutCompany: '',
          externalServiceLink: 'https://www.medla.app/anslut-projekt',
      externalLink: 'https://www.medla.app/anslut-projekt',
          linkText: 'L??s mer'
      },
    },
    stats: {
      currentStatus: 'planning',
      turbines: 32,
      mw: 256,
      constructionPeriod: {
          start: 2022,
          end: 2024,
      },
      region: 'Ume?? kommun',
  },
  },
  {
    id: 'stormossen',
    name: 'Stormossen',
    companyName: 'wpd',
    companyId: 'wpd',
    type: 'medla',
    image: stormossenImg,
    location: {
      lat: 60.371137038777064,
      lng: 16.529531507934973,
    },
    bounds: {
      ne: '60.96597403,17.43740995',
      sw: '59.76505104,15.6256871',
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
        title: 'Vindpark Stormossen',
        summary: 'wpd unders??ker m??jligheterna att uppf??ra en vindpark om maximalt 32 vindkraftverk med en totalh??jd om h??gst 290 m. Projektomr??det ??r bel??get ca 7 km nordost om Horndal, ca 20 km sydost om Hofors och ca 20 km sydv??st om Sandviken. Bilden ??r ett fotomontage fr??n Horndal.',
        about: {
          aboutProject: 'wpd unders??ker m??jligheterna att uppf??ra en vindpark om maximalt 32 vindkraftverk med en totalh??jd om h??gst 290 m. Projektomr??det ??r bel??get ca 7 km nordost om Horndal, ca 20 km sydost om Hofors och ca 20 km sydv??st om Sandviken. Projektomr??det st??cker sig ??ver tre kommuner; Sandviken, Hofors och Avesta. Marken ??gs av Sveaskog och ett antal privata mark??gare. En vindkraftspark av den h??r storleken skulle kunna ge en ??rsproduktion p?? ca 842 GWh vilket r??cker f??r att f??rs??rja drygt 168000 villor med hush??llsel.',
          aboutCompany: '',
          externalServiceLink: 'https://www.wpd.se/',
      externalLink: 'https://www.wpd.se/aktuella-projekt/vindkraft-pa-land/stormossen/',
          linkText: 'L??s mer'
      },
    },
    stats: {
      currentStatus: 'planning',
      turbines: 32,
      mw: 256,
      constructionPeriod: {
          start: 0,
          end: 0,
      },
      region: 'Sandviken, Hofors och Avesta kommun',
  },
  },
  {
    id: 'bleka',
    name: 'Bleka',
    companyName: 'wpd',
    companyId: 'wpd',
    type: 'medla',
    image: blekaImg,
    location: {
      lat: 63.86755527451014,
      lng: 16.1675187962954,
    },
    bounds: {
      ne: '64.32126811,16.94344962',
      sw: '63.40614915,15.39384103',
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
      title: 'Vindpark Bleka',
      summary: 'wpd unders??ker m??jligheterna att uppf??ra en vindpark om maximalt 15 vindkraftverk med en totalh??jd om h??gst 290 m p?? h??jdomr??det Bleka, bel??get i Str??msunds kommun i J??mtlands l??n. Projektomr??det ??r bel??get ca 30 km nordost om Str??msund, mellan Ross??n och Backe. Bilden ??r ett fotomontage fr??n Rudsj??n.',
      about: {
        aboutProject: 'wpd unders??ker m??jligheterna att uppf??ra en vindpark om maximalt 15 vindkraftverk med en totalh??jd om h??gst 290 m p?? h??jdomr??det Bleka, bel??get i Str??msunds kommun i J??mtlands l??n. Projektomr??det ??r bel??get ca 30 km nordost om Str??msund, mellan Ross??n och Backe. Marken ??gs av Sveaskog, SCA samt en privat mark??gare. Projektomr??det l??mpar sig v??l f??r en vindkraftsetablering med tanke p?? att omr??det ligger h??gt och fritt samt l??ngt fr??n samlad bebyggelse. M??jlighet till elanslutning finns ??ven direkt p?? den befintliga ledning som korsar omr??det. En vindkraftspark av den h??r storleken skulle ge en ??rsproduktion p?? ca 270 GWh (270 000 000 kWh) vilket r??cker f??r att f??rs??rja drygt 54 000 villor med hush??llsel.',
        aboutCompany: '',
        externalServiceLink: 'https://www.wpd.se/',
        externalLink: 'https://www.wpd.se/aktuella-projekt/vindkraft-pa-land/bleka/',
          linkText: 'L??s mer'
      },
    },
    stats: {
      currentStatus: 'planning',
      turbines: 15,
      mw: 100,
      constructionPeriod: {
          start: 0,
          end: 0,
      },
      region: 'Str??msunds kommun',
  },
  },
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
      summary: 'Projektet ??r ett samarbete mellan SSAB, LKAB och Vattenfall och kommer innefatta av en demonstrationsanl??ggning f??r produktion av v??tgas och tillverkning av j??rnsvamp genom direktreduktion. Anl??ggningen planeras i G??llivare kommun och planeras vara klar 2026. Bild fr??n pilotanl??ggningen i Lule??.',
      about: {
        aboutProject: 'I demonstrationsanl??ggningen tar vi utvecklingen vidare fr??n tester i labbmilj?? och pilotskala, till att demonstrera produktion i industriell skala. Den planerade demonstrationsanl??ggningen omfattar produktion av v??tgas och tillverkning av j??rnsvamp genom direktreduktion av j??rnmalm med v??tgas. Anl??ggningen planeras i G??llivare kommun. Planen ??r att anl??ggningen ska vara klar 2026. Under 2020 p??b??rjades arbetet med att ta fram underlag f??r den milj??konsekvensbeskrivning som kommer ligga till grund f??r tillst??ndsans??kan till Mark- och Milj??domstolen. Hybrit genomf??rde under 2020 samr??d f??r de tv?? m??jliga placeringar som ursprungligen utreddes f??r demonstrationsanl??ggningen (i Lule?? kommun och G??llivare kommun). Hybrit g??r nu vidare med f??rdjupade dialoger och utredningar f??r etablering i G??llivare kommun f??r att s??kerst??lla att vi f??r tillg??ng till alla synpunkter och all information som kan ha betydelse f??r den fortsatta utformningen av anl??ggningen och milj??konsekvensbeskrivningen.',
        aboutCompany: '',
        externalServiceLink: '',
        externalLink: 'https://www.hybritdevelopment.se/samrad/',
        linkText: 'L??s mer'
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
      region: 'G??llivare kommun',
  },
  },
  {
    id: 'kolvallen',
    name: 'K??lvallen',
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
        title: 'K??lvallen',
        summary: 'Projektet har utvecklats av Arise och kommer best?? av 42 vindkraftverk med en ber??knad ??rsproduktion p?? ca 815GWH i K??lvallen, Ljusdals kommun.',
        about: {
          aboutProject: 'Arise utvecklar projektet K??lvallen i n??rheten av Sveg. K??lvallen ??r ett systerprojekt till projektet Skaft??sen, 35 turbiner, som f??r n??rvarande ??r under byggnation. K??lvallen har 42-43 fullt tillst??ndsgivna turbiner med en totalh??jd p?? 220 m. Vi hoppas p?? att kunna starta bygget under andra halvan av 2022 och avsluta under 2024.',
          aboutCompany: '',
          externalServiceLink: 'https://www.arise.se/',
          externalLink: 'https://www.arise.se/',
          linkText: 'L??s mer'
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
    name: 'Skaft??sen',
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
        title: 'Skaft??sen',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        about: {
          aboutProject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          aboutCompany: '',
          externalServiceLink: 'https://www.arise.se/',
          externalLink: 'https://www.arise.se/',
          linkText: 'L??s mer'
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
      region: 'H??rjedalens kommun',
  },
  },
  {
    id: 'bjornetjarnsberget',
    name: 'Bj??rnetj??rnsberget',
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
        title: 'Bj??rnetj??rnsberget',
        summary: 'Projektet har utvecklats av Cloudberry och kommer best?? av 18 vindkraftverk med en ber??knad ??rsproduktion p?? ca 450GWH i Bj??rnetj??rnsberget, Eda kommun.',
        about: {
          aboutProject: 'Projektet har utvecklats av Cloudberry och kommer best?? av 18 vindkraftverk med en ber??knad ??rsproduktion p?? ca 450GWH i Bj??rnetj??rnsberget, Eda kommun.',
          aboutCompany: '',
          externalServiceLink: 'https://www.cloudberry.no/',
          externalLink: 'https://www.cloudberry.no/',
          linkText: 'L??s mer'
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
    name: 'H??n',
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
        title: 'H??n',
        summary: 'Projektet har utvecklats av Cloudberry och kommer best?? av 5 vindkraftverk med en ber??knad ??rsproduktion p?? ca 74GWH i H??n, ??rj??ngs kommun.',
        about: {
          aboutProject: 'Projektet har utvecklats av Cloudberry och kommer best?? av 5 vindkraftverk med en ber??knad ??rsproduktion p?? ca 74GWH i H??n, ??rj??ngs kommun.',
          aboutCompany: '',
          externalServiceLink: 'https://www.cloudberry.no/sv/project/han-vindpark',
          externalLink: 'https://www.cloudberry.no/sv/project/han-vindpark',
          linkText: 'L??s mer'
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
      region: '??rj??ngs kommun',
  },
  },
    {
      id: 'bjornberget',
      name: 'Bj??rnberget',
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
          title: 'Bj??rnberget',
          summary: 'Projektet har utvecklats av RES och kommer best?? av 60 vindkraftverk p?? 220 m och totalt ca 372MW i Bj??rnberget, ??nge kommun.',
          about: {
            aboutProject: 'RES startar bygget av Bj??rnberget Vindkraftpark i ??nge kommun! Bj??rnberget har utvecklats av RES och kommer best?? av 60 vindkraftverk p?? 220 m och totalt 372MW. Vindkraftparken ??gs av Prime Capital och Enlight Renewable Energy. Bj??rnberget kommer ??rligen att producera el motsvarande ca 300 000 hush??lls elf??rbrukning samt bidrar till minskade utsl??pp av koldioxid motsvarande ca 600 000 CO2 ??rligen.',
            aboutCompany: '??ver 3000 anst??llda p?? RES Group drivs av visionen att skapa en v??rld d??r alla ska ha tillg??ng till prisv??rd koldioxidfri energi. RES ??r v??rldens st??rsta oberoende akt??r inom f??rnybar energi. Idag har vi en global portf??lj p?? 19GW varav vi f??rvaltar ??ver 7GW. Bolaget utvecklar, bygger och f??rvaltar anl??ggningar ??ver hela v??rlden. I Norden ??r vi i dagsl??get verksamma i Sverige och Norge. V??lkommen att registrera ditt f??retag h??r f??r samarbetsm??jligheter.',
            externalServiceLink: 'https://pilot.umigo.se/company/bjornberget.html',
            externalLink: 'https://res-group.com/sv/',
            linkText: 'L??s mer'
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
        region: '??nge kommun',
    },
    },
    {
        id: 'hocksjon',
        name: 'Hocksj??n',
        companyName: 'J??mtkraft',
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
            title: 'Hocksj??n',
            summary: '??ster om Hocksj??n i Sollefte?? kommun planerar J??mtkraft och Persson Invest att bygga en vindkraftspark, bygget planeras att p??b??rjas under 2021.',
            about: {
                aboutProject: 'Sammanlagt finns tillst??nd f??r 45 vindkraftverk. D?? tillst??ndet ??r ett s?? kallat BOX-tillst??nd har vi m??jligheten att anv??nda den senaste tekniken vilket inneb??r att vi med bibeh??llen totalh??jd ??nd?? ser en minskning av antal vindkraftverk till 23 vindkraftverk. Vi ber??knar att vi i anl??ggningen kommer producera ca 450 GWh/??r f??rnybar energi, det motsvarar energi till cirka 90 000 hush??ll*. 1,6 miljarder Projektet Hocksj??n Vind drivs gemensamt av J??mtkraft och Persson Invest. Vindkraftsprojektet f??rv??rvades fr??n H??glandsbolagen i b??rjan av 2019. Vindkraftsparken kommer att anslutas mot EON Eln??t och vidare mot Svenska Kraftn??ts nya stamn??tsstation i Storfinnforsen. 16 april 2020 beviljade Mark- och milj????verdomstolen f??rl??ngt ig??ngs??ttningstillst??nd f??r Hocksj??ns vindkraftsprojekt. Beslutet inneb??r att f??rberedelserna f??r uppf??randet av vindkraftparken kan ??terupptas. Anl??ggningen ber??knas vara klar under 2022. *Ber??knat p?? en ??rsf??rbrukning av hush??llsel p?? 5 000 kWh. ',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/hocksjon.html',
                externalLink: 'https://www.jamtkraft.se/om-jamtkraft/var-fornybara-produktion/vindkraft/planerade-vindkraftsprojekt/hocksjon/',
                linkText: 'L??s mer'
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
          region: 'Sollefte?? kommun',
      },
      },
      {
        id: 'stollsaterberget',
        name: 'St??lls??terberget',
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
            title: 'St??lls??terberget',
            summary: 'St??lls??terberget ligger cirka 40 km nordost om Torsby, cirka 25 km sydv??st om Malung och cirka 11 km fr??n n??rmaste samh??lle, St??llet.',
            about: {
                aboutProject: 'wpd arbetar aktivt med att ge regionala f??retag m??jligheter att delta vid byggnation och drift av v??ra vindparker. V??rt syfte ??r att ??ka chanserna f??r lokala f??retag att bist?? med tj??nster, b??de p?? l??ng sikt och mer akuta behov som dyker upp under parkens livstid. Vi kommer att anv??nda aff??rsplattformen f??r att snabbt hitta lokala f??retag som kan leverera tj??nster som uppst??r. Just nu p??g??r f??rberedelser inf??r avverkning, vilket genomf??rs av ett lokalt f??retag. Inom kort g??rs upphandling av huvudentrepren??r. wpd kommer att s??kerst??lla att ber??rda k??nner till plattformen och hj??lpa till att vid behov skapa f??rfr??gningar. Plattformen ??r under utveckling och wpd hoppas att den kommer att vara till stor nytta f??r att ??ka deltagandet och n??rvaron av lokala n??ringslivet under vindparkens livsl??ngd. L??s mer om projektet p?? www.wpd.se/stollsaterberget wpd tycker det ??r viktigt att de platser d??r vi bygger vindparker ges nya m??jlighet att utvecklas och att g??ra lokala satsningar som kanske inte hade kunnat genomf??ras utan ett extra tillskott i kassan. F??r att m??jligg??ra det avs??tter vi bygdemedel. Vi brinner f??r omst??llningen till en f??rnybar v??rld och h??llbarhet ??r ett av v??ra ledord. Vi bidrar inte bara med gr??n el i form av vindkraft och solkraft utan vi kompenserar ??ven f??r de koldioxidutsl??pp f??retaget orsakar. ',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/stollsaterberget.html',
                externalLink: 'https://www.wpd.se/stollsaterberget',
                linkText: 'L??s mer'
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
        region: 'Malung-S??len och Torsby kommun',
      },
      },
      {
        id: 'gronhult',
        name: 'Gr??nhult',
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
            title: 'Gr??nhult',
            summary: 'I Gislaved och Tranemo kommuner byggs 12 vindkraftverk med en ber??knad total installerad effekt p?? 67,2 MW. Parken tas i drift i slutet av 2022',
            about: {
                aboutProject: 'I maj p??b??rjades byggnationen av Gr??nhult vindkraftspark. Vi b??rjar med att uppf??ra v??gar och d??refter uppst??llningsplatser, fundament och det interna eln??tet f??r vindkraftsparken som ??r bel??gen i Tranemo och Gislaveds kommuner. Vindkraftverken levereras under sommaren 2022 och tas i drift i slutet av samma ??r. P?? Vattenfall vill vi g??ra det m??jligt att leva fossilfritt inom en generation. P?? v??gen dit forts??tter vi v??ra ambiti??sa vindkraftsatsningar f??r att dels ers??tta annan energiproduktion som avvecklas och samtidigt ta h??jd f??r ??kad elektrifiering av bl a transport- och industrisektorn. F??r oss ??r det viktigt med ett lokalt engagemang i de omr??den d??r vi driver v??ra projekt. Det kan man s??kerst??lla p?? m??nga olika s??tt bl a genom tidig dialog och att vara tillg??ngliga f??r fr??gor. Att viss ??terb??ring fr??n vindkraftsproduktionen g??r tillbaka till bygden ??r en sj??lvklarhet f??r oss och det sker genom det vi kallar "St??d till lokal utveckling". Ett annat s??tt att medverka till mer lokalt inneh??ll ??r att samverka med de lokala och regionala n??ringslivet f??r att visa p?? aff??rsm??jligheter kopplat till v??ra projekt. Den h??r plattformen ??r ett led i just detta och vi ??r mycket glada f??r att vi tillsammans med Vindkraftcentrum f??r ??nnu en m??jlighet att samverka kring dessa fr??gor och bidra till merv??rden i de regioner d??r vi ??r verksamma.',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/gronhult.html',
                externalLink: 'https://group.vattenfall.com/se/var-verksamhet/vindprojekt/gronhult',
                linkText: 'L??s mer'
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
        name: 'Blakliden och F??bodberget',
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
            title: 'Blakliden och F??bodberget',
            summary: 'Omr??dena f??r vindkraftsparken ??r Blakliden med 50 vindkraftverk i ??sele kommun och F??bodberget med 34 vindkraftverk, norr om Fredrika i ??sele och Lycksele kommuner.',
            about: {
                aboutProject: 'Just nu p??g??r byggnationen av Vattenfalls hittills st??rsta landbaserade vindkraftspark. Omr??dena f??r vindkraftsparken ??r Blakliden med 50 vindkraftverk i ??sele kommun och F??bodberget med 34 vindkraftverk, norr om Fredrika i ??sele och Lycksele kommuner. Totalt installeras 84 vindkraftverk med en total maxkapacitet p?? 353 MW. Byggnationen av vindkraftsparken har p??g??tt sedan 2018, med ??rliga uppeh??ll under vinterm??naderna. I november 2020 v??ntas anl??ggningsentreprenaden vara klar f??r att under sommaren 2021 kunna ta emot och resa de 84 turbinerna. Vindkraftsparken st??r klar 2022 och kommer d?? ??rligen att kunna producera f??rnybar el till cirka 220 000 svenska hush??ll. P?? Vattenfall vill vi g??ra det m??jligt att leva fossilfritt inom en generation. P?? v??gen dit forts??tter vi v??ra ambiti??sa vindkraftsatsningar f??r att dels ers??tta annan energiproduktion som avvecklas och samtidigt ta h??jd f??r ??kad elektrifiering av bl a transport- och industrisektorn. F??r oss ??r det viktigt med ett lokalt engagemang i de omr??den d??r vi driver v??ra projekt. Det kan man s??kerst??lla p?? m??nga olika s??tt bl a genom tidig dialog och att vara tillg??ngliga f??r fr??gor. Att viss ??terb??ring fr??n vindkraftsproduktionen g??r tillbaka till bygden ??r en sj??lvklarhet f??r oss och det sker genom det vi kallar "St??d till lokal utveckling". Ett annat s??tt att medverka till mer lokalt inneh??ll ??r att samverka med de lokala och regionala n??ringslivet f??r att visa p?? aff??rsm??jligheter kopplat till v??ra projekt. Den h??r plattformen ??r ett led i just detta och vi ??r mycket glada f??r att vi tillsammans med Vindkraftcentrum f??r ??nnu en m??jlighet att samverka kring dessa fr??gor och bidra till merv??rden i de regioner d??r vi ??r verksamma.',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/blaklidenochfabodberget.html',
                externalLink: 'https://group.vattenfall.com/se/var-verksamhet/vindprojekt/blakliden-och-fabodberget',
                linkText: 'L??s mer'
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
        region: '??sele kommun',
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
            summary: 'Kabeko Kraft planerar f??r omkring 85 vindkraftverk inom fyra delomr??den i Kramfors och Sollefte?? kommun med en f??rv??ntad installerad effekt omkring 550 MW.',
            about: {
                aboutProject: 'Kabeko Kraft har under 10 ??rs tid arbetat med utvecklingen av Storh??jden, Vitberget, S??rlidberget och Kn??sj??berget i Kramfors och Sollefte?? kommuner. De fyra vindkraftsparkerna g??r under samlingsnamnet Project High Coast. Sammanlagt omfattar projektet 80-85 vindkraftverk i storleksordningen 6 MW vardera.  Elkraftproduktionen har ber??knats till ca 1,6 TWh per ??r vilket motsvarar ca 1 % av Sveriges ??rliga elkraftbehov. Byggstart ??r planerad till 2022 och drifts??ttning ??r planerad under 2024/2025. Under 2021 kommer upphandling av vindkraftverk och totalentreprenad att utf??ras och d??refter kommer anbudsf??rfr??gningar g?? ut till mindre f??retag. Vi har anslutit oss till Vindkraftcentrums aff??rsplattform med m??ls??ttningen att skapa goda f??ruts??ttningar f??r regionala f??retagare att vara med under upphandlingen. V??r m??ls??ttningen ??r att regionala f??retagare som l??mnar anbud ska kunna prioriteras s?? l??ngt som det ??r m??jligt. Aff??rsplattformen kommer ??ven att anv??ndas l??pande under byggnationen d?? behov uppst??r att snabbt hitta f??retag som kan leverera materiel och tj??nster. Behovet av diverse kringtj??nster kopplat till byggnationen kommer att vara stort och det kommer ??ven att beh??vas tj??nster som logi, mat med mera. D??rf??r ??r det viktigt att fler f??retagare, oavsett bransch, anm??ler sig till aff??rsplattformen. Ett brett n??tverk ??r en f??ruts??ttning f??r att nya typer synergier och samarbeten ska kunna uppst?? och Vindkraftcentrums aff??rsplattform kan utg??ra just det n??tverket f??r dig och ditt f??retag.',
                aboutCompany: 'Description lorem ipsum',
                externalServiceLink: 'https://pilot.umigo.se/company/kabeko.html',
                externalLink: 'https://www.kabeko.com/',
                linkText: 'L??s mer'
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
      {
        id: 'lillmossen',
        name: 'Lillmossen',
        companyName: 'Medla',
        companyId: 'medla',
        type: 'medla',
        image: exampleImg,
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
            title: 'Vindpark Lillmossen',
            summary: 'Medlas exempel med 32 vindkraftverk med en totalh??jd om h??gst 290 m. Projektomr??det ??r bel??get ca 25 km s??der om Ume??, ca 20 km norr om Normaling och ca 8 km nordv??st om H??rnefors.',
            about: {
              aboutProject: 'Medlas exempel med 32 vindkraftverk med en totalh??jd om h??gst 290 m. Projektomr??det ??r bel??get ca 25 km s??der om Ume??, ca 20 km norr om Normaling och ca 8 km nordv??st om H??rnefors.',
              aboutCompany: '',
              externalServiceLink: 'https://www.medla.app/anslut-projekt',
          externalLink: 'https://www.medla.app/anslut-projekt',
              linkText: 'L??s mer'
          },
        },
        stats: {
          currentStatus: 'planning',
          turbines: 32,
          mw: 256,
          constructionPeriod: {
              start: 2022,
              end: 2024,
          },
          region: 'Ume?? kommun',
      },
      },
  ];