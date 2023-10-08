import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

export const environment = {
  firebase: {
    apiKey: "AIzaSyBnRF5f5ZsOVYUE4lTVsK8tNDtCb7XDWgc",
    authDomain: "bienes-sarmiento.firebaseapp.com",
    projectId: "bienes-sarmiento",
    storageBucket: "bienes-sarmiento.appspot.com",
    messagingSenderId: "242340559425",
    appId: "1:242340559425:web:2ce1e1d877d7603511a4c0"
  },
  production: false
};

const firebaseConfig = {
    apiKey: "AIzaSyBnRF5f5ZsOVYUE4lTVsK8tNDtCb7XDWgc",
    authDomain: "bienes-sarmiento.firebaseapp.com",
    projectId: "bienes-sarmiento",
    storageBucket: "bienes-sarmiento.appspot.com",
    messagingSenderId: "242340559425",
    appId: "1:242340559425:web:2ce1e1d877d7603511a4c0"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);