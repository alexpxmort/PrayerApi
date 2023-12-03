

import admin from 'firebase-admin';
import {jsonConfig} from './config/keys/key.js'
import { dayVideosNossaSenhora } from './constants/videos/nove-meses-nossa-senhora-videos.js';
// Inicializa o aplicativo do Firebase com as credenciais do seu projeto
admin.initializeApp({
  credential: admin.credential.cert(jsonConfig),
  databaseURL: 'https://rosaryseven.firebaseio.com'
});


const collectionName = 'nove-meses-com-maria'

const collection = admin.firestore().collection(collectionName);






async function* processData(){
  for   (const item of dayVideosNossaSenhora){
    
    const existsDoc = await collection.where('day','==',item.day).where('month','==',item.month).get()

    if(existsDoc.size > 0){

       continue;
    }
   try {
    const docRef =  await collection.add({
      ...item
    })
    yield docRef
  } catch (error) {
    console.error('Erro ao adicionar objeto:', error);
  }

}
}




for await(const data of  processData()){
  console.log(data)
 }

 