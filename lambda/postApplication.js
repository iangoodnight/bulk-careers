const admin = require('firebase-admin');

const { getDatabase } = require('firebase-admin/database');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.SDK_TYPE,
      project_id: process.env.SDK_PROJECT_ID,
      private_key_id: process.env.SDK_PRIVATE_KEY_ID,
      private_key: process.env.SDK_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.SDK_CLIENT_EMAIL,
      client_id: process.env.SDK_CLIENT_ID,
      auth_uri: process.env.SDK_AUTH_URI,
      token_uri: process.env.SDK_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.SDK_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.SDK_CLIENT_X509_CERT_URL,
    }),
    databaseURL: process.env.DB_URL,
    databaseAuthVariableOverride: {
      uid: 'careers-app-service-worker',
    },
  });
}

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  data.submittedAt = Date.now();

  const db = getDatabase();

  const ref = db.ref('applicants');

  const newApplicantRef = ref.push();

  return newApplicantRef
    .set(data)
    .then(() => {
      console.log('Saved: ', newApplicantRef.key);
      return {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Success' }),
      };
    })
    .catch((error) => {
      console.log('Problems saving:', error.message);
      return {
        statusCode: 400,
        body: JSON.stringify({ msg: error.message }),
      };
    });
};
