import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVIq8LH5IbQm7-6NlHk74Vg5QsPFxhZAc",
    authDomain: "crwn-db-6a16b.firebaseapp.com",
    databaseURL: "https://crwn-db-6a16b.firebaseio.com",
    projectId: "crwn-db-6a16b",
    storageBucket: "crwn-db-6a16b.appspot.com",
    messagingSenderId: "239558797848",
    appId: "1:239558797848:web:649f7fb54cc5d95448716d",
    measurementId: "G-4BBR762WDV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    console.log(snapShot);
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
