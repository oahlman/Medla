// This example uses events to detect when new listings are pending approval or
// are published and prints out information about those listings. The sequence
// ID of the last processed event is stored locally so that the event processing
// can continue from the correct point on next execution.

// This dotenv import is required for the `.env` file to be read
require('dotenv').config();
const fs = require('fs');

const flexIntegrationSdk = require('sharetribe-flex-integration-sdk');

const integrationSdk = flexIntegrationSdk.createInstance({
  // These two env vars need to be set in the `.env` file.
  clientId: process.env.FLEX_INTEGRATION_CLIENT_ID,
  clientSecret: process.env.FLEX_INTEGRATION_CLIENT_SECRET,

  // Normally you can just skip setting the base URL and just use the
  // default that the `createInstance` uses. We explicitly set it here
  // for local testing and development.
  baseUrl: process.env.FLEX_INTEGRATION_BASE_URL || 'https://flex-integ-api.sharetribe.com',
});

const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
const twilioSender = process.env.REACT_APP_TWILIO_PHONE_NUMBER;
const twilio = require('twilio')(accountSid, authToken);

// Start polloing from current time on, when there's no stored state
const startTime = new Date();

// Polling interval (in ms) when all events have been fetched. Keeping this at 1
// minute or more is a good idea. In this example we use 10 seconds so that the
// data is printed out without too much delay.
const pollIdleWait = 3000;
// Polling interval (in ms) when a full page of events is received and there may be more
const pollWait = 250;

// File to keep state across restarts. Stores the last seen event sequence ID,
// which allows continuing polling from the correct place
const stateFile = "./twilio.state";

const queryEvents = (args) => {
  var filter = {eventTypes: "user/created,user/updated"};
  return integrationSdk.events.query(
    {...args, ...filter}
  );
};

const saveLastEventSequenceId = (sequenceId) => {
  try {
    fs.writeFileSync(stateFile, JSON.stringify(sequenceId));
  } catch (err) {
    throw err;
  }
};

const loadLastEventSequenceId = () => {
  try {
    const data = fs.readFileSync(null);
    return parseInt(data, 10);
  } catch (err) {
    return null;
  }
};

const analyzeEvent = (event) => {
  if (event.attributes.resourceType == "user") {
    const {
      resource: user,
      previousValues,
      eventType,
    } = event.attributes;
    const userDetails = user.attributes;
    const userName = user.attributes.profile.displayName;
    const phoneNumber = user.attributes.profile.protectedData.phoneNumber;
    const verificationCode = user.attributes.profile.privateData.verificationCode;
    const changedValues = JSON.stringify(previousValues);
    const formattedPhoneNumber = phoneNumber.replace(/07/g, "+467");
    console.log(userDetails);

    switch(eventType) {
    case "user/created":
      if (null) {
        console.log(`A new listing is pending approval: ${userDetails}`);
      } else {
        console.log(`A new user has been created: ${userDetails}`);
      }
      break;
    case "user/updated":
      if (changedValues.includes('verificationCode')) {
        twilio.messages.create({
          body: `Din verifieringskod för Medla är ${verificationCode}`,
          from: twilioSender,
          to: formattedPhoneNumber
        })
      .then(message => console.log(message.sid));
        console.log(`A new verification code has been generated. Sending ${verificationCode} to ${formattedPhoneNumber}`);
      } else {
        console.log(`${userName} has been updated. No action required.`);
        }
      break;
    }
  }
};

const pollLoop = (sequenceId) => {
  var params = sequenceId ? {startAfterSequenceId: sequenceId} : {createdAtStart: startTime};
  queryEvents(params)
    .then(res => {
      const events = res.data.data;
      const lastEvent = events[events.length - 1];
      const fullPage = events.length === res.data.meta.perPage;
      const delay = fullPage? pollWait : pollIdleWait;
      const lastSequenceId = lastEvent ? lastEvent.attributes.sequenceId : sequenceId;

      events.forEach(e => {
        analyzeEvent(e);
      });

      if (lastEvent) saveLastEventSequenceId(lastEvent.attributes.sequenceId);

      setTimeout(() => {pollLoop(lastSequenceId);}, delay);
    });
};

const lastSequenceId = loadLastEventSequenceId();

console.log("Press <CTRL>+C to quit.");
if (lastSequenceId) {
  console.log(`Resuming event polling from last seen event with sequence ID ${lastSequenceId}`);
} else {
  console.log("No state found or failed to load state.");
  console.log("Starting event polling from current time.");
}

pollLoop(lastSequenceId);
