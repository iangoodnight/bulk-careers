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
};


const app = initializeApp(firebaseConfig);

function writeApplicationData(data) {
  const db = getDatabase(app);

  const { firstName, lastName } = data;

  const id = `${Date.now()}-${firstName}-${lastName}`;

  set(ref(db, `applicants/${id}`), data)
    .then(() => {
      console.log('Saved it!')
    })
    .catch((error) => {
      console.log('Problems saving: ', error.message);
    });
}

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  console.log('FirebaseConfig');
  console.log(firebaseConfig);
  console.log(app);

  try {
    writeApplicationData(data);
    return {
      statusCode: 200,
      body: JSON.stringify({test: 'foo'}),
      headers,
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({msg: error.toString()}),
      headers,
    };
  }
};
