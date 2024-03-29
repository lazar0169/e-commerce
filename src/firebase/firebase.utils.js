import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD45Xs3EJi3PwPcGQHP0Sg93O8sQqvVFls",
    authDomain: "e-commerce-d09fd.firebaseapp.com",
    databaseURL: "https://e-commerce-d09fd.firebaseio.com",
    projectId: "e-commerce-d09fd",
    storageBucket: "",
    messagingSenderId: "652598020129",
    appId: "1:652598020129:web:7eb95d4d69662fe0603b60",
    measurementId: "G-1FGNRJWKG4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, data) => {
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
                ...data
            });
        } catch (error) {
            console.error('Error creating user: ', error.message);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;