// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
'use strict';

const functions = require('firebase-functions');

const formData = require('form-data');

const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: 'api',
  key: functions.config().mailgun.key,
});

const message = {
  from: 'Yourself in 50 years <no-reply@notime.app>',
  to: 'goodnight.ian@gmail.com',
  subject: 'Hello world.',
  text: 'Fuck this shit.',
};

exports.alertNewApplication = functions.database
  .ref('/applicants')
  .onWrite(async (change) => {
    functions.logger.log(change.after);
    mg.messages
      .create(functions.config().mailgun.base, message)
      .catch((error) => functions.logger.log(error));
    return null;
  });
