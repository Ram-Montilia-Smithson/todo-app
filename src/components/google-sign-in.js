import React from 'react'
import "../App.css"
import firebase from "firebase"
import { auth } from "./firebase"
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

    
export default function GoogleSignIn({ fetchingUser}) {
        
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory()


    const handleGoogle = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                fetchingUser(user["displayName"])
                // ...
                history.push("/app")
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
    }

    return (
        <div>
            <Button onClick={() => handleGoogle()}>
                Google
            </Button>
        </div>
    )
}
    