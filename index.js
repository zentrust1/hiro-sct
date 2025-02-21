const db = require('./firebase');
async function validateUser(username, password) {
  const ref = db.ref('users');
  const snapshot = await ref.once('value');
  const users = snapshot.val();

  if (!users) {
    throw new Error("Database kosong!");
  }
  const user = Object.values(users).find(u => u.username === username && u.password === password);

  if (user) {
    return user.number;
  } else {
    throw new Error('Username atau Password Salah!');
  }
}
async function registerUser(username, password, number) {
  const ref = db.ref('users');
  const newUserRef = ref.push();

  await newUserRef.set({ username, password, number });
  console.log('User berhasil didaftarkan!');
}
module.exports = { validateUser, registerUser };
