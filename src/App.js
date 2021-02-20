import React from 'react'
import TodoApp from "./components/todoApp"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GoogleSignIn from "./components/google-sign-in"
import FacebookSignIn from "./components/facebook-sign-in"



export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/app" component={TodoApp} />
                    {/* <Route path="/" component={GoogleSignIn} /> */}
                    {/* <Route path="/" component={FacebookSignIn}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}
