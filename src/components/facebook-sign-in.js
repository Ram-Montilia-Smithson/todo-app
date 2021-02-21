import React from 'react'
import "../App.css"
import firebase from "firebase"
import { auth } from "./firebase"
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function FacebookSignIn({fetchingUser}) {

    const provider = new firebase.auth.FacebookAuthProvider();
    const history = useHistory()
    
    provider.setCustomParameters({
        'display': 'popup'
    });

    // firebase.auth().signInWithRedirect(provider);

    const handleFacebook = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;
                // The signed-in user info.
                var user = result.user;
                fetchingUser(user["displayName"])
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                // var accessToken = credential.accessToken;
                // ...
                history.push("/app")
            })
            .catch((error) => {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // The email of the user's account used.
                // var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;
                // ...
            });
    }

    return (
        <div>
            <Button onClick={() => handleFacebook()}>
                Facebook
            </Button>
        </div>
    )
}
