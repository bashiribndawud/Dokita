import firebase from 'firebase/app'
import 'firebase/firestore'

 import devConfig from '../../firebase.config'

export const prodConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };

// for production
// firebase.initializeApp(prodConfig)

// for development
firebase.initializeApp(devConfig)

export const firestore = firebase.firestore()

export default firebase