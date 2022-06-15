import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD1xGqBJqBt4cbfkKkdp6kqljglgjSVHCs',
  authDomain: 'mirtauhid-portfolio.firebaseapp.com',
  projectId: 'mirtauhid-portfolio',
  storageBucket: 'mirtauhid-portfolio.appspot.com',
  messagingSenderId: '711624658086',
  appId: '1:711624658086:web:92b3cb39bbd1f7ddb07867',
  measurementId: 'G-38T24PBBL7',
};

export const app = initializeApp(firebaseConfig);
