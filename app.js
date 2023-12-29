const { App } = require('@slack/bolt');
const { APP } = require('dotenv').config()

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.token,
  signingSecret: process.env.signingSecret,
  appToken: process.env.appToken,
  socketMode: true
});

const channelID = "C02B7CWDD0E" // #annoucements
const userID = "U01MPHKFZ7S" 

app.event('member_joined_channel', async ({ event, client, logger }) => {
  console.log("test")

 
  await app.client.chat.postMessage({
    channel: channelID,
    text: `hi`
  })


});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);
  
    console.log('⚡️ Bolt app is running!');
  })();