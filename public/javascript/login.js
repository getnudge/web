var provider = new firebase.auth.GithubAuthProvider();
var provider2 = new firebase.auth.GoogleAuthProvider();
function loginGithub() {
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;

    window.location.href = "./dashboard"
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}



function loginGoogle() {
  firebase
.auth()
.signInWithPopup(provider2)
.then((result) => {
  /** @type {firebase.auth.OAuthCredential} */
  var credential = result.credential;

  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = credential.accessToken;

  // The signed-in user info.
  var user = result.user;

  window.location.href = "./dashboard"
  // ...
}).catch((error) => {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.href = "./dashboard"
  } else {
  }
});