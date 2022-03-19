

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("username").innerHTML = user.displayName;
    } else {
        window.location.href = "./"
    }
  });

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "./"
      }).catch((error) => {
        window.alert("Error logging out \n"  + error)
      });
      
}


