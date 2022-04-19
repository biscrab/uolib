importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase.js');

// Initialize Firebase
firebase.initializeApp({	
  apiKey: "AIzaSyBg1OlFnO6jcO7l9l_NK0x3kyJICjaglSQ",
  authDomain: "uolib-337211.firebaseapp.com",
  projectId: "uolib-337211",
  storageBucket: "uolib-337211.appspot.com",
  messagingSenderId: "236232072754",
  appId: "1:236232072754:web:81e3fb61896ad341d4e62b",
  measurementId: "G-Q1NR8N7C9J"
});

self.addEventListener("install", function (event) {
  console.log("Hello world from the Service Worker");
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = '유라이브';
  const notificationOptions = {
    body: '알림메세지',
    icon: 'https://novelpia.com/img/favicon/apple-icon-114x114.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});