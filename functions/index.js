const functions = require('firebase-functions');
const slack = require('slack-notify')(functions.config().slack.webhook);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.slackNotification = functions.firestore.document('timers/{timer}').onCreate((snap, ctx) => {
  slack.send({
    channel: '#notify',
    icon_emoji: 'grinning',
    text: `新しいタイマー「${snap.data().title}」が作成されました。\nhttps://timer.mogam.in/timers/${snap.id}`,
    username: 'SIMPLE COUNT DOWN'
  });
});
