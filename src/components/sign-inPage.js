import React from 'react'
import "../App.css"
import FacebookSignIn from './facebook-sign-in'
import GoogleSignIn from './google-sign-in'

export default function SignInPage({setUserName}) {

    const fetchingUser = (userName) => {
        setUserName(userName)
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <h2>Please Sign In</h2>
            <FacebookSignIn fetchingUser={fetchingUser}/>
            <GoogleSignIn fetchingUser={fetchingUser}/>
        </div>
    )
}
