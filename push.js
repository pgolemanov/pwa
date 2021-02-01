const push = require('web-push');

// VAPID keys should only be generated only once.
// const vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys = {
  publicKey:
    'BCjcJNEGbfJfBxCg4pwqhGHlRj-MN4ILCdVOANBpUbEwFZaZRm9K7bQgG1jXfb-n8MlF4ZCWphuxz-AhgqOFvAE',
  privateKey: 'o-oDV_k6U95OZ3PiUdkpnDdfl3sOuprp6xkNBycEIW8',
};

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);


sub = {};
push.setVapidDetails(sub, 'test message');
