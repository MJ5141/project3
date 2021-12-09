 import firebase from "firebase";
 import "firebase/firestore";



 const firebaseConfig = {
  apiKey: "AIzaSyDEHJFicM-Sa_BkChfERhZzORw0HLw_trg",
  authDomain: "the-iconic-fea3a.firebaseapp.com",
  databaseURL: "https://the-iconic-fea3a-default-rtdb.firebaseio.com",
  projectId: "the-iconic-fea3a",
  storageBucket: "the-iconic-fea3a.appspot.com",
  messagingSenderId: "1067691451069",
  appId: "1:1067691451069:web:ea428c33ad99d94db3cdd4"
};


  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();
  console.log(db);
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signInWithEmailAndPassword = async (email, password) => {
    console.log("xssssssssss");
  try {

    await auth.signInWithEmailAndPassword(email, password);
    const userName =  db.collection("users").where("email", "==", email)
    userName.get().then(s => {
      s.forEach( singleProduct => {
        const name = singleProduct._delegate._document.data.value.mapValue.fields.name.stringValue

        console.log(name);
        sessionStorage.setItem('user_name', name)
        sessionStorage.setItem('just_logged_in', true)
        console.log(name);
      })

      console.log(s);
    })
    console.log(userName);



  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  firebase.auth().signOut().then(() => {
  sessionStorage.removeItem('user_name')

}).catch((error) => {
  console.log(error);
});

};

export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout
};
