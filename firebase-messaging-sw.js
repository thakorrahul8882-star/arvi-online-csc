
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyABMSiPr8QoRaNSMdWDL-Y_cjrrqcfsb_c",
  authDomain: "arvi-online-csc.firebaseapp.com",
  databaseURL: "https://arvi-online-csc-default-rtdb.firebaseio.com",
  projectId: "arvi-online-csc",
  storageBucket: "arvi-online-csc.firebasestorage.app",
  messagingSenderId: "57206587457",
  appId: "1:57206587457:web:3723726ba2f2ecbd6d86c0",
  measurementId: "G-JJX8CE0TE9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title =
    payload.notification?.title || "ARVI ONLINE & CSC";

  const options = {
    body:
      payload.notification?.body ||
      "નવી યોજના, ભરતી અથવા સેવા અપડેટ આવી છે.",
    data: {
      url:
        payload.fcmOptions?.link ||
        "https://thakorrahul8882-star.github.io/arvi-online-csc/"
    }
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url =
    event.notification.data?.url ||
    "https://thakorrahul8882-star.github.io/arvi-online-csc/";

  event.waitUntil(clients.openWindow(url));
});
