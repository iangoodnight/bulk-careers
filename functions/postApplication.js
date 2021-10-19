const { initializeApp } = require('firebase/app');

const { getDatabase, ref, set } = require('firebase/database');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseUrl: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const db = getDatabase(app);

  const { firstName, lastName } = data;

  const id = `${Date.now()}-${firstName}-${lastName}`;

  return set(ref(db, `applicants/${id}`), data)
    .then(() => {
      console.log('Saved it! ', id);
      return {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Success' }),
      };
    })
    .catch((error) => {
      console.log('Problems saving: ', error.message);
      return {
        statusCode: 400,
        body: JSON.stringify({ msg: error.toString() }),
      };
    });
};
