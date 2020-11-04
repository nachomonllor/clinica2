import * as firebase from 'firebase';
import { USERS, CATEGORIES } from './db-data';
import { environment } from './src/environments/environment';
const config = environment.firebase;
console.log('Uploading data to the database with the following config:\n');
console.log(JSON.stringify(config));

console.log('\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n');

const app = firebase.initializeApp(config);
const db = firebase.firestore();

main().then(r => console.log('Done.'));

async function main() {
  try {
    console.log('Start main...\n\n');
    await uploadData();
    console.log('\n\nClosing Application...');
    await app.delete();
  } catch (e) {
    console.log('Data upload failed, reason:', e, '\n\n');
  }
}

async function uploadData() {
 await uploadUsers();
 await uploadCategories();
}


async function uploadUsers() {
  const users = await db.collection('users');
  for (let user of Object.values(USERS)) {
    const userRef = await users.add(user);
    console.log(`Uploading user ${user['firstname']}`);
  }
}

async function uploadCategories() {
  const categories = await db.collection('categories');
  for (let category of Object.values(CATEGORIES)) {
    const categoryRef = await categories.add(category);
    console.log(`Uploading category ${category['name']}`);
  }
}