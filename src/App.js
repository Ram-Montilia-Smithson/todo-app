import React from 'react'
import TodoApp from "./components/todoApp"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GoogleSignIn from "./components/google-sign-in"
import FacebookSignIn from "./components/facebook-sign-in"
import SignInPage from "./components/sign-inPage"


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/app" component={TodoApp} />
                    <Route exact path="/" component={SignInPage}/>
                    {/* <Route path="/google" component={GoogleSignIn} /> */}
                    {/* <Route path="/facebook" component={FacebookSignIn}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}
