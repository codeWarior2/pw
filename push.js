var push = require('web-push');

//let vapidKeys = push.generateVAPIDKeys();

//console.log(vapidKeys);

let keys = {
    publicKey: 'BIS-R9FTyoTsHMwDfFRzDu79x4rcdTzJiAMJ8rNZGShD4d23satHnVuKurU0ywixTBrHVC3IWd_werdf0PNuNgs',
    privateKey: 'OrreGqP-9XXOg3AFEK5VX_xdxRVNs72E505blJpswIc'
};

push.setVapidDetails('mailto', keys.publicKey, keys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message')