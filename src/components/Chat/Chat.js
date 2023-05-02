import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Linkify from 'react-linkify';
import css from './Chat.module.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  console.log('key', apiKey)

  const medlaLinkDecorator = (href, text, key) => {
    return (
      <a href={href} key={key} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  };
  
  const messageContainerRef = useRef(null);

  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;
  
    setMessages((prevMessages) => [...prevMessages, { user: 'Du', text: message }]);
  
    setMessage('');
    setIsWaitingForResponse(true);
  
    try {
      const response = await callChatGPT(message);
      setMessages((prevMessages) => [...prevMessages, { user: 'Bot', text: response }]);
    } catch (error) {
      setMessages((prevMessages) => [...prevMessages, { user: 'Bot', text: 'Oops, something went wrong. Please try again later.' }]);
    } finally {
      setIsWaitingForResponse(false);
    }
  };
  
  

  const callChatGPT = async (message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Du är Medlas hjälpsamma kundsupportassistent som talar svenska och är kunnig om Medlas tjänster och funktioner. Dina svar är alltid väldigt korta och koncisa (max 2 meningar), istället för långa svar så hänvisar du till länkar på Medla som medla.app/s, medla.app/signup och medla.app/vanliga-fragor, och när du inte har svar hänvisar du till supportmailen på support@medla.app. Dela aldrig länkar som inte slutar med "medla.app"',
            },
            {
              role: 'assistant',
              content: `
    Vanliga frågor
    
    1. Vilka använder Medla?
    Kommuner som vill visa och göra sitt näringsliv mer tillgängligt, projektörer som vill lyfta vinsterna och förankra sina etableringar, byggentreprenad som behöver varor och tjänster i projekt och lokala verksamheter som vill leverera till projekten.

    2. Vilka projekt används Medla för?
    Hållbara energi- och industriprojekt i alla faser (vindparker, solparker, vätgasanläggningar, batterifabriker, projekt för grönt stål och många fler)

    3. Är det lätt att komma igång?
    Det tar bara ett par minuter, registrera ditt företag och välj vilka projekt och branscher som är relevanta för dig.

    4. Hur kan Medla vara gratis för småföretagare?
    Medlas huvudsakliga affärsmodell ligger hos kommuner och projektägare.

    5. Kostar Medla något?
    Småföretagare kommer alltid kunna använda Medla gratis.

    6. Vilka typer av jobb finns på Medla?
    Alla projektbehov kan läggas upp, allt från anläggningsarbete på arbetsplatsen till indirekta behov så som catering, frisörtjänster och fritidsaktiviteter.

    7. Hur hittar jag till jobben?
    Efter registrering kan du se samtliga jobb på Medla, jobb visas upp i vår sökfuntion som du enkelt hittar i toppen av hemsidan.

    8. Kan jag följa flera projekt med samma konto?
    Ja, på Medla registrerar man sig en gång och väljer därefter enkelt de projekt där man vill synas på.

    9. Vilka typer av jobb kan jag hitta på Medla?
    På Medla publiceras alla typer av behov som dyker upp kring projektet. Det kan vara allt från boende och måltider till frisörer och grävmaskiner.
    
    10. Vilka står bakom Medla?
    Medla drivs av Peer Digital Sweden AB. Bolaget är startat av tidigare projektledare och utvecklare från Umeå Universitet.
    
    Om Medla
    
    Vad är Medla?
    Medla är en digital tjänst för lokal jobbförmedling i gröna industriprojekt. Med Medla kan företag och enskilda firmor enkelt visa upp sin verksamheter, hitta relevanta jobbmöjligheter och påbörja affärsrelationer med aktörer i energisektorn. För projektägare gör Medla det möjligt att nå ut till det lokala näringslivet och effektivisera planering, bygge och underhåll av sina projekt.

    Bakgrund
    Medla bygger på forskning i informatik, digitalisering och landsbygdsutveckling, samt på användarpiloter i vindkraftbranschen. Medla och tillhörande tjänster tillhandahålls och utvecklas av Peer Digital Sweden AB med tillsammans med en referensgrupp av experter inom svenskt näringsliv och grön industri.

    Våra mål
    1. Underlätta utbyggnaden av fossilfri industri i Sverige.
    2. Tillgängliggöra projekt så att lokala företag och samhällen kan dra nytta av investeringar i deras närhet.
    3. Stärka förankring mellan projektaktörer och lokala intressenter.

    Kontakt
    Har du frågor eller funderingar så når du oss på info@medla.app.

    En hälsning från Medlas initiativtagare
    Trots att elektrifieringen och klimatomställningen blir allt viktigare frågor så har projekteringen bara blivit svårare, att andelen vindkraftsprojekt som fick veto ökade från 8% till 40% mellan 2016-2020 är talande.

    Lokal förankring och samverkan är viktiga pusselbitar för lyckade industriprojekt. Arbetstillfällen bidrar till detta, och tack vare era projekt kan fler av dem skapas lokalt (upp till 200% fler än idag) om vi jobbar tillsammans — med alla aktörer i kedjan.

    Utmaningen för många projektörer är att:
    Hinna bygga relationer och samarbeten med alla aktörer (kommunen, näringslivet, byggentreprenaden, intresseorganisationer) som kan underlätta valet av lokala leverantörer och öka samhällsnyttan av projektet.

    Påvisa nyttan som skapas lokalt och regionalt i samband med en projektetablering.

    Därför byggde vi Medla — för att hjälpa er lyfta och stärka samhällsnyttan som era industriprojekt låser upp, och effektivisera arbetet — från samråd till driftsättning och vidare till nästa projekt.

    Sedan 2019 har vi byggt digitala lösningar som hjälpt Sveriges största projektörer och över 700 lokala verksamheter att bygga bättre industrier och starkare lokalsamhällen — och det är bara början. Vi hoppas ni vill göra oss sällskap på resan.

    Oskar och Adam
    Initiativtagare till Medla`,
            },
            ...messages.map((msg) => ({
              role: msg.user === 'Du' ? 'user' : 'assistant',
              content: msg.text,
            })),
            {
              role: 'user',
              content: message,
            },
          ],
          max_tokens: 150,
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        },
      );
  
      const assistantMessage = response.data.choices && response.data.choices[0].message;
      if (assistantMessage) {
        return assistantMessage.content.trim();
      }
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
    }
  
    return null;
  };  

  return (
    <>
      {isChatVisible && (
        <div className={css.chatContainer}>
          <button
            onClick={() => setIsChatVisible(false)}
            className={css.closeChatButton}
          >
            ×
          </button>
          <div className={css.messageContainer} ref={messageContainerRef}>
            {messages.map((msg, index) => (
              <div key={index} className={msg.user === 'Du' ? css.you : css.bot}>
                <p>
                  <strong>{msg.user}:</strong>{' '}
                  <Linkify componentDecorator={medlaLinkDecorator}>{msg.text}</Linkify>
                </p>
              </div>
            ))}
            {isWaitingForResponse && (
              <div className={css.bot}>
                <div className={css.loadingDots}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={sendMessage}>
            <div className={css.formContainer}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Prova att fråga 'Hur anmäler jag mig?' eller 'Vilka tjänster erbjuder ni?'"
                className={css.input}
              />
              <button type="submit" className={css.button}>Skicka</button>
            </div>
          </form>
        </div>
      )}
      {!isChatVisible && (
        <button
          onClick={() => setIsChatVisible(true)}
          className={css.openChatButton}
        >
          Öppna Chatt
        </button>
      )}
    </>
  );
};

export default Chat;
