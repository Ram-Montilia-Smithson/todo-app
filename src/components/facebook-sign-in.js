import React from 'react'
import firebase from "firebase"
import { auth } from "./firebase"
import { Redirect } from "react-router-dom";

export default function FacebookSignIn() {

    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);

    firebase.auth()
        .getRedirectResult()
        .then((result) => {
            if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                // var token = credential.accessToken;
                // ...
            }
            // The signed-in user info.
            // var user = result.user;
        }).catch((error) => {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
        });

    return (
        <div>
            <Redirect to="/app"/>
        </div>
    )
}
