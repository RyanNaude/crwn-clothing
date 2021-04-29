import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB6Kjd-eVb2VajLYEgZuhEdt6Hh36Ftkiw",
  authDomain: "crwn-db-b4136.firebaseapp.com",
  projectId: "crwn-db-b4136",
  storageBucket: "crwn-db-b4136.appspot.com",
  messagingSenderId: "562815797441",
  appId: "1:562815797441:web:43abe8e3af0037e5f8ac40",
  measurementId: "G-T8M2TBQ674",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
