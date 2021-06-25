const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BPz68ZbsMCBLPLXILMIUBAJ_n9N_U60BhxeT_b539I2U2BGN_TdZrt8EFAEGnbJpAXfh9rTjOIawmAZtWKMM5qw',
  privateKey: 'Y45y1ctP6oUKlr_2DhP8jDphlgUlx0fmd1tdbqU-v5U'
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
    p256dh: ''
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
