const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: 'xoxb-2210535565-6416225480785-a8g4OwF3WvRAp2kT4ZVcGcN6',
  signingSecret: '3bf73a85f50742ae6dd5cc76afeb3a2e',
  appToken: 'xapp-1-A06BSKDFNKF-6426439314160-8519fd197504f05d40c0d9f3bfc113e7bca126d418640b9c304718449d5391d4',
  socketMode: true
});

app.event('team_join')

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);
  
    console.log('⚡️ Bolt app is running!');
  })();