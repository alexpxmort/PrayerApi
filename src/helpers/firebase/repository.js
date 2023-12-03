import admin from 'firebase-admin';
import {jsonConfig} from '../../config/keys/key.js'
admin.initializeApp({
  credential: admin.credential.cert(jsonConfig),
  databaseURL: 'https://rosaryseven.firebaseio.com'
});


const kAdmin = Symbol('admin');
const kCollectionName = Symbol('collection');
const kGetCollection = Symbol('GetCollection');
class FirebaseRepository{
  constructor(){
    this[kAdmin] = admin;
    this[kCollectionName] = 'nove-meses-com-maria';
  }

  [kGetCollection](){
    const collection = this[kAdmin].firestore().collection(this[kCollectionName]);

    return collection;
  }

  async find(day,month){
    try{

      const collection = this[kGetCollection]();
     return await collection.where('day','==',day).where('month','==',month).get()
    }catch(err){
      throw err;
    }
  }
  
}

const repo =  new FirebaseRepository()
export default repo;