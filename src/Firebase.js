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
  try {
    await auth.signInWithEmailAndPassword(email, password);
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
  auth.signOut();
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
