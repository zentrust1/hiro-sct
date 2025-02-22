const admin = require('firebase-admin');
const serviceAccount = require('./firebase-credentials.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://database-a9ade-default-rtdb.asia-southeast1.firebasedatabase.app' // Ganti dengan URL Firebase kamu
});
const db = admin.database();
module.exports = db;