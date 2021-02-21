import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import FacebookSignIn from './facebook-sign-in'
import GoogleSignIn from './google-sign-in'

export default function SignInPage() {



    return (
        <div>
            <FacebookSignIn/>
            <GoogleSignIn/>
        </div>
    )
}
