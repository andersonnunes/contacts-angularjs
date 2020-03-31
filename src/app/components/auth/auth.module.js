angular
  .module('components.auth', ['ui.router', 'firebase'])
  .config(function ($firebaseRefProvider) {
    var config = {
      apiKey: "AIzaSyDBFp4WJMUt3botaJTlXhJMB4sGbzMUTWA",
      authDomain: "contacts-angularjs.firebaseapp.com",
      databaseURL: "https://contacts-angularjs.firebaseio.com",
      storageBucket: "contacts-angularjs.appspot.com"
    };

    $firebaseRefProvider.registerUrl({
      default: config.databaseURL,
      contacts: "${config.databaseURL}" + "/contacts",
    });

    firebase.initializeApp(config);
  });