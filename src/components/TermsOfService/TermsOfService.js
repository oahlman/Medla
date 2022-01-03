import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.module.css';
import NamedLink from '../NamedLink/NamedLink';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Senast uppdaterad:  okt 26, 2021</p>

      <h2>ÖVERBLICK</h2>
      <p>
      Denna webbplats drivs av Peer Digital Sweden AB (org.nr 559295-3821).
      På hela webbplatsen hänvisar termerna "vi", "oss" och "vårt" till Peer Digital Sweden.
      Peer Digital Sweden erbjuder denna webbplats (www.medla.app), inklusive all information,
      verktyg och tjänster som är tillgängliga från denna webbplats för dig, användaren, beroende på din
      godkännande av alla villkor, policyer och meddelanden som anges här.
      </p>


      <p>
      Genom att besöka vår sida och/eller köpa något från oss, engagerar du dig i vår
      "Tjänst" och samtycker till att vara bunden av följande villkor
      ("Användarvillkor", "Villkor"), inklusive dessa ytterligare villkor
      och policyer som hänvisas till häri och/eller tillgängliga via hyperlänk. Dessa användarvillkor gäller
      till alla användare av webbplatsen, inklusive utan begränsning användare som är webbläsare, leverantörer,
      kunder, handlare och/eller bidragsgivare till innehåll.
      </p>

      <p>
      Läs dessa användarvillkor noggrant innan du går in på eller använder vår webbplats.
      Genom att gå in på eller använda någon del av webbplatsen samtycker du till att vara bunden av dessa villkor för
      Service. Om du inte godkänner alla villkor i detta avtal,
      då får du inte komma åt webbplatsen eller använda några tjänster. Om dessa användarvillkor
      anses vara ett erbjudande är godkännandet uttryckligen begränsat till dessa användarvillkor.
      </p>


      <p>
      Alla nya funktioner eller verktyg som läggs till den nuvarande marknadsplatsen ska
      även omfattas av användarvillkoren. Du kan granska den senaste
      version av användarvillkoren när som helst på denna sida. Vi reserverar
      rätt att uppdatera, ändra eller ersätta någon del av dessa användarvillkor genom
      lägga upp uppdateringar och/eller ändringar på vår webbplats. Det är ditt ansvar
      för att kontrollera denna sida med jämna mellanrum för ändringar. Din fortsatta användning av eller
      tillgång till webbplatsen efter publicering av eventuella ändringar utgör
      godkännande av dessa ändringar.
      </p>

      <h2>VILLKOR FÖR ONLINE-MARKNADSPLATS   </h2>
      <p>
      Genom att godkänna dessa användarvillkor intygar du att du är minst myndig i ditt land eller provins där du bor, eller att du är myndig i din stat eller provins där du bor och att du har gett oss ditt samtycke att tillåta någon av dina minderåriga anhöriga att använda denna webbplats.
      Du får inte använda våra tjänster för något olagligt eller obehörigt ändamål och du får inte heller, när du använder tjänsten, bryta mot några lagar i din jurisdiktion (inklusive men inte begränsat till upphovsrättslagar).
      Du får inte överföra några maskar eller virus eller någon kod av destruktiv karaktär.
      Ett brott mot eller brott mot något av Villkoren kommer att resultera i ett omedelbart uppsägning av dina tjänster.
      </p>

      <h2>ALLMÄNNA VILLKOR</h2>
      <p>
      Vi förbehåller oss rätten att när som helst vägra service till vem som helst av vilken anledning som helst.
      Du förstår att ditt innehåll (inte inklusive kreditkortsinformation) kan överföras okrypterat och involvera (a) överföringar över olika nätverk; och (b) ändringar för att överensstämma med och anpassa till tekniska krav för att ansluta nätverk eller enheter. Kreditkortsinformation är alltid krypterad under överföring över nätverk.
      Du samtycker till att inte reproducera, duplicera, kopiera, sälja, sälja vidare eller utnyttja någon del av tjänsten, användning av tjänsten eller tillgång till tjänsten eller någon kontakt på webbplatsen genom vilken tjänsten tillhandahålls, utan uttryckligt skriftligt tillstånd från oss .
      Rubrikerna som används i detta avtal ingår endast för bekvämlighet och kommer inte att begränsa eller på annat sätt påverka dessa villkor.
      </p>

      <h2>INFORMATIONEN PÅ WEBBPLATSEN</h2>
      <p>
      Vi är inte ansvariga om information som görs tillgänglig på denna webbplats inte är korrekt, fullständig eller aktuell.
      Materialet på denna webbplats tillhandahålls endast för allmän information och bör inte litas på eller användas som
      den enda grunden för att fatta beslut utan att konsultera primära, mer exakta, mer fullständiga eller mer aktuella källor
      av information. All tillit till materialet på denna webbplats sker på egen risk.
      Denna webbplats kan innehålla viss historisk information. Historisk information är nödvändigtvis inte
      aktuell och tillhandahålls endast för din referens. Vi förbehåller oss rätten att ändra innehållet på denna webbplats när som helst,
      men vi har ingen skyldighet att uppdatera någon information på vår sida. Du samtycker till att det är ditt ansvar att övervaka ändringar på vår webbplats.
      Vidare, så förbehåller vi oss rätten att när som helst korrigera inkorrekta företagsuppgifter utan att först kontakta användaren.
      </p>


      <h2>ÄNDRINGAR AV TJÄNSTEN OCH PRISER</h2>
      <p>
      Priserna för våra tjänster kan ändras utan föregående meddelande.
      Vi förbehåller oss rätten att när som helst ändra eller avbryta
      Tjänsten (eller någon del eller innehåll därav) utan föregående meddelande när som helst.
      Vi ska inte vara ansvariga gentemot dig eller någon tredje part för något
      ändring, prisändring, avstängning eller avbrytande av tjänsten.
      </p>

      <h2>TJÄNSTER </h2>
      <p>
      Vi förbehåller oss rätten, men är inte skyldiga, att begränsa åtkomsten till våra tjänster till någon person, geografisk region eller jurisdiktion. Vi kan utöva denna rätt från fall till fall. Vi förbehåller oss rätten att begränsa antalet tjänster som vi erbjuder.
      </p>


      <h2>ANVÄNDARANSVAR</h2>
      <p>
      Användare förbinder sig att använda Tjänsten i enlighet med Villkoren.
      Användare ansvarar för att deras användarinformation hålls hemlig och att åtkomst till
      Användarens identifieringsmetod inte avslöjas för någon annan. Användare får inte heller tillåta, direkt eller indirekt,
      tredje part att använda tjänsten i deras namn. Om
      Användare har anledning att misstänka att någon obehörig har tillgång till deras användarinformation och/eller
      identifieringsmetod måste sådana Användare omedelbart kontakta Peer Digital Sweden så att Peer Digital Sweden
      kan blockera den aktuella användarens konto i väntan på en utredning.
      Användare ansvarar för all information som publiceras via Tjänsten. Detta innebär att Användare
      ska säkerställa att den information som lämnas vid registrering eller på annat sätt via Tjänsten
      är korrekt och att utlämnandet av denna information inte på något sätt strider mot gällande
      lag eller villkoren.<br></br><br></br>
      Användare förbinder sig att inte använda information som erhållits via Tjänsten för något annat ändamål än
      kontakt med andra användare. Det är således inte tillåtet att lämna ut andra Användares kontaktuppgifter
      eller annan information om dessa till tredje part..<br></br><br></br>

      Användare garanterar att Användare innehar alla nödvändiga rättigheter till sådant innehåll som en Användare skapar och/
      eller uppladdningar i Applikationen som t.ex. bilder, videor och annonstexter ("Användargenererat innehåll"),
      antingen genom att skapa det användargenererade innehållet själv eller av skaparen av sådant användargenererat innehåll
      innehåll som ger användaren tillåtelse att använda det användargenererade innehållet i applikationen i enlighet med villkoren.
      Genom att ladda upp användargenererat innehåll ger Användaren Peer Digital Sweden en obegränsad rätt att fritt
      göra sig av med det användargenererade innehållet, till exempel genom att bearbeta, anpassa, lagra eller kopiera det och
      göra det tillgängligt för allmänheten och att ytterligare hyra ut dessa rättigheter till eventuella partners. Peer Digital Sverige
      kan också använda det användargenererade innehållet för marknadsföringsändamål. Peer Digital Swedens rättigheter kvarstår jämna
      efter att en annons har raderats.
      <br></br>
      <br></br>
      Peer Digital Swedens användning av det användargenererade innehållet ger inte upphov till något krav på ersättning
      från användare.
      Peer Digital Sweden har rätt att radera information som Användare lämnar i Applikationen.
      Peer Digital Sweden har även rätt att stänga av Användare från att använda Tjänsten utan föregående varning
      tills vidare om det finns misstanke om otillbörlig användning av Användarens användarinformation eller om information
      tillhandahållen av Användaren verkar strida mot tillämplig lag eller om Användaren på annat sätt bryter mot Villkoren.
      Användare kan hållas ansvariga för förlust och skada på Peer Digital Sweden eller någon annan till följd av Användarens
      brott mot Villkoren eller tillämplig lag eller till följd av annat vårdslöst beteende.
      Peer Digital Sweden har rätt att begära kreditupplysningar från tredje part vid Användning vid behov.

      </p>


      <h2>VÅRT ANSVAR</h2>
      <p>
      Vi strävar efter att se till att Tjänsten är tillgänglig tjugofyra (24) timmar om dygnet. Peer Digital Sweden
      bär dock inte något ansvar om hela eller delar av Tjänsten är otillgänglig när som helst eller under någon period, oavsett orsak.
      Tillgång till tjänsten kan tillfälligt och utan förvarning avbrytas i händelse av systemfel, underhåll,
      reparation eller av andra skäl utanför vår kontroll.
      Peer Digital Sweden strävar efter att säkerställa att all information i Applikationen är i huvudsak korrekt.
      Vi garanterar dock inte riktigheten eller fullständigheten av innehållet i applikationen. Vi kan när som helst
     och utan förvarning genomföra ändringar i Applikationen.
      Innehållet i Applikationen tillhandahålls "i befintligt skick" och vi lämnar inga garantier angående innehållet.

      </p>



      <h2>PERSONUPPGIFTER</h2>
      <p>
      Vi kommer att samarbeta fullt ut med alla myndigheter och följa alla domstolsbeslut som beordrar utlämnande av personlig information om eller platsinformation för alla som har publicerat innehåll i strid med Villkoren.

      Användningen av Tjänsten innefattar behandling av personuppgifter för olika ändamål. Peer Digital Sweden är personuppgiftsansvarig för all behandling av personuppgifter som Peer Digital Sweden, eller annan på uppdrag av Peer Digital Sweden, utför inom ramen för Tjänsten. Personuppgifter är uppgifter som direkt eller indirekt kan hänföras till en person, till exempel namn och adress. Kontaktuppgifter till Peer Digital Sweden finns längst ner i denna information.

      Genom att acceptera villkoren samtycker Användare till att Peer Digital Sweden behandlar (i) kontaktinformation såsom namn, e-post, telefonnummer, adress och personnummer, (ii) betalningsinformation såsom betal- eller kreditkort eller bankkonto för betalning , (iii) geografisk position såsom koordinater, (iv) detaljerad transaktionshistorik inklusive kvitton och tider, (v) IP-adress (vi) användarinformation, om Användare för de syften som anges i klausulen nedan.

      Peer Digital Sweden kan använda, sammanställa, bearbeta och analysera informationen som beskrivs i avsnittet ovan för att administrera Användarens konto hos Peer Digital Sweden, för att marknadsföra Peer Digital Sweden och Peer Digital Swedens potentiella partners 'produkter och tjänster, för att analysera Användarnas användning av Tjänst, för att säkerställa Tjänstens tekniska funktionalitet och för att uppfylla skyldigheter enligt lag eller förordning. (i) Kontaktinformation används för att skapa ett konto hos Peer Digital Sweden . (ii) Betalningsinformation används för att kunna ta betalt av Användaren vid köp av tjänster av Peer Digital Sweden. (iii) Geografisk position används för att kunna visa projekt, jobb och företag närmast dig eller närmaste önskade adress. (iv) Transaktionshistorik används för att presentera historiken för användaren och för att beräkna svarsfrekvensen och genomsnittliga svarstider. (v) IP-adressen används för att skapa ett konto hos Peer Digital Sveriges betalningsleverantör Stripe.

      Användare har rätt att kostnadsfritt få information och registrera utdrag om den behandling av personuppgifter som Peer Digital Sweden utför gällande Användare. Användare har även rätt att begära rättelse, radering eller blockering av personuppgifter som är felaktiga.

      Andra parter som tar del av din användarinformation från Peer Digital Sweden. Vi delar dina personuppgifter med: (i) Polisen när vi utreder brott. (ii) Stripe, Inc. för betalningslösning. (iii) Heroku, Google Cloud Services och Amazon Web Services eller någon sådan leverantör som från tid till annan ersätter dem för hantering av servermiljöer såsom databaser och applikationer. (iv) Intercom.io eller någon sådan leverantör som från tid till annan ersätter dem för kundsupporthantering. (v) Customer.io eller sådan leverantör som från tid till annan ersätter dem för hantering av e-postmeddelanden såsom bokningsbekräftelse och välkomstbrev. (vi) LINK Mobility International eller sådan leverantör som från tid till annan ersätter honom för hantering av SMS-aviseringar. (vii) IT-konsulter som vi anlitar då och då för service och utveckling av våra system.

      I de fall vi överför dina uppgifter till ett annat företag som behandlar dina personuppgifter för vår räkning som personuppgiftsbiträde har vi ett biträdesavtal på plats med strikta instruktioner om behandling av personuppgifter, sekretess och säkerhet.

      </p>

      <h2>ANSVARSBEGRÄNSNING</h2>
      <p>
      Peer Digital Sweden friskriver sig härmed, i den utsträckning det är tillåtet enligt gällande lag, från ansvar för direkta och indirekta skador och/eller förluster eller skador som uppkommit för Användare eller för någon tredje part i samband med användningen av eller hinder för användningen av Tjänsten oavsett av hur skadan uppstår och oavsett om skadan orsakats av vårdslöshet, avtalsbrott eller annat

      Ansvarsbegränsningen i detta Avsnitt 11 ändrar eller begränsar inte en användares rättigheter som konsument och utesluter eller begränsar inte ansvar i den utsträckning som inte tillåts enligt tillämplig lag.

      </p>

      <h2>VALFRIA VERKTYG</h2>
      <p>
      Vi kan ge dig tillgång till tredjepartsverktyg som vi varken övervakar eller har någon kontroll eller input över.

      Du bekräftar och samtycker till att vi tillhandahåller åtkomst till sådana verktyg "i befintligt skick" och "som tillgängligt" utan några garantier, representationer eller villkor av något slag och utan stöd. Peer Digital Sweden tar inte något som helst ansvar för händelser som uppstår från eller relaterat till din användning av valfria verktyg från tredje part.
      All användning av dig av valfria verktyg som erbjuds via webbplatsen sker helt på din egen risk och du bör se till att du är bekant med och godkänner villkoren för vilka verktyg tillhandahålls av den eller de relevanta tredjepartsleverantörerna.

      Vi kan också i framtiden erbjuda nya tjänster och/eller funktioner via webbplatsen (inklusive lanseringen av nya verktyg och resurser). Sådana nya funktioner och/eller tjänster ska också omfattas av dessa användarvillkor.
      </p>


      <h2>TREDJEPARTSLÄNKAR</h2>
      <p>
      Visst innehåll och vissa tjänster som är tillgängliga via vår tjänst kan innehålla material från tredje part.

      Tredjepartslänkar på denna webbplats kan leda dig till tredje parts webbplatser som inte är anslutna till oss. Vi är inte ansvariga för att undersöka eller utvärdera innehållet eller noggrannheten och vi garanterar inte och kommer inte att ha något ansvar för material eller webbplatser från tredje part, eller för något annat material, produkter eller tjänster från tredje part.

      Vi är inte ansvariga för någon skada eller skada relaterad till köp eller användning av varor, tjänster, resurser, innehåll eller andra transaktioner som görs i samband med tredje parts webbplatser. Läs noggrant tredjepartens policyer och praxis och se till att du förstår dem innan du gör någon transaktion. Klagomål, anspråk, bekymmer eller frågor angående produkter från tredje part bör riktas till tredje part.
      </p>

      <h2>ANVÄNDARKOMMENTARER, FEEDBACK OCH ANDRA INLÄMNINGAR</h2>
      <p>
      Om du på vår begäran skickar vissa specifika bidrag (till exempel tävlingsbidrag) eller utan en begäran från oss skickar du kreativa idéer, förslag, förslag, planer eller annat material, antingen online, via e-post, med post eller på annat sätt (sammantaget "kommentarer"), samtycker du till att vi när som helst, utan begränsningar, kan redigera, kopiera, publicera, distribuera, översätta och på annat sätt använda i vilket medium som helst, det gäller alla kommentarer som du vidarebefordrar till oss. Vi är och ska inte vara skyldiga (1) att hålla några kommentarer i förtroende; (2) att betala ersättning för eventuella kommentarer; eller (3) att svara på eventuella kommentarer.

      Vi kan, men har ingen skyldighet att, övervaka, redigera eller ta bort innehåll som vi efter egen bedömning fastställer är olagligt, stötande, hotfullt, ärekränkande, ärekränkande, pornografiskt, obscent eller på annat sätt stötande eller bryter mot någon parts immateriella rättigheter eller dessa användarvillkor .

      Du samtycker till att dina kommentarer inte kommer att kränka någon tredje parts rättigheter, inklusive upphovsrätt, varumärke, integritet, personlighet eller annan personlig eller äganderätt. Du samtycker vidare till att dina kommentarer inte kommer att innehålla ärekränkande eller på annat sätt olagligt, kränkande eller obscent material, eller innehålla något datavirus eller annan skadlig kod som på något sätt kan påverka driften av Tjänsten eller någon relaterad webbplats. Du får inte använda en falsk e-postadress, utge dig för att vara någon annan än dig själv, eller på annat sätt vilseleda oss eller tredje part om ursprunget till några kommentarer. Du är ensam ansvarig för alla kommentarer du gör och deras riktighet. Vi tar inget ansvar och tar inget ansvar för eventuella kommentarer som skapats av dig eller någon tredje part.

      </p>


      <h2>PERSONLIG INFORMATION</h2>
      <p>
      Ditt inlämnande av personlig information via marknadsplatsen styrs av vår integritetspolicy. Besök https://www.medla.app/privacy-policy för att se vår integritetspolicy.
      </p>


      <h2>FEL OCH UNDANTAG</h2>
      <p>
      Ibland kan det finnas information på vår webbplats eller i Tjänsten som innehåller typografiska fel, felaktigheter eller utelämnanden som kan relatera till produktbeskrivningar, priser, kampanjer, erbjudanden, produktfraktavgifter, transittider och tillgänglighet. Vi förbehåller oss rätten att korrigera eventuella fel, felaktigheter eller utelämnanden, och att ändra eller uppdatera information eller annullera beställningar om någon information i tjänsten eller på någon relaterad webbplats är felaktig när som helst utan föregående meddelande (inklusive efter att du har skickat din beställning) .

      Vi åtar oss ingen skyldighet att uppdatera, ändra eller förtydliga information i tjänsten eller på någon relaterad webbplats, inklusive men inte begränsat till prisinformation, förutom vad som krävs enligt lag. Inget specificerat uppdaterings- eller uppdateringsdatum som tillämpas i Tjänsten eller på någon relaterad webbplats bör tas för att indikera att all information i Tjänsten eller på någon relaterad webbplats har ändrats eller uppdaterats.

      </p>


      <h2>FÖRBJUDNEN ANVÄNDNING</h2>
      <p>
      Utöver andra förbud som anges i användarvillkoren, är du förbjuden att använda webbplatsen eller dess innehåll: (a) för något olagligt syfte; (b) att uppmana andra att utföra eller delta i några olagliga handlingar; (c) att bryta mot internationella, federala, provinsiella eller statliga bestämmelser, regler, lagar eller lokala förordningar; (d) att göra intrång i eller kränka våra immateriella rättigheter eller andras immateriella rättigheter; (e) att trakassera, missbruka, förolämpa, skada, förtala, förtala, nedvärdera, skrämma eller diskriminera baserat på kön, sexuell läggning, religion, etnicitet, ras, ålder, nationellt ursprung eller funktionshinder; (f) att lämna in falsk eller vilseledande information; (g) att ladda upp eller överföra virus eller någon annan typ av skadlig kod som kommer eller kan användas på något sätt som kommer att påverka funktionaliteten eller driften av Tjänsten eller någon relaterad webbplats, andra webbplatser eller Internet; (h) att samla in eller spåra andras personliga information; (i) att spamma, nätfiska, phish, förevändning, spindel, krypa eller skrapa; (j) för något obscent eller omoraliskt syfte; eller (k) för att störa eller kringgå säkerhetsfunktionerna i Tjänsten eller någon relaterad webbplats, andra webbplatser eller Internet. Vi förbehåller oss rätten att avsluta din användning av tjänsten eller någon relaterad webbplats för att bryta mot någon av de förbjudna användningarna.

      </p>

      <h2>FRISKRIVNING AV GARANTIER; BEGRÄNSNING AV ANSVAR</h2>
      <p>
      Vi garanterar inte att din användning av vår tjänst kommer att vara oavbruten, snabb, säker eller felfri.

      Vi garanterar inte att resultaten som kan erhållas från användningen av tjänsten kommer att vara korrekta eller tillförlitliga.

      Du samtycker till att vi från tid till annan kan ta bort tjänsten på obestämd tid eller avbryta tjänsten när som helst, utan att meddela dig.

      Du samtycker uttryckligen till att din användning av, eller oförmåga att använda, tjänsten sker på egen risk. Tjänsten och alla produkter och tjänster som levereras till dig genom tjänsten tillhandahålls (förutom vad som uttryckligen anges av oss) tillhandahålls "i befintligt skick" och "som tillgängliga" för din användning, utan någon representation, garantier eller villkor av något slag, varken uttryckliga eller underförstådd, inklusive alla underförstådda garantier eller villkor för säljbarhet, säljbar kvalitet, lämplighet för ett visst ändamål, hållbarhet, titel och icke-intrång.

      I inget fall ska Peer Digital Sweden, våra direktörer, tjänstemän, anställda, dotterbolag, agenter, entreprenörer, praktikanter, leverantörer, tjänsteleverantörer eller licensgivare hållas ansvariga för någon skada, förlust, anspråk eller någon direkt, indirekt, tillfällig, bestraffande, speciell , eller följdskador av något slag, inklusive, men inte begränsat till förlorad vinst, förlorad inkomst, förlorade besparingar, förlust av data, ersättningskostnader eller liknande skador, oavsett om de är baserade på kontrakt, skadestånd (inklusive vårdslöshet), strikt ansvar eller annat, som uppstår från din användning av någon av tjänsten eller alla produkter som anskaffats med hjälp av tjänsten, eller för andra anspråk som på något sätt är relaterade till din användning av tjänsten eller någon produkt, inklusive, men inte begränsat till, eventuella fel eller utelämnanden i något innehåll, eller någon förlust eller skada av något slag som uppstår som ett resultat av användningen av tjänsten eller något innehåll (eller produkt) som publicerats, överförts eller på annat sätt gjorts tillgängligt via tjänsten, även om de informeras om deras möjlighet. Eftersom vissa stater eller jurisdiktioner inte tillåter uteslutning eller begränsning av ansvar för följdskador eller oförutsedda skador, i sådana stater eller jurisdiktioner, ska vårt ansvar begränsas till den maximala utsträckning som lagen tillåter.
      </p>



      <h2>ERSÄTTNING</h2>
      <p>
      Du samtycker till att gottgöra, försvara och hålla Peer Digital Sweden och vårt moderbolag, dotterbolag, dotterbolag, partners, tjänstemän, direktörer, agenter, entreprenörer, licensgivare, tjänsteleverantörer, underleverantörer, leverantörer, praktikanter och anställda ofarliga från alla anspråk eller krav, inklusive rimliga advokatarvoden, gjorda av tredje part på grund av eller till följd av ditt brott mot dessa användarvillkor eller de dokument som de innehåller genom referens, eller ditt brott mot någon lag eller tredje parts rättigheter.
      </p>


      <h2>GILTIGHET</h2>
      <p>
      I händelse av att någon bestämmelse i dessa användarvillkor fastställs vara olaglig, ogiltig eller omöjlig att verkställa, ska sådan bestämmelse ändå vara verkställbar i den utsträckning som tillåts enligt tillämplig lag, och den icke verkställbara delen ska anses vara avskild från dessa villkor för Delgivning ska ett sådant beslut inte påverka giltigheten och verkställbarheten av några andra återstående bestämmelser.
      </p>

      <h2>UPPSÄGNING</h2>
      <p>
      Parternas skyldigheter och skulder som ådragits före uppsägningsdatumet ska fortsätta att gälla efter uppsägningen av detta avtal för alla ändamål.

      Dessa användarvillkor gäller såvida de inte sägs upp av dig eller oss. Du kan säga upp dessa användarvillkor när som helst genom att meddela oss att du inte längre vill använda våra tjänster.

      Om du enligt vår egen bedömning misslyckas, eller vi misstänker att du har misslyckats, att följa något villkor eller bestämmelse i dessa användarvillkor, kan vi också säga upp detta avtal när som helst utan förvarning och du kommer att förbli ansvarig för alla belopp som förfaller till och med datum för uppsägning; och/eller kan därför neka dig tillgång till våra tjänster (eller någon del därav).
      </p>

      <h2>HELA AVTALET</h2>
      <p>
      Underlåtenhet av oss att utöva eller upprätthålla någon rättighet eller bestämmelse i dessa användarvillkor ska inte utgöra ett avstående från sådan rättighet eller bestämmelse.

      Dessa användarvillkor och eventuella policyer eller driftregler som publicerats av oss på denna webbplats eller med avseende på Tjänsten utgör hela avtalet och förståelsen mellan dig och oss och styr din användning av Tjänsten, och ersätter alla tidigare eller samtidiga avtal, kommunikationer och förslag , vare sig det är muntligt eller skriftligt, mellan dig och oss (inklusive, men inte begränsat till, tidigare versioner av användarvillkoren).

      Eventuella oklarheter i tolkningen av dessa användarvillkor ska inte tolkas mot den som utarbetar.
      </p>


      <h2>GÄLLANDE LAG</h2>
      <p>
      Dessa användarvillkor och eventuella separata avtal genom vilka vi tillhandahåller dig tjänster ska styras av och tolkas i enlighet med GDPR och svensk lag.
      </p>

      <h2>ÄNDRINGAR AV ANVÄNDARVILLKOR</h2>
      <p>
      Du kan granska den senaste versionen av användarvillkoren när som helst på den här sidan.

      Vi förbehåller oss rätten att efter eget gottfinnande uppdatera, ändra eller ersätta någon del av dessa användarvillkor genom att publicera uppdateringar och ändringar på vår webbplats. Det är ditt ansvar att regelbundet kontrollera vår webbplats för ändringar. Din fortsatta användning av eller åtkomst till vår webbplats eller tjänsten efter att eventuella ändringar av dessa användarvillkor publicerats innebär att du accepterar dessa ändringar.

      </p>

      <h2>KONTAKTINFORMATION</h2>
      <p>
      Frågor om Användarvillkoren ska skickas till oss på info@peerdigital.se.
      </p>


    </div>





  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
