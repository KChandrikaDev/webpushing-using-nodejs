const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BLVBhcG12DDHvKck3rAvVjjIYoJnpFxKf9Ueo7ICd7YXhV8VBbdoqEySURZ0C2AJ3ZAPUhK5cmPUn3PesEFFr5w',
  privateKey: 'MGALZ9xhxZh54kjgJRkQfvl16QtEm8emPPAy_6-C9gA'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
