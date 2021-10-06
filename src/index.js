import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';
// import { seedDatabase } from './seed';



const config = { apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_Auth_Domain,
projectId: process.env.REACT_APP_projectId,
storageBucket: process.env.REACT_APP_Storage_Bucket,
messagingSenderId: process.env.REACT_APP_Messaging_SenderId,
appId: process.env.REACT_APP_AppId,
measurementId: process.env.REACT_APP_MEASUREMENTID
}

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase)



ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
